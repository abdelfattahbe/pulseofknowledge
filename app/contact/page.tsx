"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    submitted: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    setFormState({ ...formState, submitted: true })
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl font-serif text-[#D4AF37] mb-6">Contact Us</h1>
              <p className="text-gray-700 mb-8 max-w-md">
                Have questions about our study abroad programs? Get in touch with our team of education consultants who
                can guide you through the application process.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-[#D4AF37] mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="text-gray-800 font-medium mb-1">Email Us</h3>
                    <p className="text-gray-700">abdelfattahbentamdia@gmail.com</p>
                    <p className="text-gray-700">info@pulseofknowledge.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-[#D4AF37] mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="text-gray-800 font-medium mb-1">Call Us</h3>
                    <p className="text-gray-700">+212 637 887 204</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-[#D4AF37] mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="text-gray-800 font-medium mb-1">Visit Us</h3>
                    <p className="text-gray-700">123 Education Street</p>
                    <p className="text-gray-700">Nicosia, North Cyprus</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Instagram className="text-[#D4AF37] mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="text-gray-800 font-medium mb-1">Follow Us</h3>
                    <a
                      href="https://www.instagram.com/pulse_knowledge?igsh=NG9yMG1wcGl5N2V2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] hover:underline"
                    >
                      @pulse_knowledge
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-gray-800 font-medium mb-3">WhatsApp Support</h3>
                  <a
                    href="https://wa.link/kk1gdr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm hover:bg-[#128C7E] transition-colors"
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Chat with us on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white shadow-md border border-gray-200 rounded-lg p-8"
            >
              {formState.submitted ? (
                <div className="text-center py-12">
                  <Send className="text-[#D4AF37] mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-serif text-[#D4AF37] mb-2">Message Sent!</h3>
                  <p className="text-gray-700 mb-6">
                    Thank you for contacting us. One of our education consultants will get back to you shortly.
                  </p>
                  <Button
                    variant="ghost"
                    className="rounded-full px-6 py-2 text-sm font-medium
                              bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20
                              text-[#D4AF37] transition-all duration-300 
                              border border-[#D4AF37]/20"
                    onClick={() => setFormState({ name: "", email: "", phone: "", message: "", submitted: false })}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-serif text-[#D4AF37] mb-6">Get in Touch</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 text-sm">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="bg-white border-gray-300 focus:border-[#D4AF37] text-gray-800"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="bg-white border-gray-300 focus:border-[#D4AF37] text-gray-800"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm">
                        Phone Number (Optional)
                      </label>
                      <Input
                        id="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="bg-white border-gray-300 focus:border-[#D4AF37] text-gray-800"
                        placeholder="+90 123 456 7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2 text-sm">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                        className="bg-white border-gray-300 focus:border-[#D4AF37] text-gray-800 min-h-[120px]"
                        placeholder="Tell us about your study abroad plans and any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full px-8 py-6 text-lg font-medium
                                bg-[#D4AF37] hover:bg-[#D4AF37]/90
                                text-white transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
