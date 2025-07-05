"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import PulseLogo from "./logo"
import Link from "next/link"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.3 + i * 0.02,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <svg className="w-full h-full text-[#D4AF37]" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.4, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function PulseKnowledgePage() {
  const destinations = [
    {
      name: "North Cyprus",
      description: "Explore prestigious universities in the Mediterranean paradise",
      path: "/north-cyprus",
    },
    {
      name: "China",
      description: "Discover world-class education in the heart of Asia",
      path: "/china",
    },
    {
      name: "Coming Soon",
      description: "More exciting destinations will be added soon",
      path: "/coming-soon",
    },
  ]

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <PulseLogo className="mb-12" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-[#D4AF37]/80 max-w-2xl mb-12 text-lg"
          >
            Embark on a journey of discovery and excellence with our comprehensive study abroad programs. Expand your
            horizons and transform your future.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {destinations.map((destination, index) => (
              <Link key={destination.name} href={destination.path} className="block">
                <div className="bg-black/50 border border-[#D4AF37]/20 rounded-lg p-6 h-full hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/5">
                  <h3 className="text-xl font-serif text-[#D4AF37] mb-2">{destination.name}</h3>
                  <p className="text-[#D4AF37]/60 text-sm mb-4">{destination.description}</p>
                  <span className="text-[#D4AF37]/80 text-sm flex items-center justify-center">
                    Explore <span className="ml-2">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>

          <div
            className="inline-block group relative bg-gradient-to-b from-[#D4AF37]/20 to-[#D4AF37]/5
                        p-px rounded-full backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link href="/contact">
              <Button
                variant="ghost"
                className="rounded-full px-8 py-6 text-lg font-medium backdrop-blur-md 
                              bg-black/95 hover:bg-black/100
                              text-[#D4AF37] transition-all duration-300 
                              group-hover:-translate-y-0.5 border border-[#D4AF37]/20
                              hover:shadow-md hover:shadow-[#D4AF37]/10"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">Contact Us</span>
                <span
                  className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                  transition-all duration-300"
                >
                  →
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
