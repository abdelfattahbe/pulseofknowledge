"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Education Consultant",
      bio: "With over 10 years of experience in international education, Sarah specializes in helping students find the perfect academic program abroad.",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "China Programs Specialist",
      bio: "Michael has extensive knowledge of Chinese universities and helps students navigate the application process for studying in China.",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ayşe Yılmaz",
      role: "North Cyprus Programs Specialist",
      bio: "Ayşe is an expert on North Cyprus education and provides comprehensive guidance on universities and programs in the region.",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Wilson",
      role: "Visa Specialist",
      bio: "David assists students with visa applications and ensures all documentation is properly prepared for a smooth application process.",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-6 text-center">About Us</h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
            <h2 className="text-2xl font-serif text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At Pulse OF Knowledge, our mission is to empower students to achieve their academic and career goals
              through international education. We believe that studying abroad is not just about obtaining a degree, but
              about gaining valuable life experiences, cultural understanding, and global perspectives that prepare
              students for success in an interconnected world.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2018, Pulse OF Knowledge began with a simple vision: to make quality international education
              accessible to students from diverse backgrounds. What started as a small consultancy has grown into a
              trusted education agency with a proven track record of helping hundreds of students achieve their dreams
              of studying abroad.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">How We Help Students</h2>
            <p className="text-gray-700 mb-6">
              Our team of experienced education consultants works closely with each student to understand their academic
              background, career aspirations, and personal preferences. We provide personalized guidance on:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Selecting the right university and program based on academic goals and budget</li>
              <li>Preparing and submitting university applications</li>
              <li>Securing scholarships and financial aid opportunities</li>
              <li>Navigating the visa application process</li>
              <li>Arranging accommodation and travel</li>
              <li>Pre-departure orientation and cultural preparation</li>
              <li>Ongoing support throughout the study abroad journey</li>
            </ul>

            <p className="text-gray-700">
              Our commitment to student success extends beyond the application process. We maintain relationships with
              our students throughout their academic journey, providing support and guidance whenever needed.
            </p>
          </div>

          <h2 className="text-3xl font-serif text-[#D4AF37] mb-8 text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 relative h-48 sm:h-auto">
                    <Image
                      src={member.imagePath || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="sm:w-2/3 p-6">
                    <h3 className="text-xl font-medium text-[#D4AF37] mb-1">{member.name}</h3>
                    <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
