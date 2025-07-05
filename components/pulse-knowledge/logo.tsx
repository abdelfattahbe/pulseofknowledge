"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function PulseLogo({ className = "" }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Make logo visible immediately
    setIsVisible(true)
  }, [])

  // Text animation variants
  const titleText = "Pulse OF knowledge"
  const subtitleText = "STUDY ABOARD"

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.03, // Reduced from 2.2 to 0.3
        duration: 0.2, // Reduced from 0.3 to 0.2
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
        delay: 0.3 + titleText.length * 0.03 + 0.1 + i * 0.02, // Reduced delays
        duration: 0.15, // Reduced from 0.2 to 0.15
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <div className={`flex items-center ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }} // Reduced from 1 to 0.5
        className="relative"
      >
        {/* Curved lines of the logo with enhanced animations */}
        <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          {/* Pulsing background glow */}
          <motion.circle
            cx="40"
            cy="40"
            r="30"
            fill="url(#glowGradient)"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />

          {/* First curved path with ripple effect */}
          <motion.path
            d="M20 40C20 28.954 28.954 20 40 20C51.046 20 60 28.954 60 40"
            stroke="url(#goldGradient1)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              filter: [
                "drop-shadow(0 0 0px rgba(212, 175, 55, 0))",
                "drop-shadow(0 0 2px rgba(212, 175, 55, 0.5))",
                "drop-shadow(0 0 0px rgba(212, 175, 55, 0))",
              ],
            }}
            transition={{
              pathLength: { duration: 0.8, delay: 0.1, ease: "easeOut" }, // Reduced from 1.5, 0.2
              opacity: { duration: 0.3, delay: 0.1 }, // Reduced from 0.5, 0.2
              filter: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
            }}
          />

          {/* Second curved path with ripple effect */}
          <motion.path
            d="M15 40C15 26.193 26.193 15 40 15C53.807 15 65 26.193 65 40"
            stroke="url(#goldGradient2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              filter: [
                "drop-shadow(0 0 0px rgba(212, 175, 55, 0))",
                "drop-shadow(0 0 2px rgba(212, 175, 55, 0.5))",
                "drop-shadow(0 0 0px rgba(212, 175, 55, 0))",
              ],
            }}
            transition={{
              pathLength: { duration: 0.8, delay: 0.2, ease: "easeOut" }, // Reduced from 1.5, 0.5
              opacity: { duration: 0.3, delay: 0.2 }, // Reduced from 0.5, 0.5
              filter: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.2 }, // Reduced delay
            }}
          />

          {/* Third curved path with ripple effect */}
          <motion.path
            d="M10 40C10 23.431 23.431 10 40 10C56.569 10 70 23.431 70 40"
            stroke="url(#goldGradient3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              filter: [
                "drop-shadow(0 0 0px rgba(212, 175, 55, 0))",
                "drop-shadow(0 0 2px rgba(212, 175, 55, 0.5))",
                "drop-shadow(0 0 0px rgba(212, 175, 55, 0))",
              ],
            }}
            transition={{
              pathLength: { duration: 0.8, delay: 0.3, ease: "easeOut" }, // Reduced from 1.5, 0.8
              opacity: { duration: 0.3, delay: 0.3 }, // Reduced from 0.5, 0.8
              filter: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.3 }, // Reduced from 1
            }}
          />

          {/* Pulsing endpoint circle */}
          <motion.circle
            cx="70"
            cy="40"
            r="2"
            fill="#D4AF37"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: [0, 1.2, 1],
              filter: [
                "drop-shadow(0 0 0px rgba(212, 175, 55, 0))",
                "drop-shadow(0 0 3px rgba(212, 175, 55, 0.7))",
                "drop-shadow(0 0 0px rgba(212, 175, 55, 0))",
              ],
            }}
            transition={{
              opacity: { duration: 0.3, delay: 0.5 }, // Reduced from 2
              scale: { duration: 0.5, delay: 0.5, ease: "backOut" }, // Reduced from 2
              filter: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.5 }, // Reduced from 2
            }}
          />

          {/* Ripple effect from endpoint */}
          <motion.circle
            cx="70"
            cy="40"
            r="2"
            stroke="#D4AF37"
            strokeWidth="0.5"
            fill="none"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [1, 4, 6],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              delay: 0.6, // Reduced from 2.5
              repeatDelay: 1, // Reduced from 2
            }}
          />

          <defs>
            <linearGradient id="goldGradient1" x1="20" y1="30" x2="60" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D4AF37" />
              <stop offset="1" stopColor="#C5A028" />
            </linearGradient>
            <linearGradient id="goldGradient2" x1="15" y1="27.5" x2="65" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D4AF37" />
              <stop offset="1" stopColor="#C5A028" />
            </linearGradient>
            <linearGradient id="goldGradient3" x1="10" y1="25" x2="70" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D4AF37" />
              <stop offset="1" stopColor="#C5A028" />
            </linearGradient>
            <radialGradient id="glowGradient" cx="40" cy="40" r="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="flex flex-col">
        {/* Animated title with letter-by-letter reveal */}
        <div className="text-lg md:text-xl font-serif text-[#D4AF37] h-7 overflow-hidden">
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

        {/* Animated subtitle with letter-by-letter reveal */}
        <div className="text-xs tracking-[0.2em] text-[#D4AF37]/80 uppercase h-4 overflow-hidden">
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
