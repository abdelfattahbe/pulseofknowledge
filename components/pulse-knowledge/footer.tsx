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
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          formType: "Free Consultation Registration",
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ fullName: "", phoneNumber: "" })
          setSubmitted(false)
        }, 3000)
      } else {
        alert("Error submitting registration. Please try again.")
      }
    } catch (error) {
      alert("Error submitting registration. Please try again.")
    }
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Scholarship Banner */}
      <div className="bg-[#D4AF37]/10 py-6">
        <div
          className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between"
          dir={dir}
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
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
                  className="inline-block ml-2"
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
          <div className="max-w-md mx-auto text-center" dir={dir}>
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
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500">+212</span>
                  </div>
                  <Input
                    type="tel"
                    placeholder={t("footer.phoneNumber")}
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    required
                    className="bg-white border-gray-300 pl-14"
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
        <div className="container mx-auto px-4 md:px-6" dir={dir}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <PulseLogo className="mb-4" />
              <p className="text-gray-400 text-sm mt-4">
                Pulse OF Knowledge - Your gateway to international education and scholarship opportunities.
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
                  <Mail className="text-[#D4AF37] mr-3 mt-1" size={16} />
                  <span className="text-gray-400">abdelfattahbentamdia@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <Phone className="text-[#D4AF37] mr-3 mt-1" size={16} />
                  <div className="text-gray-400">
                    <div>+212 637 887 204</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-[#D4AF37] mr-3 mt-1" size={16} />
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
                    href="https://wa.link/z6pw5a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                    </svg>
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
