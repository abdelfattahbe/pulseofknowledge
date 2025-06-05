"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function TermsPage() {
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
            Terms of Service
          </motion.h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
            <h2 className="text-2xl font-serif text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              Welcome to Pulse OF Knowledge. These Terms of Service govern your use of our website and services. By
              accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">2. Services</h2>
            <p className="text-gray-700 mb-6">
              Pulse OF Knowledge provides educational consultancy services to students seeking to study abroad. Our
              services include university selection, application assistance, scholarship guidance, visa support, and
              pre-departure orientation.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-6">
              Users of our services are responsible for providing accurate and complete information. We rely on the
              information you provide to deliver our services effectively. Misrepresentation or omission of important
              details may affect the quality and outcome of our services.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content on this website, including text, graphics, logos, images, and software, is the property of
              Pulse OF Knowledge and is protected by copyright laws. You may not reproduce, distribute, or create
              derivative works from this content without our express permission.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              While we strive to provide accurate and reliable information, we cannot guarantee the outcome of
              university applications, visa applications, or scholarship applications. Our services are advisory in
              nature, and the final decisions rest with the respective institutions and authorities.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">6. Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect,
              use, and protect your personal data.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
              on our website. Your continued use of our services after any changes indicates your acceptance of the
              modified Terms.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">8. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at pulseofknowledge@gmail.com.
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
