"use client"

import { motion } from "framer-motion"

interface DestinationHeaderProps {
  title: string
  description: string
  imagePath?: string
}

export default function DestinationHeader({ title, description, imagePath }: DestinationHeaderProps) {
  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-gray-800/50 z-0"
        style={{
          backgroundImage: imagePath ? `url(${imagePath})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 max-w-2xl mx-auto text-lg"
        >
          {description}
        </motion.p>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}
