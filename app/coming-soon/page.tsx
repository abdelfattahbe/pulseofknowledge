"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ComingSoonPage() {
  const upcomingDestinations = [
    {
      name: "United Kingdom",
      description: "Prestigious universities with centuries of academic excellence",
      estimatedLaunch: "Summer 2025",
    },
    {
      name: "Canada",
      description: "High-quality education with post-graduation work opportunities",
      estimatedLaunch: "Fall 2025",
    },
    {
      name: "Malaysia",
      description: "Affordable quality education in a multicultural environment",
      estimatedLaunch: "Winter 2025",
    },
    {
      name: "Germany",
      description: "Tuition-free universities with strong industry connections",
      estimatedLaunch: "Spring 2026",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] mb-4"
          >
            More Destinations Coming Soon
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 max-w-2xl mx-auto text-lg mb-8"
          >
            We're constantly expanding our network of partner universities around the world to provide you with more
            study abroad options.
          </motion.p>

          <Link href="/contact">
            <Button
              variant="ghost"
              className="rounded-full px-8 py-6 text-lg font-medium
                        bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20
                        text-[#D4AF37] transition-all duration-300 
                        border border-[#D4AF37]/20"
            >
              <span>Get Notified About New Destinations</span>
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upcomingDestinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white shadow-md border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-serif text-[#D4AF37] mb-2">{destination.name}</h3>
              <p className="text-gray-700 mb-4">{destination.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">Estimated Launch:</span>
                <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-sm">
                  {destination.estimatedLaunch}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
