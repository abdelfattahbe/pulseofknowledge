"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function NewPulseLogo({ className = "" }: { className?: string }) {
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
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* New P Logo SVG */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-3"
        >
          {/* Orbital ring with animation */}
          <motion.ellipse
            cx="50"
            cy="50"
            rx="35"
            ry="35"
            stroke="url(#orangeGradient)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{
              pathLength: 1,
              rotate: 360,
            }}
            transition={{
              pathLength: { duration: 1.5, ease: "easeOut" },
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          />

          {/* P Letter */}
          <motion.path
            d="M25 20 L25 80 L45 80 L45 55 L55 55 C65 55 70 50 70 40 C70 30 65 25 55 25 L25 25 Z M40 35 L55 35 C58 35 60 37 60 40 C60 43 58 45 55 45 L40 45 Z"
            fill="url(#turquoiseGradient)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.1, 1],
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              times: [0, 0.6, 1],
            }}
          />

          {/* Airplane element */}
          <motion.path
            d="M65 35 L75 37 L80 35 L75 33 Z"
            fill="#FFFFFF"
            initial={{ x: -20, opacity: 0 }}
            animate={{
              x: [0, 5, 0],
              opacity: 1,
            }}
            transition={{
              x: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              opacity: { duration: 0.5, delay: 1 },
            }}
          />

          {/* Glowing dots */}
          {[0, 1, 2, 3].map((i) => (
            <motion.circle
              key={i}
              cx={50 + Math.cos((i / 4) * Math.PI * 2) * 25}
              cy={50 + Math.sin((i / 4) * Math.PI * 2) * 25}
              r="2"
              fill={i % 2 === 0 ? "#00D4D4" : "#FF6B47"}
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                delay: 1.5 + i * 0.2,
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}

          <defs>
            <linearGradient id="turquoiseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4D4" />
              <stop offset="100%" stopColor="#00B8B8" />
            </linearGradient>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B47" />
              <stop offset="100%" stopColor="#FF5722" />
            </linearGradient>
          </defs>
        </svg>
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
