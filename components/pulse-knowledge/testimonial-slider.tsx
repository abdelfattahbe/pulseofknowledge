"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  country: string
  university: string
  quote: string
  imagePath: string
}

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ahmed Hassan",
      country: "Egypt",
      university: "Eastern Mediterranean University, North Cyprus",
      quote:
        "Pulse OF Knowledge made my dream of studying abroad a reality. They helped me secure a 75% scholarship and guided me through every step of the process. I'm now thriving in my engineering program!",
      imagePath: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Sophia Chen",
      country: "Malaysia",
      university: "Tsinghua University, China",
      quote:
        "I was overwhelmed by the application process until I found Pulse OF Knowledge. Their team was incredibly supportive and helped me get accepted to one of China's top universities with a substantial scholarship.",
      imagePath: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Daniel Okafor",
      country: "Nigeria",
      university: "Near East University, North Cyprus",
      quote:
        "The scholarship assistance from Pulse OF Knowledge was life-changing. They helped me navigate the complex application process and secure financial aid that made my education possible. Forever grateful!",
      imagePath: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "Aisha Mohammed",
      country: "UAE",
      university: "Fudan University, China",
      quote:
        "From visa application to accommodation arrangements, Pulse OF Knowledge handled everything professionally. Their personalized approach and attention to detail made my transition to studying in China seamless.",
      imagePath: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-4">Our Happy Students</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Hear from our students who have successfully embarked on their international education journey with our
              support.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative h-[300px] md:h-[250px]">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.5 }}
                  className="absolute w-full"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-[#D4AF37]/20">
                          <Image
                            src={testimonials[currentIndex].imagePath || "/placeholder.svg"}
                            alt={testimonials[currentIndex].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#D4AF37]/30"
                          >
                            <path
                              d="M10.667 13.333H5.33366C5.33366 8 9.33366 5.333 13.3337 5.333L12.0003 8C10.667 9.333 10.667 11.333 10.667 13.333ZM21.3337 13.333H16.0003C16.0003 8 20.0003 5.333 24.0003 5.333L22.667 8C21.3337 9.333 21.3337 11.333 21.3337 13.333ZM24.0003 16V21.333C24.0003 22.4 23.067 23.333 22.0003 23.333H18.667V26.667H22.0003C24.9337 26.667 27.3337 24.267 27.3337 21.333V16H24.0003ZM13.3337 16V21.333C13.3337 22.4 12.4003 23.333 11.3337 23.333H8.00033V26.667H11.3337C14.267 26.667 16.667 24.267 16.667 21.333V16H13.3337Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700 italic mb-4 text-lg">{testimonials[currentIndex].quote}</p>
                        <div>
                          <h4 className="font-medium text-gray-900">{testimonials[currentIndex].name}</h4>
                          <p className="text-sm text-gray-500">
                            {testimonials[currentIndex].country} • {testimonials[currentIndex].university}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#D4AF37]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handlePrevious}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
