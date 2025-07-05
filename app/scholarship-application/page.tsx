"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { submitScholarshipApplication } from "./actions"
import { useLanguage } from "@/contexts/language-context"
import { GraduationCap, Award, Send, CheckCircle } from "lucide-react"

export default function ScholarshipApplicationPage() {
  const { t, dir } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    currentCountry: "",
    city: "",
    address: "",

    // Academic Information
    currentEducationLevel: "",
    currentInstitution: "",
    fieldOfStudy: "",
    gpa: "",
    graduationYear: "",
    englishProficiency: "",

    // Preferred Destination
    preferredDestination: "",
    preferredUniversity: "",
    preferredProgram: "",
    intakeYear: "",
    intakeSemester: "",

    // Financial Information
    familyIncome: "",
    scholarshipPercentage: "",
    canPayRemaining: "",

    // Essays
    motivationLetter: "",
    careerGoals: "",
    whyDeserveScholarship: "",

    // Additional Information
    extracurriculars: "",
    workExperience: "",
    languages: "",
    hasPassport: "",

    // Emergency Contact
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactPhone: "",

    // Agreements
    agreeToTerms: false,
    agreeToContact: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitScholarshipApplication(formData)
      if (result.success) {
        setIsSubmitted(true)
      } else {
        alert("Error submitting application. Please try again.")
      }
    } catch (error) {
      alert("Error submitting application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#00D4D4]/5 to-[#FF6B47]/5 pt-20">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="border-[#00D4D4]/20 shadow-xl">
              <CardContent className="p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                </motion.div>
                <h1 className="text-3xl font-serif text-[#00D4D4] mb-4">Application Submitted Successfully!</h1>
                <p className="text-gray-700 mb-6">
                  Thank you for applying for our scholarship program. We have received your application and will review
                  it carefully.
                </p>
                <div className="bg-gradient-to-r from-[#00D4D4]/10 to-[#FF6B47]/10 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">What happens next?</h3>
                  <ul className="text-sm text-gray-700 space-y-1 text-left">
                    <li>• Our team will review your application within 3-5 business days</li>
                    <li>• You will receive an email confirmation shortly</li>
                    <li>• If selected, we will contact you for an interview</li>
                    <li>• Final scholarship decisions will be communicated within 2 weeks</li>
                  </ul>
                </div>
                <Button
                  onClick={() => (window.location.href = "/")}
                  className="bg-gradient-to-r from-[#00D4D4] to-[#00B8B8] hover:from-[#00B8B8] hover:to-[#00D4D4] text-white"
                >
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00D4D4]/5 to-[#FF6B47]/5 pt-20" dir={dir}>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Award className="w-12 h-12 text-[#FF6B47] mr-3" />
              <GraduationCap className="w-12 h-12 text-[#00D4D4]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#00D4D4] mb-4">Scholarship Application</h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Apply for our exclusive scholarship program and take the first step towards your international education
              journey.
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step <= currentStep ? "bg-[#00D4D4] text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#00D4D4] to-[#FF6B47] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Personal Info</span>
              <span>Academic Info</span>
              <span>Preferences</span>
              <span>Final Details</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-[#00D4D4]/20">
                  <CardHeader>
                    <CardTitle className="text-[#00D4D4]">Personal Information</CardTitle>
                    <CardDescription>Please provide your basic personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          required
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="nationality">Nationality *</Label>
                        <Input
                          id="nationality"
                          value={formData.nationality}
                          onChange={(e) => handleInputChange("nationality", e.target.value)}
                          required
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="currentCountry">Current Country *</Label>
                        <Input
                          id="currentCountry"
                          value={formData.currentCountry}
                          onChange={(e) => handleInputChange("currentCountry", e.target.value)}
                          required
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          required
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">Full Address</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Academic Information */}
            {currentStep === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-[#00D4D4]/20">
                  <CardHeader>
                    <CardTitle className="text-[#00D4D4]">Academic Information</CardTitle>
                    <CardDescription>Tell us about your educational background</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="currentEducationLevel">Current Education Level *</Label>
                      <Select onValueChange={(value) => handleInputChange("currentEducationLevel", value)}>
                        <SelectTrigger className="border-gray-300 focus:border-[#00D4D4]">
                          <SelectValue placeholder="Select your current education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="currentInstitution">Current Institution *</Label>
                        <Input
                          id="currentInstitution"
                          value={formData.currentInstitution}
                          onChange={(e) => handleInputChange("currentInstitution", e.target.value)}
                          required
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                        <Input
                          id="fieldOfStudy"
                          value={formData.fieldOfStudy}
                          onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
                          required
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="gpa">GPA/Grade *</Label>
                        <Input
                          id="gpa"
                          value={formData.gpa}
                          onChange={(e) => handleInputChange("gpa", e.target.value)}
                          required
                          placeholder="e.g., 3.8/4.0 or 85%"
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="graduationYear">Graduation Year *</Label>
                        <Input
                          id="graduationYear"
                          value={formData.graduationYear}
                          onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                          required
                          placeholder="e.g., 2024"
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="englishProficiency">English Proficiency</Label>
                        <Select onValueChange={(value) => handleInputChange("englishProficiency", value)}>
                          <SelectTrigger className="border-gray-300 focus:border-[#00D4D4]">
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="native">Native Speaker</SelectItem>
                            <SelectItem value="fluent">Fluent</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="basic">Basic</SelectItem>
                            <SelectItem value="ielts">IELTS Score Available</SelectItem>
                            <SelectItem value="toefl">TOEFL Score Available</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-[#00D4D4]/20">
                  <CardHeader>
                    <CardTitle className="text-[#00D4D4]">Study Preferences</CardTitle>
                    <CardDescription>Tell us about your preferred study destination and program</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="preferredDestination">Preferred Destination *</Label>
                      <Select onValueChange={(value) => handleInputChange("preferredDestination", value)}>
                        <SelectTrigger className="border-gray-300 focus:border-[#00D4D4]">
                          <SelectValue placeholder="Select your preferred destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="north-cyprus">North Cyprus</SelectItem>
                          <SelectItem value="china">China</SelectItem>
                          <SelectItem value="both">Both (I'm flexible)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredUniversity">Preferred University</Label>
                        <Input
                          id="preferredUniversity"
                          value={formData.preferredUniversity}
                          onChange={(e) => handleInputChange("preferredUniversity", e.target.value)}
                          placeholder="e.g., Eastern Mediterranean University"
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredProgram">Preferred Program *</Label>
                        <Input
                          id="preferredProgram"
                          value={formData.preferredProgram}
                          onChange={(e) => handleInputChange("preferredProgram", e.target.value)}
                          required
                          placeholder="e.g., Computer Engineering"
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="intakeYear">Preferred Intake Year *</Label>
                        <Select onValueChange={(value) => handleInputChange("intakeYear", value)}>
                          <SelectTrigger className="border-gray-300 focus:border-[#00D4D4]">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="intakeSemester">Preferred Semester *</Label>
                        <Select onValueChange={(value) => handleInputChange("intakeSemester", value)}>
                          <SelectTrigger className="border-gray-300 focus:border-[#00D4D4]">
                            <SelectValue placeholder="Select semester" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fall">Fall</SelectItem>
                            <SelectItem value="spring">Spring</SelectItem>
                            <SelectItem value="summer">Summer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="scholarshipPercentage">Desired Scholarship Percentage *</Label>
                      <Select onValueChange={(value) => handleInputChange("scholarshipPercentage", value)}>
                        <SelectTrigger className="border-gray-300 focus:border-[#00D4D4]">
                          <SelectValue placeholder="Select scholarship percentage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50">50%</SelectItem>
                          <SelectItem value="75">75%</SelectItem>
                          <SelectItem value="100">100% (Full Scholarship)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Can you pay the remaining tuition fees? *</Label>
                      <RadioGroup
                        value={formData.canPayRemaining}
                        onValueChange={(value) => handleInputChange("canPayRemaining", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="pay-yes" />
                          <Label htmlFor="pay-yes">Yes, I can pay the remaining fees</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="partial" id="pay-partial" />
                          <Label htmlFor="pay-partial">I can pay partially</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="pay-no" />
                          <Label htmlFor="pay-no">I need full financial support</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 4: Final Details */}
            {currentStep === 4 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Card className="border-[#00D4D4]/20">
                  <CardHeader>
                    <CardTitle className="text-[#00D4D4]">Final Details</CardTitle>
                    <CardDescription>Complete your application with additional information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="motivationLetter">Motivation Letter *</Label>
                      <Textarea
                        id="motivationLetter"
                        value={formData.motivationLetter}
                        onChange={(e) => handleInputChange("motivationLetter", e.target.value)}
                        required
                        placeholder="Tell us why you want to study abroad and why you chose this program..."
                        className="border-gray-300 focus:border-[#00D4D4] min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="whyDeserveScholarship">Why do you deserve this scholarship? *</Label>
                      <Textarea
                        id="whyDeserveScholarship"
                        value={formData.whyDeserveScholarship}
                        onChange={(e) => handleInputChange("whyDeserveScholarship", e.target.value)}
                        required
                        placeholder="Explain your achievements, challenges overcome, and future goals..."
                        className="border-gray-300 focus:border-[#00D4D4] min-h-[120px]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="extracurriculars">Extracurricular Activities</Label>
                        <Textarea
                          id="extracurriculars"
                          value={formData.extracurriculars}
                          onChange={(e) => handleInputChange("extracurriculars", e.target.value)}
                          placeholder="Sports, volunteering, clubs, etc."
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="workExperience">Work Experience</Label>
                        <Textarea
                          id="workExperience"
                          value={formData.workExperience}
                          onChange={(e) => handleInputChange("workExperience", e.target.value)}
                          placeholder="Any relevant work experience..."
                          className="border-gray-300 focus:border-[#00D4D4]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="familyIncome">Family Annual Income (Optional)</Label>
                      <Select onValueChange={(value) => handleInputChange("familyIncome", value)}>
                        <SelectTrigger className="border-gray-300 focus:border-[#00D4D4]">
                          <SelectValue placeholder="Select income range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="over-100k">Over $100,000</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-semibold text-gray-800 mb-4">Emergency Contact</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="emergencyContactName">Contact Name *</Label>
                          <Input
                            id="emergencyContactName"
                            value={formData.emergencyContactName}
                            onChange={(e) => handleInputChange("emergencyContactName", e.target.value)}
                            required
                            className="border-gray-300 focus:border-[#00D4D4]"
                          />
                        </div>
                        <div>
                          <Label htmlFor="emergencyContactRelation">Relationship *</Label>
                          <Input
                            id="emergencyContactRelation"
                            value={formData.emergencyContactRelation}
                            onChange={(e) => handleInputChange("emergencyContactRelation", e.target.value)}
                            required
                            placeholder="e.g., Parent, Sibling"
                            className="border-gray-300 focus:border-[#00D4D4]"
                          />
                        </div>
                        <div>
                          <Label htmlFor="emergencyContactPhone">Phone Number *</Label>
                          <Input
                            id="emergencyContactPhone"
                            value={formData.emergencyContactPhone}
                            onChange={(e) => handleInputChange("emergencyContactPhone", e.target.value)}
                            required
                            className="border-gray-300 focus:border-[#00D4D4]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6 space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                        />
                        <Label htmlFor="agreeToTerms" className="text-sm">
                          I agree to the terms and conditions and privacy policy *
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreeToContact"
                          checked={formData.agreeToContact}
                          onCheckedChange={(checked) => handleInputChange("agreeToContact", checked as boolean)}
                        />
                        <Label htmlFor="agreeToContact" className="text-sm">
                          I agree to be contacted by Pulse OF Knowledge regarding my application *
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="border-[#00D4D4] text-[#00D4D4] hover:bg-[#00D4D4] hover:text-white bg-transparent"
              >
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-[#00D4D4] to-[#00B8B8] hover:from-[#00B8B8] hover:to-[#00D4D4] text-white"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.agreeToTerms || !formData.agreeToContact}
                  className="bg-gradient-to-r from-[#FF6B47] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF6B47] text-white"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
