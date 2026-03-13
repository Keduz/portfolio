'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { useRef, useState, useEffect, useCallback } from 'react'
import * as THREE from 'three'

function FloatingGeometry() {
  const solidRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const mx = mouseRef.current.x
    const my = mouseRef.current.y

    if (solidRef.current) {
      solidRef.current.rotation.x = t * 0.08 + my * 0.2
      solidRef.current.rotation.y = t * 0.12 + mx * 0.2
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.06 + my * 0.15
      wireRef.current.rotation.y = t * 0.1 + mx * 0.15
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
      <group>
        {/* Solid inner mesh with distortion */}
        <mesh ref={solidRef} scale={2}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#6C63FF"
            emissive="#6C63FF"
            emissiveIntensity={0.15}
            roughness={0.4}
            metalness={0.8}
            transparent
            opacity={0.12}
            distort={0.25}
            speed={1.5}
          />
        </mesh>

        {/* Wireframe outer mesh */}
        <mesh ref={wireRef} scale={2.4}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#6C63FF"
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>

        {/* Inner glow sphere */}
        <mesh scale={0.6}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial
            color="#6C63FF"
            transparent
            opacity={0.05}
          />
        </mesh>

        {/* Teal accent ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]} scale={2.8}>
          <torusGeometry args={[1, 0.005, 16, 100]} />
          <meshBasicMaterial color="#00D4AA" transparent opacity={0.2} />
        </mesh>

        {/* Second ring */}
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]} scale={3.2}>
          <torusGeometry args={[1, 0.003, 16, 100]} />
          <meshBasicMaterial color="#6C63FF" transparent opacity={0.12} />
        </mesh>
      </group>
    </Float>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 200

  const positions = useCallback(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions()}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#6C63FF"
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#6C63FF" />
      <pointLight position={[-10, -5, -10]} intensity={0.5} color="#00D4AA" />
      <pointLight position={[0, -10, 5]} intensity={0.3} color="#6C63FF" />

      <FloatingGeometry />
      {!isMobile && <Particles />}
      <Stars
        radius={60}
        depth={50}
        count={isMobile ? 500 : 1500}
        factor={2.5}
        fade
        speed={0.3}
      />
    </Canvas>
  )
}
