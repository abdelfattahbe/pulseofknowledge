"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X, Instagram } from "lucide-react"
import PulseLogo from "./pulse-logo"
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
    { name: t("nav.comingSoon"), path: "/coming-soon" },
    { name: t("nav.contact"), path: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#00D4D4]/10 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center" dir={dir}>
        <Link href="/" className="z-50">
          <PulseLogo className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {destinations.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-gray-700 hover:text-[#00D4D4] transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#00D4D4] to-[#FF6B47] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <div className="flex items-center space-x-4 ml-4">
            <LanguageSwitcher />
            <a
              href="https://www.instagram.com/pulse_knowledge?igsh=NG9yMG1wcGl5N2V2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#00D4D4] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.link/z6pw5a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-[#00D4D4] to-[#00B8B8] text-white px-3 py-1.5 rounded-full text-sm hover:from-[#00B8B8] hover:to-[#00D4D4] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
              </svg>
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
          dir={dir}
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
                  className="text-xl text-gray-700 hover:text-[#00D4D4] transition-colors"
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
                className="text-gray-700 hover:text-[#00D4D4] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.link/z6pw5a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-[#00D4D4] to-[#00B8B8] text-white px-4 py-2 rounded-full hover:from-[#00B8B8] hover:to-[#00D4D4] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        </motion.div>
      </div>
    </header>
  )
}
