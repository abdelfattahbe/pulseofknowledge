"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
          {/* Expanded message */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="bg-white rounded-lg shadow-lg p-4 mb-3 max-w-xs"
              >
                <p className="text-gray-700 text-sm mb-2">
                  Hello! Have questions about studying abroad? Chat with us now for immediate assistance.
                </p>
                <a
                  href="https://wa.link/kk1gdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white text-sm py-2 px-4 rounded-full inline-block hover:bg-[#128C7E] transition-colors"
                >
                  Start Chat
                </a>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: isExpanded
                  ? "0 0 0 0 rgba(37, 211, 102, 0)"
                  : ["0 0 0 0 rgba(37, 211, 102, 0.7)", "0 0 0 15px rgba(37, 211, 102, 0)"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full"
            ></motion.div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
