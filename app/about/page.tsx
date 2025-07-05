"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Abdelfattah",
      role: "Partner & Education Consultant",
      bio: "شريك في Pulse OF Knowledge ومستشار تعليمي متخصص، يتمتع بخبرة واسعة في مجال التعليم الدولي ومساعدة الطلاب في تحقيق أحلامهم الأكاديمية في الخارج.",
      imagePath: "/images/team/abdelfattah.jpg",
    },
    {
      name: "Nouhayla",
      role: "Academic Advisor & Student Relations Manager",
      bio: "مستشارة أكاديمية متخصصة في توجيه الطلاب لاختيار التخصصات والجامعات المناسبة، وتدير علاقات الطلاب وتقدم الدعم المستمر طوال رحلتهم التعليمية.",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Zahra",
      role: "Scholarship Coordinator & Financial Aid Specialist",
      bio: "منسقة المنح الدراسية والمساعدات المالية، متخصصة في العثور على أفضل الفرص المالية للطلاب وضمان حصولهم على المنح التي تناسب ظروفهم.",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ahmed",
      role: "Visa & Documentation Specialist",
      bio: "خبير في إجراءات التأشيرات والوثائق المطلوبة للدراسة في الخارج، يساعد الطلاب في إعداد ملفاتهم وضمان نجاح طلبات التأشيرة.",
      imagePath: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#00D4D4] mb-6 text-center">من نحن</h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
            <h2 className="text-2xl font-serif text-gray-800 mb-4">رسالتنا</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              في Pulse OF Knowledge، رسالتنا هي تمكين الطلاب من تحقيق أهدافهم الأكاديمية والمهنية من خلال التعليم
              الدولي. نؤمن أن الدراسة في الخارج ليست مجرد الحصول على شهادة، بل هي تجربة حياتية قيمة تكسب الطلاب فهماً
              ثقافياً ووجهات نظر عالمية تعدهم للنجاح في عالم مترابط.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">قصتنا</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              تأسست Pulse OF Knowledge في عام 2020 برؤية بسيطة: جعل التعليم الدولي عالي الجودة متاحاً للطلاب من خلفيات
              متنوعة. ما بدأ كوكالة استشارية صغيرة نما ليصبح وكالة تعليمية موثوقة مع سجل حافل في مساعدة مئات الطلاب على
              تحقيق أحلامهم في الدراسة بالخارج.
            </p>

            <h2 className="text-2xl font-serif text-gray-800 mb-4">كيف نساعد الطلاب</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              يعمل فريقنا من المستشارين التعليميين ذوي الخبرة عن كثب مع كل طالب لفهم خلفيته الأكاديمية وتطلعاته المهنية
              وتفضيلاته الشخصية. نقدم إرشادات شخصية حول:
            </p>

            <ul className="list-disc pr-6 mb-6 text-gray-700 space-y-2">
              <li>اختيار الجامعة والبرنامج المناسب بناءً على الأهداف الأكاديمية والميزانية</li>
              <li>إعداد وتقديم طلبات الجامعة</li>
              <li>تأمين المنح الدراسية وفرص المساعدة المالية</li>
              <li>التنقل في عملية طلب التأشيرة</li>
              <li>ترتيب السكن والسفر</li>
              <li>التوجيه قبل المغادرة والإعداد الثقافي</li>
              <li>الدعم المستمر طوال رحلة الدراسة في الخارج</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              التزامنا بنجاح الطلاب يمتد إلى ما بعد عملية التقديم. نحافظ على علاقات مع طلابنا طوال رحلتهم الأكاديمية،
              ونقدم الدعم والإرشاد كلما احتاجوا إليه.
            </p>
          </div>

          <h2 className="text-3xl font-serif text-[#00D4D4] mb-8 text-center">تعرف على فريقنا</h2>

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
                    <h3 className="text-xl font-medium text-[#00D4D4] mb-1">{member.name}</h3>
                    <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-[#00D4D4]/10 to-[#FF6B47]/10 rounded-xl p-8"
          >
            <h3 className="text-2xl font-serif text-[#00D4D4] mb-6 text-center">إنجازاتنا</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-[#FF6B47] mb-2">500+</div>
                <div className="text-gray-700">طالب تم قبولهم</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-[#FF6B47] mb-2">95%</div>
                <div className="text-gray-700">معدل نجاح التأشيرة</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-[#FF6B47] mb-2">$2M+</div>
                <div className="text-gray-700">قيمة المنح المحصلة</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-[#FF6B47] mb-2">50+</div>
                <div className="text-gray-700">جامعة شريكة</div>
              </div>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-serif text-[#00D4D4] mb-4">التزامنا</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              نحن ملتزمون بتقديم خدمات استشارية تعليمية عالية الجودة وشخصية لكل طالب. هدفنا هو جعل حلم الدراسة في الخارج
              حقيقة واقعة من خلال توفير الإرشاد المناسب والدعم المستمر والفرص المالية المتميزة.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
