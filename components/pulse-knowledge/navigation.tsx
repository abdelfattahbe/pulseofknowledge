"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X, Instagram, Phone } from "lucide-react"
import PulseLogo from "./logo"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, dir } = useLanguage()

  const destinations = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.northCyprus"), path: "/north-cyprus" },
    { name: t("nav.china"), path: "/china" },
    { name: t("studentGuide.title"), path: "/student-guide" }, // إضافة رابط دليل الطالب
    { name: t("nav.comingSoon"), path: "/coming-soon" },
    { name: t("nav.contact"), path: "/contact" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#D4AF37]/10 shadow-sm"
      dir={dir}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="z-50 opacity-100">
          <PulseLogo className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {destinations.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-gray-700 hover:text-[#D4AF37] transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <div className="flex items-center space-x-4 ms-4">
            <LanguageSwitcher />
            <a
              href="https://www.instagram.com/pulse_knowledge?igsh=NG9yMG1wcGl5N2V2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#D4AF37] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.link/kk1gdr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#D4AF37] text-white px-3 py-1.5 rounded-full text-sm hover:bg-[#D4AF37]/90 transition-colors"
            >
              <Phone size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <motion.div
          className={cn(
            "fixed inset-0 bg-white flex flex-col items-center justify-center md:hidden",
            isOpen ? "block" : "hidden",
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-6 items-center">
            {destinations.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.path}
                  className="text-xl text-gray-700 hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <div className="flex items-center space-x-4 mt-4">
              <LanguageSwitcher />
              <a
                href="https://www.instagram.com/pulse_knowledge?igsh=NG9yMG1wcGl5N2V2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#D4AF37] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.link/kk1gdr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-[#D4AF37] text-white px-4 py-2 rounded-full hover:bg-[#D4AF37]/90 transition-colors"
              >
                <Phone size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        </motion.div>
      </div>
    </header>
  )
}
