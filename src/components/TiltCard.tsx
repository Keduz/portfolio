'use client'

import { useRef, useState, MouseEvent, ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
  glareOpacity?: number
  scale?: number
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  glareOpacity = 0.12,
  scale = 1.02,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({
    transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  })
  const [glare, setGlare] = useState({
    opacity: 0,
    background: 'transparent',
  })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`,
      transition: 'transform 0.1s ease-out',
    })

    // Glare effect
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 180
    setGlare({
      opacity: glareOpacity,
      background: `linear-gradient(${angle}deg, rgba(255,255,255,0.25) 0%, transparent 60%)`,
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    })
    setGlare({ opacity: 0, background: 'transparent' })
  }

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Glare overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{
          opacity: glare.opacity,
          background: glare.background,
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  )
}
