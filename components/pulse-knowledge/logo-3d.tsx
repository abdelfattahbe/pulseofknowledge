"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, PerspectiveCamera, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import type * as THREE from "three"

function LogoModel() {
  const groupRef = useRef<any>()
  const arcRefs = useRef<THREE.Mesh[]>([])
  const sphereRef = useRef<THREE.Mesh>(null)
  const [textVisible, setTextVisible] = useState(false)

  // Initialize animation - reduced delay from 2000ms to 500ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Enhanced floating animation with zoom effect
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating rotation
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1

      // Zoom in/out effect - more pronounced
      const zoomScale = 1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.15
      groupRef.current.scale.setScalar(zoomScale)
    }

    // Pulse animation for arcs
    arcRefs.current.forEach((arc, i) => {
      if (arc) {
        const material = arc.material as THREE.MeshStandardMaterial
        material.emissiveIntensity = 0.5 + Math.sin(state.clock.getElapsedTime() * 0.8 + i * 0.3) * 0.2
      }
    })

    // Enhanced pulse animation for sphere
    if (sphereRef.current) {
      const material = sphereRef.current.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = 0.7 + Math.sin(state.clock.getElapsedTime() * 1.2) * 0.3

      // More pronounced scale animation
      const sphereScale = 0.08 + Math.sin(state.clock.getElapsedTime() * 2.5) * 0.02
      sphereRef.current.scale.setScalar(sphereScale)
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Curved arcs with enhanced materials */}
      {[1, 1.5, 2].map((radius, i) => (
        <mesh
          key={i}
          position={[0, 0, -1]}
          rotation={[0, 0, Math.PI * 0.75]}
          ref={(el) => {
            if (el) arcRefs.current[i] = el
          }}
        >
          <torusGeometry args={[radius, 0.03, 16, 100, Math.PI * 0.75]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.8}
            roughness={0.2}
            emissive="#D4AF37"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Small sphere at the end of the arc with enhanced glow effect */}
      <mesh position={[1.4, 1.4, -1]} ref={sphereRef}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.1}
          emissive="#D4AF37"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Enhanced glow effect for the sphere */}
      <mesh position={[1.4, 1.4, -1.01]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.3} />
      </mesh>

      {/* Animated text container with enhanced animations */}
      {textVisible && (
        <>
          {/* Main title with zoom effect */}
          <motion.group
            position={[0, -0.2, 0]}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              times: [0, 0.6, 1],
            }}
          >
            <mesh>
              <planeGeometry args={[4, 0.6]} />
              <meshBasicMaterial transparent opacity={0} />
            </mesh>
            <Text
              position={[0, 0, 0.01]}
              fontSize={0.4}
              color="#D4AF37"
              anchorX="center"
              anchorY="middle"
              font="/fonts/Inter-Bold.ttf"
            >
              Pulse OF knowledge
              <meshStandardMaterial
                color="#D4AF37"
                metalness={0.5}
                roughness={0.3}
                emissive="#D4AF37"
                emissiveIntensity={0.3}
              />
            </Text>
          </motion.group>

          {/* Subtitle with delayed zoom effect */}
          <motion.group
            position={[0, -0.6, 0]}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.1, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
              times: [0, 0.7, 1],
            }}
          >
            <mesh>
              <planeGeometry args={[3, 0.4]} />
              <meshBasicMaterial transparent opacity={0} />
            </mesh>
            <Text
              position={[0, 0, 0.01]}
              fontSize={0.15}
              color="#D4AF37"
              anchorX="center"
              anchorY="middle"
              font="/fonts/Inter-Regular.ttf"
            >
              STUDY ABOARD
              <meshStandardMaterial
                color="#D4AF37"
                metalness={0.5}
                roughness={0.3}
                emissive="#D4AF37"
                emissiveIntensity={0.3}
              />
            </Text>
          </motion.group>
        </>
      )}
    </group>
  )
}

// Enhanced ripple effect component
function RippleEffect() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshBasicMaterial
      if (material) {
        // Enhanced opacity pulsing with zoom effect
        material.opacity = 0.1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.08

        // Add subtle scale animation to ripple
        const scale = 1 + Math.sin(clock.getElapsedTime() * 0.3) * 0.1
        meshRef.current.scale.setScalar(scale)
      }
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color="#D4AF37" transparent={true} opacity={0.1} depthWrite={false} />
    </mesh>
  )
}

export default function Logo3D() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Reduced loading time from 500ms to 100ms
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-[60vh] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: loaded ? 1 : 0,
          scale: loaded ? 1 : 0.8,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="w-full h-full"
      >
        {/* Enhanced container with zoom animation */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{
            scale: [0.5, 1.1, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
            times: [0, 0.6, 1],
          }}
          className="w-full h-full"
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.6} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.2} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.6} />
            <Environment preset="studio" />
            <LogoModel />
            <RippleEffect />
          </Canvas>
        </motion.div>
      </motion.div>

      {/* Enhanced background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0, 0.8, 0.5],
          scale: [0.5, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
