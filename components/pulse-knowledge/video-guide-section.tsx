"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, ExternalLink, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

// Update the VideoGuideSection component to use the YouTube embed instead of a direct video element

// First, let's modify the VideoGuideSectionProps interface to better support YouTube videos
interface VideoGuideSectionProps {
  videoUrl?: string
  posterUrl?: string
  youtubeId?: string
}

// Then update the component to handle YouTube embeds
export default function VideoGuideSection({
  videoUrl = "https://example.com/video.mp4",
  posterUrl = "/placeholder.svg?height=720&width=1280&text=Student+Guide+Video",
  youtubeId = "nvp0rDSPyxc", // Default to the Northern Cyprus video
}: VideoGuideSectionProps) {
  const { t, language, dir } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [showYouTube, setShowYouTube] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Reset error state when component mounts or videoUrl changes
  useEffect(() => {
    setHasError(false)
    setErrorMessage("")
  }, [videoUrl, youtubeId])

  const togglePlay = async () => {
    if (youtubeId) {
      setShowYouTube(true)
      setIsPlaying(true)
      return
    }

    if (!videoRef.current || hasError) return

    try {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        setIsLoading(true)
        await videoRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      // More detailed error logging
      console.error("Video playback error:", error)
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("Unknown error occurred during video playback")
      }
      setHasError(true)
      setIsPlaying(false)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle video error event
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const videoElement = e.currentTarget
    let message = "Video loading error"

    // Extract more detailed error information if available
    if (videoElement.error) {
      switch (videoElement.error.code) {
        case 1: // MEDIA_ERR_ABORTED
          message = "Video playback aborted"
          break
        case 2: // MEDIA_ERR_NETWORK
          message = "Network error occurred while loading the video"
          break
        case 3: // MEDIA_ERR_DECODE
          message = "Video decoding error"
          break
        case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
          message = "Video format not supported"
          break
        default:
          message = `Video error: ${videoElement.error.message || "Unknown error"}`
      }
    } else {
      // Handle case where error object is null
      message = "Video could not be loaded (no error details available)"
    }

    console.error(message, videoElement.error)
    setErrorMessage(message)
    setHasError(true)
    setIsPlaying(false)
    setIsLoading(false)
  }

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause()
      }
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" dir={dir}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#D4AF37] mb-6">{t("video.title")}</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              {t("video.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Error Message Display */}
            {hasError && !youtubeId && (
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20 p-6 text-center">
                <AlertCircle size={48} className="text-red-500 mb-4" />
                <h3 className="text-xl font-medium text-white mb-3">Video Unavailable</h3>
                <p className="text-white/80 mb-6 max-w-md">
                  {errorMessage || "The video could not be loaded. Please try again later."}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white rounded-full"
                  onClick={() => window.open("https://wa.link/kk1gdr", "_blank")}
                >
                  <ExternalLink size={16} className="me-2" />
                  {t("video.contactUs")}
                </Button>
              </div>
            )}

            {/* Video Overlay with Play Button (when not playing) */}
            {!isPlaying && !hasError && !showYouTube && (
              <div
                className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer z-10"
                onClick={togglePlay}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Play size={36} className="text-white ms-1" />
                  )}
                </motion.div>
              </div>
            )}

            {/* Video Element */}
            <div className="aspect-video bg-black">
              {showYouTube ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : !hasError && !youtubeId ? (
                <video
                  ref={videoRef}
                  poster={posterUrl}
                  className="w-full h-full object-contain rounded-2xl"
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onError={handleVideoError}
                  preload="metadata"
                >
                  {/* Try multiple source formats for better compatibility */}
                  <source src={videoUrl} type="video/mp4" />
                  <source src={videoUrl.replace(".mp4", ".webm")} type="video/webm" />
                  <source src={videoUrl.replace(".mp4", ".ogg")} type="video/ogg" />
                  {t("video.browserNotSupported")}
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center cursor-pointer" onClick={togglePlay}>
                  <img
                    src={posterUrl || "/placeholder.svg?height=720&width=1280&text=Northern+Cyprus+Travel+Guide"}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover rounded-2xl opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center"
                    >
                      <Play size={36} className="text-white ms-1" />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>

            {/* Video Info Box */}
            {!showYouTube && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-medium mb-2">{t("video.studentGuide")}</h3>
                <p className="text-white/80 mb-4 max-w-3xl">{t("video.guideDescription")}</p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full"
                    onClick={togglePlay}
                    disabled={isLoading}
                  >
                    {isPlaying ? <Pause size={16} className="me-2" /> : <Play size={16} className="me-2" />}
                    {isPlaying ? t("video.pause") : t("video.play")}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-[#D4AF37]/80 hover:bg-[#D4AF37] text-white rounded-full"
                    onClick={() => window.open("https://wa.link/kk1gdr", "_blank")}
                  >
                    <ExternalLink size={16} className="me-2" />
                    {t("video.contactUs")}
                  </Button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Key Points */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-medium text-gray-800 mb-2">{t("video.northCyprusTitle")}</h3>
              <p className="text-gray-600">{t("video.northCyprusDesc")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-medium text-gray-800 mb-2">{t("video.chinaTitle")}</h3>
              <p className="text-gray-600">{t("video.chinaDesc")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4">
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
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">{t("video.scholarshipsTitle")}</h3>
              <p className="text-gray-600">{t("video.scholarshipsDesc")}</p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button
              variant="ghost"
              className="rounded-full px-8 py-6 text-lg font-medium
                        bg-[#D4AF37] hover:bg-[#D4AF37]/90
                        text-white transition-all duration-300"
              onClick={() => window.open("https://wa.link/kk1gdr", "_blank")}
            >
              <span>{t("video.getStarted")}</span>
              <ExternalLink className="ms-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
