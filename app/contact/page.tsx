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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("https://formspree.io/f/xrbkvqan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
          formType: "Contact Form",
        }),
      })

      if (response.ok) {
        setFormState({ ...formState, submitted: true })
      } else {
        alert("Error sending message. Please try again.")
      }
    } catch (error) {
      alert("Error sending message. Please try again.")
    }
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
                    href="https://wa.link/z6pw5a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm hover:bg-[#128C7E] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
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
