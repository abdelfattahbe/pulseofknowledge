"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface UniversityCardProps {
  name: string
  location: string
  description: string
  programs: string[]
  imagePath: string
  website: string
  index: number
}

export default function UniversityCard({
  name,
  location,
  description,
  programs,
  imagePath,
  website,
  index,
}: UniversityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className="h-56 bg-cover bg-center relative overflow-hidden rounded-t-lg"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif text-[#D4AF37] mb-1">{name}</h3>
        <p className="text-gray-500 text-sm mb-4">{location}</p>

        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>

        <div className="mb-4">
          <h4 className="text-gray-600 text-sm font-medium mb-2">Available Programs:</h4>
          <div className="flex flex-wrap gap-2">
            {programs.map((program, i) => (
              <span key={i} className="text-xs bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded-full">
                {program}
              </span>
            ))}
          </div>
        </div>

        <Link href={website} target="_blank" rel="noopener noreferrer">
          <Button
            variant="ghost"
            className="w-full rounded-full text-sm font-medium
                      bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20
                      text-[#D4AF37] transition-all duration-300 
                      border border-[#D4AF37]/20"
          >
            <span>Visit University Website</span>
            <span className="ml-2">→</span>
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
