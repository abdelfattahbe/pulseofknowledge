"use client"

import Logo3D from "@/components/pulse-knowledge/logo-3d"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, MapPin, Clock, Award, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialSlider from "@/components/pulse-knowledge/testimonial-slider"
import dynamic from "next/dynamic"
import { useLanguage } from "@/contexts/language-context"

// Dynamically import the VideoGuideSection with no SSR to avoid hydration issues
const VideoGuideSection = dynamic(() => import("@/components/pulse-knowledge/video-guide-section"), {
  ssr: false,
  loading: () => (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="w-full aspect-video bg-gray-200 rounded-2xl animate-pulse max-w-5xl mx-auto"></div>
      </div>
    </div>
  ),
})

export default function Home() {
  const { t, dir } = useLanguage()

  // Updated video props with new YouTube video ID
  const videoProps = {
    youtubeId: "qYVlvnG8Ii8", // New video ID
    posterUrl: "/placeholder.svg?height=720&width=1280&text=Study+Abroad+Guide",
  }

  const destinations = [
    {
      name: t("home.northCyprus"),
      description: t("home.northCyprusDesc"),
      path: "/north-cyprus",
      icon: <MapPin className="w-8 h-8 text-[#D4AF37]" />,
      delay: 0.1,
    },
    {
      name: t("home.china"),
      description: t("home.chinaDesc"),
      path: "/china",
      icon: <GraduationCap className="w-8 h-8 text-[#D4AF37]" />,
      delay: 0.2,
    },
    {
      name: t("home.comingSoon"),
      description: t("home.comingSoonDesc"),
      path: "/coming-soon",
      icon: <Clock className="w-8 h-8 text-[#D4AF37]" />,
      delay: 0.3,
    },
  ]

  return (
    <div className="min-h-screen bg-white" dir={dir}>
      {/* Logo3D component - now uses the new logo */}
      <Logo3D />

      {/* Scholarship Banner */}
      <div className="bg-[#D4AF37]/10 py-8 border-y border-[#D4AF37]/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0.8, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-serif text-[#D4AF37] mb-4">{t("home.scholarshipTitle")}</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">{t("home.scholarshipDesc")}</p>
            <Link href="/scholarship-application">
              <Button
                variant="ghost"
                className="rounded-full px-6 py-3 text-base font-medium
                    bg-[#10B981] hover:bg-[#059669]
                    text-white transition-all duration-300"
              >
                {t("home.applyScholarship")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Destination Boxes */}
      <div className="container mx-auto px-4 md:px-6 py-12 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0.8, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: destination.delay }}
              className="relative"
            >
              <Link href={destination.path} className="block h-full">
                <div
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-full 
                              hover:shadow-xl hover:border-[#D4AF37]/20 transition-all duration-300 
                              hover:-translate-y-1 group"
                >
                  <div className="bg-[#D4AF37]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {destination.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-[#D4AF37] mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center text-[#D4AF37] font-medium">
                    <span>{t("home.explore")}</span>
                    <ArrowRight className="ms-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Guide Section - now uses the new video */}
      <VideoGuideSection {...videoProps} />

      {/* About Us Section */}
      <div className="bg-gray-50 py-20 mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#D4AF37] mb-6">
                {t("home.aboutTitle")}
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                {t("home.aboutDesc")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-serif text-[#D4AF37] mb-6 flex items-center">
                    <Award className="me-3 text-[#D4AF37]" />
                    {t("home.scholarshipOpportunities")}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{t("home.scholarshipOpportunitiesDesc")}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{t("home.scholarshipTeam")}</p>
                  <div className="bg-[#D4AF37]/10 p-4 rounded-lg">
                    <p className="text-gray-800 font-medium">{t("home.scholarshipSuccess")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex">
                  <div className="bg-[#D4AF37]/10 w-14 h-14 rounded-full flex items-center justify-center me-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">{t("home.expertConsultants")}</h4>
                    <p className="text-gray-600">{t("home.expertConsultantsDesc")}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex">
                  <div className="bg-[#D4AF37]/10 w-14 h-14 rounded-full flex items-center justify-center me-4 flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">{t("home.comprehensiveServices")}</h4>
                    <p className="text-gray-600">{t("home.comprehensiveServicesDesc")}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex">
                  <div className="bg-[#D4AF37]/10 w-14 h-14 rounded-full flex items-center justify-center me-4 flex-shrink-0">
                    <Award className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">{t("home.provenSuccess")}</h4>
                    <p className="text-gray-600">{t("home.provenSuccessDesc")}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link href="/about">
                <Button
                  variant="ghost"
                  className="rounded-full px-8 py-6 text-lg font-medium
                            bg-[#D4AF37] hover:bg-[#D4AF37]/90
                            text-white transition-all duration-300"
                >
                  <span>{t("home.learnMore")}</span>
                  <ArrowRight className="ms-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Services Section */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-6">{t("home.gatewayTitle")}</h2>
          <p className="text-gray-700 text-lg mb-8">{t("home.gatewayDesc")}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">{t("home.personalizedGuidance")}</h3>
              <p className="text-gray-600 text-center">{t("home.personalizedGuidanceDesc")}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">{t("home.comprehensiveSupport")}</h3>
              <p className="text-gray-600 text-center">{t("home.comprehensiveSupportDesc")}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">{t("home.trustedPartnerships")}</h3>
              <p className="text-gray-600 text-center">{t("home.trustedPartnershipsDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
