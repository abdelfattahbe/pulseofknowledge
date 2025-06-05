"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ScholarshipApplicationPage() {
  const { t, dir } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<string>("")
  const [formData, setFormData] = useState({
    country: "",
    fieldOfStudy: "",
    baccalaureateYear: "",
    fullName: "",
    phoneNumber: "",
    message: "",
  })

  // Available fields of study based on country
  const fieldsOfStudy = {
    "north-cyprus": [
      "Medicine",
      "Dentistry",
      "Pharmacy",
      "Engineering",
      "Computer Science",
      "Business Administration",
      "Architecture",
      "Law",
      "Tourism",
      "International Relations",
    ],
    china: [
      "Engineering",
      "Computer Science",
      "Medicine",
      "Business Administration",
      "Economics",
      "International Relations",
      "Chinese Language",
      "Architecture",
      "Environmental Science",
      "Public Health",
    ],
  }

  // Generate years for baccalaureate selection (last 10 years)
  const currentYear = new Date().getFullYear()
  const baccalaureateYears = Array.from({ length: 10 }, (_, i) => (currentYear - i).toString())

  // Handle country change to reset field of study
  useEffect(() => {
    if (selectedCountry !== formData.country) {
      setFormData((prev) => ({
        ...prev,
        country: selectedCountry,
        fieldOfStudy: "",
      }))
    }
  }, [selectedCountry, formData.country])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)

    // Show success message
    setSubmitted(true)

    // Reset form after 5 seconds (in a real app, you might redirect instead)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        country: "",
        fieldOfStudy: "",
        baccalaureateYear: "",
        fullName: "",
        phoneNumber: "",
        message: "",
      })
      setSelectedCountry("")
    }, 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" dir={dir}>
      <div className="max-w-3xl w-full space-y-8">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">{t("application.successTitle")}</h2>
            <p className="text-gray-700 mb-6">{t("application.successMessage")}</p>
            <Button
              variant="ghost"
              className="rounded-full px-6 py-2 text-base font-medium
                        bg-[#D4AF37] hover:bg-[#D4AF37]/90
                        text-white transition-all duration-300"
              onClick={() => (window.location.href = "/")}
            >
              {t("application.backToHome")}
            </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h1 className="text-3xl font-serif text-[#D4AF37] mb-6 text-center">{t("application.title")}</h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Country Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium text-gray-700">{t("application.countryLabel")}</Label>
                  <RadioGroup
                    value={selectedCountry}
                    onValueChange={setSelectedCountry}
                    className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="north-cyprus" id="north-cyprus" />
                      <Label htmlFor="north-cyprus" className="font-normal">
                        {t("application.northCyprus")}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="china" id="china" />
                      <Label htmlFor="china" className="font-normal">
                        {t("application.china")}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Field of Study */}
                <div className="space-y-3">
                  <Label htmlFor="fieldOfStudy" className="text-base font-medium text-gray-700">
                    {t("application.fieldOfStudyLabel")}
                  </Label>
                  <Select
                    disabled={!selectedCountry}
                    value={formData.fieldOfStudy}
                    onValueChange={(value) => handleSelectChange("fieldOfStudy", value)}
                  >
                    <SelectTrigger className="w-full bg-white border-gray-300">
                      <SelectValue placeholder={t("application.selectField")} />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedCountry &&
                        fieldsOfStudy[selectedCountry as keyof typeof fieldsOfStudy].map((field) => (
                          <SelectItem key={field} value={field}>
                            {field}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Baccalaureate Year */}
                <div className="space-y-3">
                  <Label htmlFor="baccalaureateYear" className="text-base font-medium text-gray-700">
                    {t("application.baccalaureateYearLabel")}
                  </Label>
                  <Select
                    value={formData.baccalaureateYear}
                    onValueChange={(value) => handleSelectChange("baccalaureateYear", value)}
                  >
                    <SelectTrigger className="w-full bg-white border-gray-300">
                      <SelectValue placeholder={t("application.selectYear")} />
                    </SelectTrigger>
                    <SelectContent>
                      {baccalaureateYears.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Full Name */}
                <div className="space-y-3">
                  <Label htmlFor="fullName" className="text-base font-medium text-gray-700">
                    {t("application.fullNameLabel")}
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-3">
                  <Label htmlFor="phoneNumber" className="text-base font-medium text-gray-700">
                    {t("application.phoneNumberLabel")}
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <span className="text-gray-500">+212</span>
                    </div>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="bg-white border-gray-300 ps-14"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-base font-medium text-gray-700">
                    {t("application.messageLabel")}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 min-h-[120px]"
                    placeholder={t("application.messagePlaceholder")}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full rounded-full px-8 py-6 text-lg font-medium
                            bg-[#D4AF37] hover:bg-[#D4AF37]/90
                            text-white transition-all duration-300 mt-6"
                >
                  <span>{t("application.submitButton")}</span>
                  <ArrowRight className="ms-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
