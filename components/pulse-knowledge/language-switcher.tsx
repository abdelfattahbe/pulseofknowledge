"use client"

import { Button } from "@/components/ui/button"
import { Globe, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇲🇦" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
]

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const changeLang = (langCode: string) => {
    setLanguage(langCode as "en" | "ar" | "fr")
  }

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1 px-2 py-1">
          <Globe size={16} className="mr-1" />
          <span>{currentLanguage.flag}</span>
          <span className="hidden md:inline">{currentLanguage.name}</span>
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center gap-2 ${language === lang.code ? "bg-[#D4AF37]/10 text-[#D4AF37]" : ""}`}
            onClick={() => changeLang(lang.code)}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
