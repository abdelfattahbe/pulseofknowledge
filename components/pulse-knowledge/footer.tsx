"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import PulseLogo from "./logo"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t, dir } = useLanguage()

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ fullName: "", phoneNumber: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200" dir={dir}>
      {/* Scholarship Banner */}
      <div className="bg-[#D4AF37]/10 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-start mb-4 md:mb-0">
            <h3 className="text-lg font-medium text-[#D4AF37]">{t("footer.scholarships")}</h3>
          </div>
          <Link href="/scholarship-application">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#10B981] opacity-70 blur-sm"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.button
                className="relative bg-[#10B981] hover:bg-[#059669] text-white px-6 py-3 rounded-full font-medium shadow-lg"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                {t("footer.applyNow")}
                <motion.span
                  className="inline-block ms-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Registration Form */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-serif text-[#D4AF37] mb-6">{t("footer.freeConsultation")}</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 text-green-700 p-4 rounded-lg"
              >
                {t("footer.thankYou")}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={t("footer.fullName")}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-white border-gray-300"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <span className="text-gray-500">+212</span>
                  </div>
                  <Input
                    type="tel"
                    placeholder={t("footer.phoneNumber")}
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    required
                    className="bg-white border-gray-300 ps-14"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white py-3 rounded-full font-medium relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#FFFFFF]/30 to-[#D4AF37]/0"
                    style={{ skewX: -15 }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                  <span className="relative">{t("footer.submit")}</span>
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-10 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <PulseLogo className="mb-4" />
              <p className="text-gray-400 text-sm mt-4">
                Pulse OF Knowledge -{" "}
                {dir === "rtl"
                  ? "بوابتك للتعليم الدولي وفرص المنح الدراسية"
                  : "Your gateway to international education and scholarship opportunities."}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/north-cyprus" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                    {t("nav.northCyprus")}
                  </Link>
                </li>
                <li>
                  <Link href="/china" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                    {t("nav.china")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="text-lg font-medium mb-4">{t("footer.contact")}</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="text-[#D4AF37] me-3 mt-1" size={16} />
                  <span className="text-gray-400">pulseofknowledge@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <Phone className="text-[#D4AF37] me-3 mt-1" size={16} />
                  <div className="text-gray-400">
                    <div>+212 637 887 204</div>
                    <div>+90 548 826 1105</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-[#D4AF37] me-3 mt-1" size={16} />
                  <span className="text-gray-400">inzagane - Agadir, Morocco</span>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <a
                    href="https://www.instagram.com/pulse_knowledge?igsh=NG9yMG1wcGl5N2V2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://wa.link/kk1gdr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">{t("footer.copyright")}</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-500 hover:text-[#D4AF37] text-sm transition-colors">
                {t("footer.privacyPolicy")}
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-[#D4AF37] text-sm transition-colors">
                {t("footer.termsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
