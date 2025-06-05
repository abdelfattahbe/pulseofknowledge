import DestinationHeader from "@/components/pulse-knowledge/destination-header"
import UniversityCard from "@/components/pulse-knowledge/university-card"

export default function ChinaPage() {
  const universities = [
    {
      name: "Tsinghua University",
      location: "Beijing, China",
      description:
        "Tsinghua University is consistently ranked as one of China's top academic institutions and a leading university worldwide. Known for its rigorous academics and beautiful campus, Tsinghua offers programs across various disciplines with a strong emphasis on science and engineering.",
      programs: ["Engineering", "Computer Science", "Economics", "Architecture", "Medicine"],
      imagePath: "/placeholder.svg?height=300&width=500&text=Tsinghua+University",
      website: "https://www.tsinghua.edu.cn/en/",
    },
    {
      name: "Peking University",
      location: "Beijing, China",
      description:
        "Peking University is one of China's most prestigious institutions, known for its rich history and academic excellence. The university offers comprehensive programs with particular strengths in humanities, social sciences, and natural sciences.",
      programs: ["Liberal Arts", "International Relations", "Chinese Language", "Business", "Law"],
      imagePath: "/placeholder.svg?height=300&width=500&text=Peking+University",
      website: "https://english.pku.edu.cn/",
    },
    {
      name: "Fudan University",
      location: "Shanghai, China",
      description:
        "Fudan University is a major research university located in Shanghai, offering a wide range of programs for international students. With strong connections to industry and a global outlook, Fudan provides excellent opportunities for career development.",
      programs: ["Business Administration", "Chinese Studies", "International Politics", "Public Health"],
      imagePath: "/placeholder.svg?height=300&width=500&text=Fudan+University",
      website: "https://www.fudan.edu.cn/en/",
    },
    {
      name: "Shanghai Jiao Tong University",
      location: "Shanghai, China",
      description:
        "Shanghai Jiao Tong University is renowned for its engineering and business programs. The university has established partnerships with leading institutions worldwide and offers numerous English-taught programs for international students.",
      programs: ["Mechanical Engineering", "Finance", "Computer Science", "Biomedical Engineering"],
      imagePath: "/placeholder.svg?height=300&width=500&text=Shanghai+Jiao+Tong+University",
      website: "https://en.sjtu.edu.cn/",
    },
    {
      name: "Zhejiang University",
      location: "Hangzhou, China",
      description:
        "Zhejiang University is one of China's oldest and most prestigious institutions, located in the beautiful city of Hangzhou. The university is known for its innovative research and comprehensive academic programs.",
      programs: ["Engineering", "Computer Science", "Medicine", "Business", "Agriculture"],
      imagePath: "/placeholder.svg?height=300&width=500&text=Zhejiang+University",
      website: "https://www.zju.edu.cn/english/",
    },
    {
      name: "Nanjing University",
      location: "Nanjing, China",
      description:
        "Nanjing University is one of China's key comprehensive universities with a long history and strong academic reputation. The university offers diverse programs with strengths in arts, sciences, and social sciences.",
      programs: ["Chinese Literature", "International Business", "Environmental Science", "History"],
      imagePath: "/placeholder.svg?height=300&width=500&text=Nanjing+University",
      website: "https://www.nju.edu.cn/EN/",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <DestinationHeader
        title="Study in China"
        description="Experience world-class education in one of the world's fastest-growing economies with rich cultural heritage and modern innovation."
      />

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#D4AF37] mb-4">Why Choose China?</h2>
          <p className="text-gray-700">
            China offers a unique blend of ancient traditions and cutting-edge innovation. With world-ranked
            universities, affordable tuition fees, and numerous scholarship opportunities, China has become a leading
            destination for international students. Studying in China provides not only quality education but also
            valuable exposure to one of the world's most important economies and cultures.
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
