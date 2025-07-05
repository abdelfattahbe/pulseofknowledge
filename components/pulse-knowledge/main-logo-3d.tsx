"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, PerspectiveCamera, Environment, useTexture } from "@react-three/drei"
import { motion } from "framer-motion"
import type * as THREE from "three"
import Image from "next/image"

function Logo3DModel() {
  const groupRef = useRef<any>()
  const logoRef = useRef<THREE.Mesh>(null)
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

    // Logo rotation and pulsing
    if (logoRef.current) {
      logoRef.current.rotation.z += 0.005
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1
      logoRef.current.scale.setScalar(scale)
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 3D Plane with logo texture */}
      <mesh ref={logoRef} position={[0, 0.5, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial
          map={useTexture("/images/pulse-logo.png")}
          transparent={true}
          alphaTest={0.1}
          emissive="#00D4D4"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Glowing particles around the logo */}
      {[...Array(12)].map((_, i) => (
        <mesh
          key={i}
          position={[Math.cos((i / 12) * Math.PI * 2) * 3, Math.sin((i / 12) * Math.PI * 2) * 3, Math.sin(i) * 0.5]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#00D4D4" : "#FF6B47"}
            emissive={i % 2 === 0 ? "#00D4D4" : "#FF6B47"}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}

      {/* Orbital rings */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#00D4D4"
          emissive="#00D4D4"
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.6}
        />
      </mesh>

      <mesh position={[0, 0.5, 0]} rotation={[-Math.PI / 4, 0, Math.PI / 2]}>
        <torusGeometry args={[2.8, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#FF6B47"
          emissive="#FF6B47"
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.4}
        />
      </mesh>

      {/* Text elements */}
      {textVisible && (
        <>
          <motion.group
            position={[0, -2, 0]}
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
              fontSize={0.4}
              color="#00D4D4"
              anchorX="center"
              anchorY="middle"
              font="/fonts/Inter-Bold.ttf"
            >
              Pulse OF knowledge
            </Text>
          </motion.group>

          <motion.group
            position={[0, -2.6, 0]}
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
              fontSize={0.15}
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

export default function MainLogo3D() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-[60vh] relative overflow-hidden">
      {/* Fallback 2D logo for better performance on mobile */}
      <div className="block md:hidden w-full h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            className="mb-6"
          >
            <Image
              src="/images/pulse-logo.png"
              alt="Pulse OF Knowledge Logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl font-serif text-[#00D4D4] mb-2"
          >
            Pulse OF knowledge
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-sm text-[#FF6B47] tracking-wider uppercase"
          >
            Study Abroad, Simplified
          </motion.p>
        </motion.div>
      </div>

      {/* 3D version for desktop */}
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
        className="hidden md:block w-full h-full"
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
            <Logo3DModel />
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
