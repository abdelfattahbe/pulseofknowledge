"use client"

import dynamic from "next/dynamic"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download, GraduationCap, FileText, Briefcase, Globe } from "lucide-react"

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

export default function StudentGuidePage() {
  const { t, dir } = useLanguage()

  // Updated video props with new YouTube video ID
  const videoProps = {
    youtubeId: "qYVlvnG8Ii8", // New video ID
    posterUrl: "/placeholder.svg?height=720&width=1280&text=Study+Abroad+Guide",
  }

  const resources = [
    {
      title: t("studentGuide.applicationProcess"),
      description: t("studentGuide.applicationProcessDesc"),
      icon: <FileText className="w-6 h-6 text-[#D4AF37]" />,
      delay: 0.1,
    },
    {
      title: t("studentGuide.visaRequirements"),
      description: t("studentGuide.visaRequirementsDesc"),
      icon: <Briefcase className="w-6 h-6 text-[#D4AF37]" />,
      delay: 0.2,
    },
    {
      title: t("studentGuide.scholarshipOpportunities"),
      description: t("studentGuide.scholarshipOpportunitiesDesc"),
      icon: <GraduationCap className="w-6 h-6 text-[#D4AF37]" />,
      delay: 0.3,
    },
    {
      title: t("studentGuide.lifeAbroad"),
      description: t("studentGuide.lifeAbroadDesc"),
      icon: <Globe className="w-6 h-6 text-[#D4AF37]" />,
      delay: 0.4,
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20" dir={dir}>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] mb-6"
            >
              {t("studentGuide.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8"
            >
              {t("studentGuide.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                variant="ghost"
                className="rounded-full px-8 py-6 text-lg font-medium
                          bg-[#D4AF37] hover:bg-[#D4AF37]/90
                          text-white transition-all duration-300"
                onClick={() => window.open("https://wa.link/kk1gdr", "_blank")}
              >
                <span>{t("studentGuide.contactUs")}</span>
                <ArrowRight className="ms-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Guide Section - now uses the new video */}
      <VideoGuideSection {...videoProps} />

      {/* Resources Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-6">
                {t("studentGuide.resourcesTitle")}
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                {t("studentGuide.resourcesDescription")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: resource.delay }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start">
                    <div className="bg-[#D4AF37]/10 w-12 h-12 rounded-full flex items-center justify-center me-4 flex-shrink-0">
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">{resource.title}</h3>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button
                variant="ghost"
                className="rounded-full px-8 py-4 text-base font-medium
                          bg-white border border-[#D4AF37] hover:bg-[#D4AF37]/5
                          text-[#D4AF37] transition-all duration-300"
              >
                <Download className="me-2 w-5 h-5" />
                <span>{t("studentGuide.downloadGuide")}</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-6">{t("studentGuide.faqTitle")}</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            </motion.div>

            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{t(`studentGuide.faq${item}Question`)}</h3>
                  <p className="text-gray-600">{t(`studentGuide.faq${item}Answer`)}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link href="/contact">
                <Button
                  variant="ghost"
                  className="rounded-full px-8 py-6 text-lg font-medium
                            bg-[#D4AF37] hover:bg-[#D4AF37]/90
                            text-white transition-all duration-300"
                >
                  <span>{t("studentGuide.getInTouch")}</span>
                  <ArrowRight className="ms-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
