"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function PulseLogo({ className = "" }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true)

  // Make the logo visible immediately
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`flex items-center ${className}`}>
      <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} className="relative w-48 h-12">
        <Image src="/images/pulse-logo.png" alt="Pulse OF knowledge" fill className="object-contain" priority />
      </motion.div>
    </div>
  )
}
