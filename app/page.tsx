"use client"

import MainLogo3D from "@/components/pulse-knowledge/main-logo-3d"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, MapPin, Clock, Award, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialSlider from "@/components/pulse-knowledge/testimonial-slider"

export default function Home() {
  const destinations = [
    {
      name: "North Cyprus",
      description: "Explore prestigious universities in the Mediterranean paradise",
      path: "/north-cyprus",
      icon: <MapPin className="w-8 h-8 text-[#00D4D4]" />,
      delay: 0.2,
    },
    {
      name: "China",
      description: "Discover world-class education in the heart of Asia",
      path: "/china",
      icon: <GraduationCap className="w-8 h-8 text-[#00D4D4]" />,
      delay: 0.4,
    },
    {
      name: "Coming Soon",
      description: "More exciting destinations will be added soon",
      path: "/coming-soon",
      icon: <Clock className="w-8 h-8 text-[#00D4D4]" />,
      delay: 0.6,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <MainLogo3D />

      {/* Scholarship Banner */}
      <div className="bg-gradient-to-r from-[#00D4D4]/10 to-[#FF6B47]/10 py-8 border-y border-[#00D4D4]/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif text-[#00D4D4] mb-4">Exclusive Scholarship Opportunities</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              We offer scholarships ranging from <span className="font-bold text-[#FF6B47]">50% to 100%</span> for
              qualified students. Take the first step towards your international education journey today!
            </p>
            <Link href="/scholarship-application">
              <Button
                variant="ghost"
                className="rounded-full px-6 py-3 text-base font-medium
                    bg-gradient-to-r from-[#FF6B47] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF6B47]
                    text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply for a Scholarship
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: destination.delay }}
              className="relative"
            >
              <Link href={destination.path} className="block h-full">
                <div
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-full 
                              hover:shadow-xl hover:border-[#00D4D4]/20 transition-all duration-300 
                              hover:-translate-y-1 group"
                >
                  <div className="bg-gradient-to-br from-[#00D4D4]/10 to-[#FF6B47]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {destination.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-[#00D4D4] mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center text-[#FF6B47] font-medium">
                    <span>Explore</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gradient-to-br from-gray-50 to-[#00D4D4]/5 py-20 mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#00D4D4] mb-6">
                About Pulse OF Knowledge
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00D4D4] to-[#FF6B47] mx-auto mb-8"></div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                We are the premier education consultancy dedicated to transforming students' lives through exceptional
                international education opportunities. With our unparalleled expertise and personalized approach, we've
                helped thousands of students achieve their academic dreams abroad.
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
                  <h3 className="text-2xl font-serif text-[#00D4D4] mb-6 flex items-center">
                    <Award className="mr-3 text-[#FF6B47]" />
                    Exclusive Scholarship Opportunities
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    What sets us apart is our commitment to making quality education accessible to all deserving
                    students. Through our strong partnerships with prestigious universities, we offer{" "}
                    <span className="font-bold text-[#FF6B47] text-lg">
                      exclusive scholarships ranging from 50% to 100%
                    </span>{" "}
                    of tuition fees for qualified applicants.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our dedicated scholarship team works tirelessly to match students with the best financial aid
                    packages based on their academic achievements, extracurricular activities, and financial needs.
                  </p>
                  <div className="bg-gradient-to-r from-[#00D4D4]/10 to-[#FF6B47]/10 p-4 rounded-lg">
                    <p className="text-gray-800 font-medium">
                      Last year alone, we secured over $2 million in scholarships for our students, making their
                      international education dreams a reality.
                    </p>
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
                  <div className="bg-gradient-to-br from-[#00D4D4]/10 to-[#FF6B47]/10 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-[#00D4D4]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Expert Consultants</h4>
                    <p className="text-gray-600">
                      Our team consists of experienced education professionals with in-depth knowledge of international
                      universities and admission processes.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex">
                  <div className="bg-gradient-to-br from-[#00D4D4]/10 to-[#FF6B47]/10 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-[#00D4D4]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Comprehensive Services</h4>
                    <p className="text-gray-600">
                      From university selection to visa processing, accommodation arrangements, and pre-departure
                      orientation – we handle everything.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex">
                  <div className="bg-gradient-to-br from-[#00D4D4]/10 to-[#FF6B47]/10 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-6 h-6 text-[#00D4D4]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Proven Success</h4>
                    <p className="text-gray-600">
                      With a 95% visa success rate and thousands of satisfied students studying worldwide, our track
                      record speaks for itself.
                    </p>
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
                            bg-gradient-to-r from-[#00D4D4] to-[#00B8B8] hover:from-[#00B8B8] hover:to-[#00D4D4]
                            text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
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
          <h2 className="text-3xl md:text-4xl font-serif text-[#00D4D4] mb-6">
            Your Gateway to International Education
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            At Pulse OF Knowledge, we guide students through every step of their study abroad journey, helping them make
            informed decisions for a brighter future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D4D4]/10 to-[#FF6B47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00D4D4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">Personalized Guidance</h3>
              <p className="text-gray-600 text-center">
                Our expert advisors provide tailored advice based on your academic background, career goals, and
                personal preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D4D4]/10 to-[#FF6B47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00D4D4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">Comprehensive Support</h3>
              <p className="text-gray-600 text-center">
                From university selection to visa application, accommodation arrangements, and pre-departure
                orientation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D4D4]/10 to-[#FF6B47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00D4D4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">Trusted Partnerships</h3>
              <p className="text-gray-600 text-center">
                We partner with reputable universities worldwide to ensure you receive quality education and valuable
                credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
