"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, PerspectiveCamera, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import * as THREE from "three"

function NewLogoModel() {
  const groupRef = useRef<any>()
  const pLetterRef = useRef<THREE.Mesh>(null)
  const orbitalRingRef = useRef<THREE.Mesh>(null)
  const planeRef = useRef<THREE.Mesh>(null)
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      // Main group floating animation with enhanced zoom
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.3
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15

      // Enhanced zoom in/out effect
      const zoomScale = 1 + Math.sin(state.clock.getElapsedTime() * 0.6) * 0.2
      groupRef.current.scale.setScalar(zoomScale)
    }

    // Orbital ring rotation
    if (orbitalRingRef.current) {
      orbitalRingRef.current.rotation.z += 0.01
      orbitalRingRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }

    // P letter pulsing
    if (pLetterRef.current) {
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05
      pLetterRef.current.scale.setScalar(scale)
    }

    // Plane animation
    if (planeRef.current) {
      planeRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.3
      planeRef.current.position.y = Math.cos(state.clock.getElapsedTime() * 1.2) * 0.2
      planeRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* P Letter - Main element */}
      <mesh ref={pLetterRef} position={[0, 0, 0]}>
        <extrudeGeometry
          args={[
            (() => {
              const shape = new THREE.Shape()
              // Create P shape
              shape.moveTo(-0.8, -1.2)
              shape.lineTo(-0.8, 1.2)
              shape.lineTo(-0.3, 1.2)
              shape.bezierCurveTo(0.5, 1.2, 0.8, 0.8, 0.8, 0.3)
              shape.bezierCurveTo(0.8, -0.2, 0.5, -0.6, -0.3, -0.6)
              shape.lineTo(-0.3, -0.6)
              shape.lineTo(-0.3, -1.2)
              shape.lineTo(-0.8, -1.2)

              // Inner part of P
              const hole = new THREE.Path()
              hole.moveTo(-0.3, 0.7)
              hole.bezierCurveTo(0.2, 0.7, 0.3, 0.5, 0.3, 0.3)
              hole.bezierCurveTo(0.3, 0.1, 0.2, -0.1, -0.3, -0.1)
              hole.lineTo(-0.3, 0.7)
              shape.holes.push(hole)

              return shape
            })(),
            { depth: 0.2, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.02 },
          ]}
        >
          <meshStandardMaterial
            color="#00D4D4"
            metalness={0.7}
            roughness={0.3}
            emissive="#00D4D4"
            emissiveIntensity={0.3}
          />
        </extrudeGeometry>
      </mesh>

      {/* Orbital Ring */}
      <mesh ref={orbitalRingRef} position={[0, 0, 0]} rotation={[0, 0, Math.PI * 0.2]}>
        <torusGeometry args={[1.8, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#FF6B47"
          metalness={0.8}
          roughness={0.2}
          emissive="#FF6B47"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Airplane/Plane element */}
      <mesh ref={planeRef} position={[1.5, 0.3, 0]} rotation={[0, 0, -0.3]}>
        <extrudeGeometry
          args={[
            (() => {
              const planeShape = new THREE.Shape()
              // Simple airplane shape
              planeShape.moveTo(0, 0)
              planeShape.lineTo(0.4, 0.1)
              planeShape.lineTo(0.6, 0)
              planeShape.lineTo(0.4, -0.1)
              planeShape.lineTo(0, 0)
              return planeShape
            })(),
            { depth: 0.05, bevelEnabled: false },
          ]}
        >
          <meshStandardMaterial
            color="#FFFFFF"
            metalness={0.6}
            roughness={0.4}
            emissive="#FFFFFF"
            emissiveIntensity={0.2}
          />
        </extrudeGeometry>
      </mesh>

      {/* Glowing particles around the logo */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[Math.cos((i / 8) * Math.PI * 2) * 2.5, Math.sin((i / 8) * Math.PI * 2) * 2.5, Math.sin(i) * 0.5]}
        >
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#00D4D4" : "#FF6B47"}
            emissive={i % 2 === 0 ? "#00D4D4" : "#FF6B47"}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}

      {/* Text elements */}
      {textVisible && (
        <>
          <motion.group
            position={[0, -2.5, 0]}
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
            <Text
              position={[0, 0, 0.01]}
              fontSize={0.35}
              color="#00D4D4"
              anchorX="center"
              anchorY="middle"
              font="/fonts/Inter-Bold.ttf"
            >
              Pulse OF knowledge
            </Text>
          </motion.group>

          <motion.group
            position={[0, -3, 0]}
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
            <Text
              position={[0, 0, 0.01]}
              fontSize={0.12}
              color="#FF6B47"
              anchorX="center"
              anchorY="middle"
              font="/fonts/Inter-Regular.ttf"
            >
              STUDY ABROAD, SIMPLIFIED
            </Text>
          </motion.group>
        </>
      )}
    </group>
  )
}

function EnhancedRippleEffect() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshBasicMaterial
      if (material) {
        material.opacity = 0.1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.08
        const scale = 1 + Math.sin(clock.getElapsedTime() * 0.3) * 0.15
        meshRef.current.scale.setScalar(scale)
      }
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[12, 12]} />
      <meshBasicMaterial color="#00D4D4" transparent={true} opacity={0.1} depthWrite={false} />
    </mesh>
  )
}

export default function NewLogo3D() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
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
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />
            <ambientLight intensity={0.6} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#FF6B47" />
            <pointLight position={[10, -10, 10]} intensity={0.8} color="#00D4D4" />
            <Environment preset="studio" />
            <NewLogoModel />
            <EnhancedRippleEffect />
          </Canvas>
        </motion.div>
      </motion.div>

      {/* Enhanced background effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#00D4D4]/10 via-[#FF6B47]/5 to-transparent pointer-events-none"
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
