'use client'

import { useEffect, useRef, useState, useMemo } from 'react'

interface Shape {
  id: number
  type: 'circle' | 'ring' | 'square' | 'triangle' | 'dot' | 'cross' | 'hexagon'
  x: number
  y: number
  size: number
  opacity: number
  color: string
  speed: number
  rotation: number
  floatDuration: number
  floatDelay: number
}

function generateShapes(count: number): Shape[] {
  const colors = ['#6C63FF', '#00D4AA', '#8B83FF', '#00B894', '#A29BFF']
  const types: Shape['type'][] = ['circle', 'ring', 'square', 'triangle', 'dot', 'cross', 'hexagon']
  const shapes: Shape[] = []

  for (let i = 0; i < count; i++) {
    shapes.push({
      id: i,
      type: types[i % types.length],
      x: 5 + Math.random() * 90,
      y: 5 + Math.random() * 90,
      size: 10 + Math.random() * 30,
      opacity: 0.04 + Math.random() * 0.07,
      color: colors[i % colors.length],
      speed: 0.3 + Math.random() * 0.7,
      rotation: Math.random() * 360,
      floatDuration: 5 + Math.random() * 5,
      floatDelay: Math.random() * 4,
    })
  }
  return shapes
}

function getShapePath(type: Shape['type'], size: number): string {
  const h = size / 2
  switch (type) {
    case 'circle':
      return `M${h},${h * 0.2}A${h * 0.8},${h * 0.8},0,1,1,${h},${size * 0.8 + 0.001}A${h * 0.8},${h * 0.8},0,1,1,${h},${h * 0.2}Z`
    case 'ring':
      return `M${h},${h * 0.3}A${h * 0.7},${h * 0.7},0,1,1,${h},${size * 0.7 + 0.001}A${h * 0.7},${h * 0.7},0,1,1,${h},${h * 0.3}Z`
    case 'square':
      return `M${size * 0.15},${size * 0.15}H${size * 0.85}V${size * 0.85}H${size * 0.15}Z`
    case 'triangle':
      return `M${h},${size * 0.1}L${size * 0.9},${size * 0.85}L${size * 0.1},${size * 0.85}Z`
    case 'dot':
      return `M${h},${h * 0.6}A${h * 0.4},${h * 0.4},0,1,1,${h},${h * 1.4 + 0.001}A${h * 0.4},${h * 0.4},0,1,1,${h},${h * 0.6}Z`
    case 'cross':
      return `M${h},${size * 0.2}V${size * 0.8}M${size * 0.2},${h}H${size * 0.8}`
    case 'hexagon': {
      const pts = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 2
        return `${h + h * 0.7 * Math.cos(a)},${h + h * 0.7 * Math.sin(a)}`
      })
      return `M${pts[0]}L${pts[1]}L${pts[2]}L${pts[3]}L${pts[4]}L${pts[5]}Z`
    }
    default:
      return ''
  }
}

export default function FloatingShapes() {
  const shapes = useMemo(() => generateShapes(16), [])
  const containerRef = useRef<HTMLDivElement>(null)
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)
  const posRef = useRef<{ x: number; y: number }[]>(shapes.map(() => ({ x: 0, y: 0 })))

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Smooth animation loop for mouse tracking
  useEffect(() => {
    const animate = () => {
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      shapes.forEach((shape, i) => {
        const el = elementsRef.current[i]
        if (!el) return

        const targetX = mx * shape.speed * 35
        const targetY = my * shape.speed * 35
        const lerp = 0.04 + shape.speed * 0.03

        posRef.current[i].x += (targetX - posRef.current[i].x) * lerp
        posRef.current[i].y += (targetY - posRef.current[i].y) * lerp

        el.style.transform = `translate(${posRef.current[i].x}px, ${posRef.current[i].y}px)`
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [shapes])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {shapes.map((shape, i) => (
        <div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
        >
          {/* Mouse-reactive layer */}
          <div ref={(el) => { elementsRef.current[i] = el }}>
            {/* Float + rotate animation via CSS */}
            <div
              style={{
                animation: `shapeFloat ${shape.floatDuration}s ease-in-out ${shape.floatDelay}s infinite, shapeRotate ${shape.floatDuration * 2}s linear ${shape.floatDelay}s infinite`,
              }}
            >
              <svg
                width={shape.size}
                height={shape.size}
                viewBox={`0 0 ${shape.size} ${shape.size}`}
                style={{ opacity: shape.opacity }}
              >
                <path
                  d={getShapePath(shape.type, shape.size)}
                  fill={shape.type === 'dot' || shape.type === 'circle' ? shape.color : 'none'}
                  stroke={shape.type !== 'dot' && shape.type !== 'circle' ? shape.color : 'none'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes shapeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes shapeRotate {
          0% { rotate: 0deg; }
          100% { rotate: 360deg; }
        }
      `}</style>
    </div>
  )
}
