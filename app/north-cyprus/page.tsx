import DestinationHeader from "@/components/pulse-knowledge/destination-header"
import UniversityCard from "@/components/pulse-knowledge/university-card"

export default function NorthCyprusPage() {
  const universities = [
    {
      name: "Eastern Mediterranean University",
      location: "Famagusta, North Cyprus",
      description:
        "Eastern Mediterranean University (EMU) is a prestigious institution offering a wide range of programs in a multicultural environment. With state-of-the-art facilities and internationally recognized degrees, EMU provides an exceptional educational experience.",
      programs: ["Medicine", "Engineering", "Business", "Architecture", "Law"],
      imagePath: "/placeholder.svg?height=300&width=500&text=Eastern+Mediterranean+University",
      website: "https://www.emu.edu.tr/en",
    },
    {
      name: "Near East University",
      location: "Nicosia, North Cyprus",
      description:
        "Near East University is one of the largest universities in North Cyprus, known for its modern campus and comprehensive academic programs. The university offers cutting-edge research facilities and a vibrant student life.",
      programs: ["Medicine", "Dentistry", "Pharmacy", "Engineering", "Arts"],
      imagePath: "/placeholder.svg?height=300&width=500&text=Near+East+University",
      website: "https://neu.edu.tr/en/",
    },
    {
      name: "Cyprus International University",
      location: "Nicosia, North Cyprus",
      description:
        "Cyprus International University provides quality education with a focus on practical skills and international perspectives. The university has strong industry connections and offers numerous internship opportunities.",
      programs: ["Business Administration", "Computer Engineering", "Tourism", "International Relations"],
      imagePath: "/placeholder.svg?height=300&width=500&text=Cyprus+International+University",
      website: "https://www.ciu.edu.tr/en",
    },
    {
      name: "Girne American University",
      location: "Kyrenia, North Cyprus",
      description:
        "Girne American University offers American-style education in the beautiful coastal city of Kyrenia. With a strong emphasis on global perspectives, the university prepares students for international careers.",
      programs: ["Aviation", "Maritime", "Business", "Communication", "Psychology"],
      imagePath: "/placeholder.svg?height=300&width=500&text=Girne+American+University",
      website: "https://www.gau.edu.tr/en",
    },
    {
      name: "European University of Lefke",
      location: "Lefke, North Cyprus",
      description:
        "European University of Lefke is known for its peaceful campus and student-centered approach to education. The university offers affordable tuition with high-quality programs and personalized attention.",
      programs: ["Agriculture", "Engineering", "Education", "Health Sciences"],
      imagePath: "/placeholder.svg?height=300&width=500&text=European+University+of+Lefke",
      website: "https://www.eul.edu.tr/en/",
    },
    {
      name: "Final International University",
      location: "Kyrenia, North Cyprus",
      description:
        "Final International University is a newer institution with modern facilities and innovative teaching methods. The university focuses on practical education and preparing students for the global job market.",
      programs: ["Computer Science", "Economics", "English Language Teaching", "Civil Engineering"],
      imagePath: "/placeholder.svg?height=300&width=500&text=Final+International+University",
      website: "https://www.final.edu.tr/en/",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <DestinationHeader
        title="Study in North Cyprus"
        description="Discover prestigious universities in the Mediterranean paradise with affordable tuition fees and internationally recognized degrees."
      />

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#D4AF37] mb-4">Why Choose North Cyprus?</h2>
          <p className="text-gray-700">
            North Cyprus offers a unique blend of quality education, affordable living costs, and a safe Mediterranean
            environment. With English-taught programs, internationally accredited degrees, and a multicultural
            atmosphere, it's an ideal destination for international students seeking quality education in a beautiful
            setting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university, index) => (
            <UniversityCard key={university.name} {...university} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
