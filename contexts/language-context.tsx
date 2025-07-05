"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

// Create translations object
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.northCyprus": "North Cyprus",
    "nav.china": "China",
    "nav.comingSoon": "Coming Soon",
    "nav.contact": "Contact",

    // Footer
    "footer.freeConsultation": "Register for a Free Consultation",
    "footer.fullName": "Full Name",
    "footer.phoneNumber": "Phone Number",
    "footer.submit": "Submit",
    "footer.thankYou": "Thank you! We'll contact you soon.",
    "footer.scholarships": "We offer scholarships from 50% to 100% for qualified students",
    "footer.applyNow": "Apply Now",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.copyright": "© 2025 Pulse OF Knowledge. All rights reserved.",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",

    // Home page
    "home.hero.title": "Your Gateway to International Education",
    "home.hero.subtitle": "Discover prestigious universities worldwide with exclusive scholarship opportunities",
    "home.destinations.northCyprus": "North Cyprus",
    "home.destinations.northCyprusDesc": "Explore prestigious universities in the Mediterranean paradise",
    "home.destinations.china": "China",
    "home.destinations.chinaDesc": "Discover world-class education in the heart of Asia",
    "home.destinations.comingSoon": "Coming Soon",
    "home.destinations.comingSoonDesc": "More exciting destinations will be added soon",
    "home.destinations.explore": "Explore",

    // Common
    "common.learnMore": "Learn More",
    "common.contactUs": "Contact Us",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.northCyprus": "شمال قبرص",
    "nav.china": "الصين",
    "nav.comingSoon": "قريباً",
    "nav.contact": "اتصل بنا",

    // Footer
    "footer.freeConsultation": "سجل للحصول على استشارة مجانية",
    "footer.fullName": "الاسم الكامل",
    "footer.phoneNumber": "رقم الهاتف",
    "footer.submit": "إرسال",
    "footer.thankYou": "شكرا لك! سنتواصل معك قريبا.",
    "footer.scholarships": "نقدم منح دراسية من 50٪ إلى 100٪ للطلاب المؤهلين",
    "footer.applyNow": "قدم الآن",
    "footer.quickLinks": "روابط سريعة",
    "footer.contact": "اتصل بنا",
    "footer.copyright": "© 2025 بالس أوف نولدج. جميع الحقوق محفوظة.",
    "footer.privacyPolicy": "سياسة الخصوصية",
    "footer.termsOfService": "شروط الخدمة",

    // Home page
    "home.hero.title": "بوابتك للتعليم الدولي",
    "home.hero.subtitle": "اكتشف جامعات مرموقة حول العالم مع فرص منح دراسية حصرية",
    "home.destinations.northCyprus": "شمال قبرص",
    "home.destinations.northCyprusDesc": "استكشف الجامعات المرموقة في جنة البحر المتوسط",
    "home.destinations.china": "الصين",
    "home.destinations.chinaDesc": "اكتشف التعليم العالمي في قلب آسيا",
    "home.destinations.comingSoon": "قريباً",
    "home.destinations.comingSoonDesc": "سيتم إضافة المزيد من الوجهات المثيرة قريباً",
    "home.destinations.explore": "استكشف",

    // Common
    "common.learnMore": "اعرف المزيد",
    "common.contactUs": "اتصل بنا",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.northCyprus": "Chypre du Nord",
    "nav.china": "Chine",
    "nav.comingSoon": "Bientôt Disponible",
    "nav.contact": "Contact",

    // Footer
    "footer.freeConsultation": "Inscrivez-vous pour une consultation gratuite",
    "footer.fullName": "Nom complet",
    "footer.phoneNumber": "Numéro de téléphone",
    "footer.submit": "Soumettre",
    "footer.thankYou": "Merci! Nous vous contacterons bientôt.",
    "footer.scholarships": "Nous offrons des bourses de 50% à 100% pour les étudiants qualifiés",
    "footer.applyNow": "Postuler maintenant",
    "footer.quickLinks": "Liens rapides",
    "footer.contact": "Contactez-nous",
    "footer.copyright": "© 2025 Pulse OF Knowledge. Tous droits réservés.",
    "footer.privacyPolicy": "Politique de confidentialité",
    "footer.termsOfService": "Conditions d'utilisation",

    // Home page
    "home.hero.title": "Votre passerelle vers l'éducation internationale",
    "home.hero.subtitle":
      "Découvrez des universités prestigieuses dans le monde entier avec des opportunités de bourses exclusives",
    "home.destinations.northCyprus": "Chypre du Nord",
    "home.destinations.northCyprusDesc": "Explorez des universités prestigieuses dans le paradis méditerranéen",
    "home.destinations.china": "Chine",
    "home.destinations.chinaDesc": "Découvrez une éducation de classe mondiale au cœur de l'Asie",
    "home.destinations.comingSoon": "Bientôt Disponible",
    "home.destinations.comingSoonDesc": "D'autres destinations passionnantes seront ajoutées prochainement",
    "home.destinations.explore": "Explorer",

    // Common
    "common.learnMore": "En savoir plus",
    "common.contactUs": "Contactez-nous",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr")

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language
    if (savedLanguage && ["en", "ar", "fr"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else {
      // Try to detect country by timezone or browser language
      const browserLang = navigator.language.split("-")[0]
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const isMoroccoTimezone = timezone === "Africa/Casablanca"

      // If in Morocco, default to Arabic or French
      if (isMoroccoTimezone) {
        setLanguage(browserLang === "fr" ? "fr" : "ar")
      } else if (["en", "ar", "fr"].includes(browserLang as Language)) {
        setLanguage(browserLang as Language)
      }
    }
  }, [])

  useEffect(() => {
    // Set direction based on language
    setDir(language === "ar" ? "rtl" : "ltr")

    // Save language preference
    localStorage.setItem("preferredLanguage", language)

    // Set HTML dir and lang attributes
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
