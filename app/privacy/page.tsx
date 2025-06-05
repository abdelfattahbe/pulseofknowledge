"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function PrivacyPage() {
  const { t, dir } = useLanguage()

  return (
    <div className="min-h-screen bg-white pt-20" dir={dir}>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-8 text-center"
          >
            Privacy Policy
          </motion.h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
            <h2 className="text-2xl font-serif text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              At Pulse OF Knowledge, we are committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-6">
              We collect personal information that you voluntarily provide to us when you express interest in obtaining
              information about our services. This may include your name, email address, phone number, educational
              background, and other details relevant to your study abroad plans.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-6">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>Communicate with you about our services, updates, and other information</li>
              <li>Process applications and provide guidance on study abroad opportunities</li>
              <li>Prevent fraudulent activities and improve security</li>
            </ul>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 mb-6">
              We may share your information with universities, educational institutions, and other third parties as
              necessary to facilitate your study abroad journey. We will always seek your consent before sharing your
              information for application purposes.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information. However, no method of
              transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-6">
              You have the right to access, correct, or delete your personal information. If you wish to exercise these
              rights, please contact us using the information provided below.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">8. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at pulseofknowledge@gmail.com.
            </p>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>Last updated: April 14, 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
