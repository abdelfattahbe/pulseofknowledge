"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function PulseLogo({ className = "" }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const titleText = "Pulse OF knowledge"
  const subtitleText = "STUDY ABROAD"

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.03,
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const subtitleLetterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + titleText.length * 0.03 + 0.1 + i * 0.02,
        duration: 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <div className={`flex items-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
        }}
        transition={{ duration: 0.5 }}
        className="relative mr-3"
      >
        {/* Logo with continuous rotation and pulse */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          className="relative"
        >
          <Image
            src="/images/pulse-logo.png"
            alt="Pulse OF Knowledge Logo"
            width={50}
            height={50}
            className="w-12 h-12 md:w-14 md:h-14"
          />

          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(0, 212, 212, 0)",
                "0 0 0 10px rgba(0, 212, 212, 0.1)",
                "0 0 0 20px rgba(0, 212, 212, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      <div className="flex flex-col">
        {/* Animated title */}
        <div className="text-lg md:text-xl font-serif text-[#00D4D4] h-7 overflow-hidden">
          {titleText.split("").map((char, index) => (
            <motion.span
              key={`title-${index}`}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="inline-block"
              style={{
                display: "inline-block",
                whiteSpace: "pre",
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Animated subtitle */}
        <div className="text-xs tracking-[0.2em] text-[#FF6B47] uppercase h-4 overflow-hidden">
          {subtitleText.split("").map((char, index) => (
            <motion.span
              key={`subtitle-${index}`}
              custom={index}
              variants={subtitleLetterVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="inline-block"
              style={{
                display: "inline-block",
                whiteSpace: "pre",
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}
