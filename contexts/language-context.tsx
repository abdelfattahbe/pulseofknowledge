"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.northCyprus": "North Cyprus",
    "nav.china": "China",
    "nav.comingSoon": "Coming Soon",
    "nav.contact": "Contact",

    // Home Page
    "home.scholarshipTitle": "Exclusive Scholarship Opportunities",
    "home.scholarshipDesc":
      "We offer scholarships ranging from 50% to 100% for qualified students. Take the first step towards your international education journey today!",
    "home.applyScholarship": "Apply for a Scholarship",
    "home.northCyprus": "North Cyprus",
    "home.northCyprusDesc": "Explore prestigious universities in the Mediterranean paradise",
    "home.china": "China",
    "home.chinaDesc": "Discover world-class education in the heart of Asia",
    "home.comingSoon": "Coming Soon",
    "home.comingSoonDesc": "More exciting destinations will be added soon",
    "home.explore": "Explore",
    "home.aboutTitle": "About Pulse OF Knowledge",
    "home.aboutDesc":
      "We are the premier education consultancy dedicated to transforming students' lives through exceptional international education opportunities. With our unparalleled expertise and personalized approach, we've helped thousands of students achieve their academic dreams abroad.",
    "home.scholarshipOpportunities": "Exclusive Scholarship Opportunities",
    "home.scholarshipOpportunitiesDesc":
      "What sets us apart is our commitment to making quality education accessible to all deserving students. Through our strong partnerships with prestigious universities, we offer exclusive scholarships ranging from 50% to 100% of tuition fees for qualified applicants.",
    "home.scholarshipTeam":
      "Our dedicated scholarship team works tirelessly to match students with the best financial aid packages based on their academic achievements, extracurricular activities, and financial needs.",
    "home.scholarshipSuccess":
      "Last year alone, we secured over $2 million in scholarships for our students, making their international education dreams a reality.",
    "home.expertConsultants": "Expert Consultants",
    "home.expertConsultantsDesc":
      "Our team consists of experienced education professionals with in-depth knowledge of international universities and admission processes.",
    "home.comprehensiveServices": "Comprehensive Services",
    "home.comprehensiveServicesDesc":
      "From university selection to visa processing, accommodation arrangements, and pre-departure orientation – we handle everything.",
    "home.provenSuccess": "Proven Success",
    "home.provenSuccessDesc":
      "With a 95% visa success rate and thousands of satisfied students studying worldwide, our track record speaks for itself.",
    "home.learnMore": "Learn More About Us",
    "home.gatewayTitle": "Your Gateway to International Education",
    "home.gatewayDesc":
      "At Pulse OF Knowledge, we guide students through every step of their study abroad journey, helping them make informed decisions for a brighter future.",
    "home.personalizedGuidance": "Personalized Guidance",
    "home.personalizedGuidanceDesc":
      "Our expert advisors provide tailored advice based on your academic background, career goals, and personal preferences.",
    "home.comprehensiveSupport": "Comprehensive Support",
    "home.comprehensiveSupportDesc":
      "From university selection to visa application, accommodation arrangements, and pre-departure orientation.",
    "home.trustedPartnerships": "Trusted Partnerships",
    "home.trustedPartnershipsDesc":
      "We partner with reputable universities worldwide to ensure you receive quality education and valuable credentials.",

    // Video Guide Section
    "video.title": "Moroccan Student Guide",
    "video.description":
      "Watch our comprehensive guide for Moroccan students looking to study abroad in North Cyprus and China.",
    "video.studentGuide": "Complete Guide for Moroccan Students",
    "video.guideDescription":
      "Learn about the application process, scholarships, visa requirements, and life abroad for Moroccan students.",
    "video.play": "Play Video",
    "video.pause": "Pause Video",
    "video.contactUs": "Contact Us",
    "video.browserNotSupported": "Your browser does not support the video tag.",
    "video.northCyprusTitle": "Study in North Cyprus",
    "video.northCyprusDesc":
      "Discover affordable quality education in the Mediterranean with internationally recognized degrees and English-taught programs.",
    "video.chinaTitle": "Study in China",
    "video.chinaDesc":
      "Explore world-class universities in China with excellent scholarship opportunities and a rich cultural experience.",
    "video.scholarshipsTitle": "Exclusive Scholarships",
    "video.scholarshipsDesc":
      "Learn how we can help you secure scholarships ranging from 50% to 100% at our partner universities.",
    "video.getStarted": "Get Started Today",

    // Footer
    "footer.freeConsultation": "Register for a Free Consultation",
    "footer.fullName": "Full Name",
    "footer.phoneNumber": "Phone Number",
    "footer.submit": "Submit",
    "footer.thankYou": "Thank you! We'll contact you soon.",
    "footer.scholarships": "We offer scholarships from 50% to 100% for qualified students",
    "footer.applyNow": "Apply Now",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.copyright": "© 2025 Pulse OF Knowledge. All rights reserved.",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "studentGuide.title": "Moroccan Student Guide",
    "studentGuide.description":
      "Your comprehensive resource for studying abroad in North Cyprus and China. Learn about the application process, scholarships, visa requirements, and life abroad.",
    "studentGuide.contactUs": "Contact Us",
    "studentGuide.resourcesTitle": "Resources for Moroccan Students",
    "studentGuide.resourcesDescription":
      "We've compiled essential resources to help Moroccan students navigate the study abroad process with ease.",
    "studentGuide.applicationProcess": "Application Process",
    "studentGuide.applicationProcessDesc":
      "Step-by-step guide to applying to universities in North Cyprus and China, including required documents and deadlines.",
    "studentGuide.visaRequirements": "Visa Requirements",
    "studentGuide.visaRequirementsDesc":
      "Detailed information about student visa requirements, application procedures, and processing times.",
    "studentGuide.scholarshipOpportunities": "Scholarship Opportunities",
    "studentGuide.scholarshipOpportunitiesDesc":
      "Explore various scholarship options available to Moroccan students, including our exclusive 50-100% tuition scholarships.",
    "studentGuide.lifeAbroad": "Life Abroad",
    "studentGuide.lifeAbroadDesc":
      "Practical information about accommodation, cost of living, cultural adaptation, and student life in North Cyprus and China.",
    "studentGuide.downloadGuide": "Download Complete Guide (PDF)",
    "studentGuide.faqTitle": "Frequently Asked Questions",
    "studentGuide.faq1Question": "What are the language requirements for studying in North Cyprus and China?",
    "studentGuide.faq1Answer":
      "Most programs in North Cyprus and China offer English-taught programs. Typically, a TOEFL score of 550 or IELTS 6.0 is required. Some universities offer language preparation courses if you don't meet these requirements.",
    "studentGuide.faq2Question": "How much does it cost to study in North Cyprus and China?",
    "studentGuide.faq2Answer":
      "Tuition fees vary by university and program, but generally range from $3,000-$8,000 per year. With our scholarships, you can reduce these costs by 50-100%. Living expenses are approximately $300-$500 per month.",
    "studentGuide.faq3Question": "Can I work while studying in North Cyprus or China?",
    "studentGuide.faq3Answer":
      "In North Cyprus, international students can work part-time (up to 20 hours per week) with a work permit. In China, international students can work on-campus and participate in internships with approval from their university.",
    "studentGuide.faq4Question": "How long does the visa process take for Moroccan students?",
    "studentGuide.faq4Answer":
      "The student visa process typically takes 2-4 weeks for North Cyprus and 3-6 weeks for China. We provide comprehensive assistance with visa applications to ensure a smooth process.",
    "studentGuide.faq5Question": "Are there Moroccan communities in North Cyprus and China?",
    "studentGuide.faq5Answer":
      "Yes, there are growing Moroccan student communities in both destinations. Many universities have Moroccan student associations that help new students adapt and connect with fellow countrymen.",
    "studentGuide.getInTouch": "Get in Touch with Our Advisors",
    "application.title": "Scholarship Application Form",
    "application.description":
      "Complete the form below to apply for a scholarship. Our team will review your application and contact you shortly.",
    "application.countryLabel": "Select the country where you want to study:",
    "application.northCyprus": "North Cyprus",
    "application.china": "China",
    "application.fieldOfStudyLabel": "Select your preferred field of study:",
    "application.selectField": "Select a field of study",
    "application.baccalaureateYearLabel": "Year you received your Baccalaureate:",
    "application.selectYear": "Select year",
    "application.fullNameLabel": "Full Name:",
    "application.phoneNumberLabel": "Phone Number:",
    "application.messageLabel": "Your Message:",
    "application.messagePlaceholder":
      "Tell us about your academic background, achievements, and why you're interested in studying abroad...",
    "application.submitButton": "Submit Application",
    "application.successTitle": "Application Submitted Successfully!",
    "application.successMessage":
      "Thank you for your application. Our team will review your information and contact you shortly to discuss the next steps in the scholarship process.",
    "application.backToHome": "Back to Home",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.northCyprus": "شمال قبرص",
    "nav.china": "الصين",
    "nav.comingSoon": "قريباً",
    "nav.contact": "اتصل بنا",

    // Home Page
    "home.scholarshipTitle": "فرص منح دراسية حصرية",
    "home.scholarshipDesc":
      "نقدم منح دراسية تتراوح من 50٪ إلى 100٪ للطلاب المؤهلين. اتخذ الخطوة الأولى نحو رحلتك التعليمية الدولية اليوم!",
    "home.applyScholarship": "تقدم للحصول على منحة دراسية",
    "home.northCyprus": "شمال قبرص",
    "home.northCyprusDesc": "استكشف الجامعات المرموقة في جنة البحر المتوسط",
    "home.china": "الصين",
    "home.chinaDesc": "اكتشف التعليم العالمي في قلب آسيا",
    "home.comingSoon": "قريباً",
    "home.comingSoonDesc": "سيتم إضافة وجهات مثيرة أخرى قريباً",
    "home.explore": "استكشف",
    "home.aboutTitle": "عن Pulse OF Knowledge",
    "home.aboutDesc":
      "نحن شركة استشارات تعليمية رائدة مكرسة لتحويل حياة الطلاب من خلال فرص تعليمية دولية استثنائية. بفضل خبرتنا التي لا مثيل لها ونهجنا الشخصي، ساعدنا آلاف الطلاب على تحقيق أحلامهم الأكاديمية في الخارج.",
    "home.scholarshipOpportunities": "فرص منح دراسية حصرية",
    "home.scholarshipOpportunitiesDesc":
      "ما يميزنا هو التزامنا بجعل التعليم الجيد متاحًا لجميع الطلاب المستحقين. من خلال شراكاتنا القوية مع الجامعات المرموقة، نقدم منحًا دراسية حصرية تتراوح من 50٪ إلى 100٪ من الرسوم الدراسية للمتقدمين المؤهلين.",
    "home.scholarshipTeam":
      "يعمل فريق المنح الدراسية المتخصص لدينا بلا كلل لمطابقة الطلاب مع أفضل حزم المساعدات المالية بناءً على إنجازاتهم الأكاديمية وأنشطتهم اللامنهجية واحتياجاتهم المالية.",
    "home.scholarshipSuccess":
      "في العام الماضي وحده، حصلنا على أكثر من 2 مليون دولار في المنح الدراسية لطلابنا، مما جعل أحلامهم في التعليم الدولي حقيقة واقعة.",
    "home.expertConsultants": "مستشارون خبراء",
    "home.expertConsultantsDesc":
      "يتكون فريقنا من محترفين تعليميين ذوي خبرة ومعرفة عميقة بالجامعات الدولية وعمليات القبول.",
    "home.comprehensiveServices": "خدمات شاملة",
    "home.comprehensiveServicesDesc":
      "من اختيار الجامعة إلى معالجة التأشيرة وترتيبات الإقامة والتوجيه قبل المغادرة - نحن نتعامل مع كل شيء.",
    "home.provenSuccess": "نجاح مثبت",
    "home.provenSuccessDesc":
      "مع معدل نجاح تأشيرة 95٪ وآلاف الطلاب الراضين الذين يدرسون في جميع أنحاء العالم، سجلنا الحافل يتحدث عن نفسه.",
    "home.learnMore": "تعرف على المزيد عنا",
    "home.gatewayTitle": "بوابتك للتعليم الدولي",
    "home.gatewayDesc":
      "في Pulse OF Knowledge، نرشد الطلاب خلال كل خطوة من رحلة دراستهم في الخارج، مما يساعدهم على اتخاذ قرارات مستنيرة لمستقبل أكثر إشراقًا.",
    "home.personalizedGuidance": "توجيه شخصي",
    "home.personalizedGuidanceDesc":
      "يقدم مستشارونا الخبراء نصائح مخصصة بناءً على خلفيتك الأكاديمية وأهدافك المهنية وتفضيلاتك الشخصية.",
    "home.comprehensiveSupport": "دعم شامل",
    "home.comprehensiveSupportDesc": "من اختيار الجامعة إلى طلب التأشيرة وترتيبات الإقامة والتوجيه قبل المغادرة.",
    "home.trustedPartnerships": "شراكات موثوقة",
    "home.trustedPartnershipsDesc":
      "نحن نتعاون مع جامعات ذات سمعة طيبة في جميع أنحاء العالم لضمان حصولك على تعليم جيد ومؤهلات قيمة.",

    // Video Guide Section
    "video.title": "دليل الطالب المغربي",
    "video.description": "شاهد دليلنا الشامل للطلاب المغاربة الراغبين في الدراسة في الخارج في شمال قبرص والصين.",
    "video.studentGuide": "دليل شامل للطلاب المغاربة",
    "video.guideDescription":
      "تعرف على عملية التقديم، المنح الدراسية، متطلبات التأشيرة، والحياة في الخارج للطلاب المغاربة.",
    "video.play": "تشغيل الفيديو",
    "video.pause": "إيقاف الفيديو",
    "video.contactUs": "اتصل بنا",
    "video.browserNotSupported": "متصفحك لا يدعم عنصر الفيديو.",
    "video.northCyprusTitle": "الدراسة في شمال قبرص",
    "video.northCyprusDesc":
      "اكتشف تعليمًا عالي الجودة وبأسعار معقولة في البحر المتوسط مع شهادات معترف بها دوليًا وبرامج تدرس باللغة الإنجليزية.",
    "video.chinaTitle": "الدراسة في الصين",
    "video.chinaDesc": "استكشف جامعات عالمية المستوى في الصين مع فرص منح دراسية ممتازة وتجربة ثقافية غنية.",
    "video.scholarshipsTitle": "منح دراسية حصرية",
    "video.scholarshipsDesc":
      "تعرف على كيف يمكننا مساعدتك في الحصول على منح دراسية تتراوح من 50٪ إلى 100٪ في جامعاتنا الشريكة.",
    "video.getStarted": "ابدأ اليوم",

    // Footer
    "footer.freeConsultation": "سجل للحصول على استشارة مجانية",
    "footer.fullName": "الاسم الكامل",
    "footer.phoneNumber": "رقم الهاتف",
    "footer.submit": "إرسال",
    "footer.thankYou": "شكرا لك! سنتواصل معك قريبا.",
    "footer.scholarships": "نقدم منح دراسية من 50٪ إلى 100٪ للطلاب المؤهلين",
    "footer.applyNow": "قدم الآن",
    "footer.quickLinks": "روابط سريعة",
    "footer.contact": "اتصل بنا",
    "footer.copyright": "© 2025 Pulse OF Knowledge. جميع الحقوق محفوظة.",
    "footer.privacyPolicy": "سياسة الخصوصية",
    "footer.termsOfService": "شروط الخدمة",
    "studentGuide.title": "دليل الطالب المغربي",
    "studentGuide.description":
      "مصدرك الشامل للدراسة في الخارج في شمال قبرص والصين. تعرف على عملية التقديم، المنح الدراسية، متطلبات التأشيرة، والحياة في الخارج.",
    "studentGuide.contactUs": "اتصل بنا",
    "studentGuide.resourcesTitle": "موارد للطلاب المغاربة",
    "studentGuide.resourcesDescription":
      "لقد جمعنا موارد أساسية لمساعدة الطلاب المغاربة على التنقل في عملية الدراسة في الخارج بسهولة.",
    "studentGuide.applicationProcess": "عملية التقديم",
    "studentGuide.applicationProcessDesc":
      "دليل خطوة بخطوة للتقديم إلى الجامعات في شمال قبرص والصين، بما في ذلك المستندات المطلوبة والمواعيد النهائية.",
    "studentGuide.visaRequirements": "متطلبات التأشيرة",
    "studentGuide.visaRequirementsDesc": "معلومات مفصلة حول متطلبات تأشيرة الطالب، إجراءات التقديم، وأوقات المعالجة.",
    "studentGuide.scholarshipOpportunities": "فرص المنح الدراسية",
    "studentGuide.scholarshipOpportunitiesDesc":
      "استكشف خيارات المنح الدراسية المختلفة المتاحة للطلاب المغاربة، بما في ذلك منحنا الدراسية الحصرية بنسبة 50-100٪ من الرسوم الدراسية.",
    "studentGuide.lifeAbroad": "الحياة في الخارج",
    "studentGuide.lifeAbroadDesc":
      "معلومات عملية حول السكن، تكلفة المعيشة، التكيف الثقافي، وحياة الطلاب في شمال قبرص والصين.",
    "studentGuide.downloadGuide": "تحميل الدليل الكامل (PDF)",
    "studentGuide.faqTitle": "الأسئلة الشائعة",
    "studentGuide.faq1Question": "ما هي متطلبات اللغة للدراسة في شمال قبرص والصين؟",
    "studentGuide.faq1Answer":
      "تقدم معظم البرامج في شمال قبرص والصين برامج تدرس باللغة الإنجليزية. عادة، يُطلب درجة توفل 550 أو آيلتس 6.0. تقدم بعض الجامعات دورات تحضيرية للغة إذا لم تستوفِ هذه المتطلبات.",
    "studentGuide.faq2Question": "كم تكلف الدراسة في شمال قبرص والصين؟",
    "studentGuide.faq2Answer":
      "تختلف الرسوم الدراسية حسب الجامعة والبرنامج، ولكنها تتراوح عمومًا بين 3,000-8,000 دولار سنويًا. مع منحنا الدراسية، يمكنك تخفيض هذه التكاليف بنسبة 50-100٪. نفقات المعيشة حوالي 300-500 دولار شهريًا.",
    "studentGuide.faq3Question": "هل يمكنني العمل أثناء الدراسة في شمال قبرص أو الصين؟",
    "studentGuide.faq3Answer":
      "في شمال قبرص، يمكن للطلاب الدوليين العمل بدوام جزئي (حتى 20 ساعة في الأسبوع) بتصريح عمل. في الصين، يمكن للطلاب الدوليين العمل داخل الحرم الجامعي والمشاركة في التدريب العملي بموافقة من جامعتهم.",
    "studentGuide.faq4Question": "كم من الوقت تستغرق عملية التأشيرة للطلاب المغاربة؟",
    "studentGuide.faq4Answer":
      "تستغرق عملية تأشيرة الطالب عادة 2-4 أسابيع لشمال قبرص و3-6 أسابيع للصين. نقدم مساعدة شاملة في طلبات التأشيرة لضمان عملية سلسة.",
    "studentGuide.faq5Question": "هل توجد مجتمعات مغربية في شمال قبرص والصين؟",
    "studentGuide.faq5Answer":
      "نعم، هناك مجتمعات طلابية مغربية متنامية في كلا الوجهتين. تضم العديد من الجامعات جمعيات للطلاب المغاربة تساعد الطلاب الجدد على التكيف والتواصل مع أبناء وطنهم.",
    "studentGuide.getInTouch": "تواصل مع مستشارينا",
    "application.title": "نموذج طلب المنحة الدراسية",
    "application.description":
      "أكمل النموذج أدناه للتقدم بطلب للحصول على منحة دراسية. سيقوم فريقنا بمراجعة طلبك والاتصال بك قريبًا.",
    "application.countryLabel": "اختر البلد الذي ترغب في الدراسة فيه:",
    "application.northCyprus": "شمال قبرص",
    "application.china": "الصين",
    "application.fieldOfStudyLabel": "اختر مجال الدراسة المفضل لديك:",
    "application.selectField": "اختر مجال الدراسة",
    "application.baccalaureateYearLabel": "سنة حصولك على البكالوريا:",
    "application.selectYear": "اختر السنة",
    "application.fullNameLabel": "الاسم الكامل:",
    "application.phoneNumberLabel": "رقم الهاتف:",
    "application.messageLabel": "رسالتك:",
    "application.messagePlaceholder": "أخبرنا عن خلفيتك الأكاديمية وإنجازاتك وسبب اهتمامك بالدراسة في الخارج...",
    "application.submitButton": "تقديم الطلب",
    "application.successTitle": "تم تقديم الطلب بنجاح!",
    "application.successMessage":
      "شكرًا لك على تقديم طلبك. سيقوم فريقنا بمراجعة معلوماتك والاتصال بك قريبًا لمناقشة الخطوات التالية في عملية المنحة الدراسية.",
    "application.backToHome": "العودة إلى الصفحة الرئيسية",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.northCyprus": "Chypre du Nord",
    "nav.china": "Chine",
    "nav.comingSoon": "Bientôt Disponible",
    "nav.contact": "Contact",

    // Home Page
    "home.scholarshipTitle": "Opportunités de Bourses Exclusives",
    "home.scholarshipDesc":
      "Nous offrons des bourses allant de 50% à 100% pour les étudiants qualifiés. Faites le premier pas vers votre parcours éducatif international aujourd'hui!",
    "home.applyScholarship": "Demander une Bourse",
    "home.northCyprus": "Chypre du Nord",
    "home.northCyprusDesc": "Explorez des universités prestigieuses dans le paradis méditerranéen",
    "home.china": "Chine",
    "home.chinaDesc": "Découvrez une éducation de classe mondiale au cœur de l'Asie",
    "home.comingSoon": "Bientôt Disponible",
    "home.comingSoonDesc": "D'autres destinations passionnantes seront ajoutées prochainement",
    "home.explore": "Explorer",
    "home.aboutTitle": "À Propos de Pulse OF Knowledge",
    "home.aboutDesc":
      "Nous sommes le premier cabinet de conseil en éducation dédié à transformer la vie des étudiants grâce à des opportunités d'éducation internationale exceptionnelles. Grâce à notre expertise inégalée et à notre approche personnalisée, nous avons aidé des milliers d'étudiants à réaliser leurs rêves académiques à l'étranger.",
    "home.scholarshipOpportunities": "Opportunités de Bourses Exclusives",
    "home.scholarshipOpportunitiesDesc":
      "Ce qui nous distingue, c'est notre engagement à rendre une éducation de qualité accessible à tous les étudiants méritants. Grâce à nos solides partenariats avec des universités prestigieuses, nous offrons des bourses exclusives allant de 50% à 100% des frais de scolarité pour les candidats qualifiés.",
    "home.scholarshipTeam":
      "Notre équipe dédiée aux bourses travaille sans relâche pour faire correspondre les étudiants avec les meilleurs forfaits d'aide financière en fonction de leurs réalisations académiques, de leurs activités parascolaires et de leurs besoins financiers.",
    "home.scholarshipSuccess":
      "L'année dernière seulement, nous avons obtenu plus de 2 millions de dollars en bourses pour nos étudiants, faisant de leurs rêves d'éducation internationale une réalité.",
    "home.expertConsultants": "Consultants Experts",
    "home.expertConsultantsDesc":
      "Notre équipe est composée de professionnels de l'éducation expérimentés avec une connaissance approfondie des universités internationales et des processus d'admission.",
    "home.comprehensiveServices": "Services Complets",
    "home.comprehensiveServicesDesc":
      "De la sélection de l'université au traitement des visas, aux arrangements d'hébergement et à l'orientation avant le départ - nous nous occupons de tout.",
    "home.provenSuccess": "Succès Prouvé",
    "home.provenSuccessDesc":
      "Avec un taux de réussite de visa de 95% et des milliers d'étudiants satisfaits étudiant dans le monde entier, notre bilan parle de lui-même.",
    "home.learnMore": "En Savoir Plus Sur Nous",
    "home.gatewayTitle": "Votre Passerelle vers l'Éducation Internationale",
    "home.gatewayDesc":
      "Chez Pulse OF Knowledge, nous guidons les étudiants à chaque étape de leur parcours d'études à l'étranger, les aidant à prendre des décisions éclairées pour un avenir plus brillant.",
    "home.personalizedGuidance": "Orientation Personnalisée",
    "home.personalizedGuidanceDesc":
      "Nos conseillers experts fournissent des conseils sur mesure basés sur votre parcours académique, vos objectifs de carrière et vos préférences personnelles.",
    "home.comprehensiveSupport": "Soutien Complet",
    "home.comprehensiveSupportDesc":
      "De la sélection de l'université à la demande de visa, aux arrangements d'hébergement et à l'orientation avant le départ.",
    "home.trustedPartnerships": "Partenariats de Confiance",
    "home.trustedPartnershipsDesc":
      "Nous nous associons à des universités réputées dans le monde entier pour vous assurer de recevoir une éducation de qualité et des diplômes précieux.",

    // Video Guide Section
    "video.title": "Guide pour les Étudiants Marocains",
    "video.description":
      "Regardez notre guide complet pour les étudiants marocains souhaitant étudier à l'étranger à Chypre du Nord et en Chine.",
    "video.studentGuide": "Guide Complet pour les Étudiants Marocains",
    "video.guideDescription":
      "Découvrez le processus de candidature, les bourses, les exigences de visa et la vie à l'étranger pour les étudiants marocains.",
    "video.play": "Lire la Vidéo",
    "video.pause": "Mettre en Pause",
    "video.contactUs": "Contactez-nous",
    "video.browserNotSupported": "Votre navigateur ne prend pas en charge la balise vidéo.",
    "video.northCyprusTitle": "Étudier à Chypre du Nord",
    "video.northCyprusDesc":
      "Découvrez une éducation de qualité et abordable en Méditerranée avec des diplômes reconnus internationalement et des programmes enseignés en anglais.",
    "video.chinaTitle": "Étudier en Chine",
    "video.chinaDesc":
      "Explorez des universités de classe mondiale en Chine avec d'excellentes opportunités de bourses et une riche expérience culturelle.",
    "video.scholarshipsTitle": "Bourses Exclusives",
    "video.scholarshipsDesc":
      "Découvrez comment nous pouvons vous aider à obtenir des bourses allant de 50% à 100% dans nos universités partenaires.",
    "video.getStarted": "Commencez Aujourd'hui",

    // Footer
    "footer.freeConsultation": "Inscrivez-vous pour une Consultation Gratuite",
    "footer.fullName": "Nom Complet",
    "footer.phoneNumber": "Numéro de Téléphone",
    "footer.submit": "Soumettre",
    "footer.thankYou": "Merci! Nous vous contacterons bientôt.",
    "footer.scholarships": "Nous offrons des bourses de 50% à 100% pour les étudiants qualifiés",
    "footer.applyNow": "Postuler Maintenant",
    "footer.quickLinks": "Liens Rapides",
    "footer.contact": "Contactez-nous",
    "footer.copyright": "© 2025 Pulse OF Knowledge. Tous droits réservés.",
    "footer.privacyPolicy": "Politique de Confidentialité",
    "footer.termsOfService": "Conditions d'Utilisation",
    "studentGuide.title": "Guide pour les Étudiants Marocains",
    "studentGuide.description":
      "Votre ressource complète pour étudier à l'étranger à Chypre du Nord et en Chine. Découvrez le processus de candidature, les bourses, les exigences de visa et la vie à l'étranger.",
    "studentGuide.contactUs": "Contactez-nous",
    "studentGuide.resourcesTitle": "Ressources pour les Étudiants Marocains",
    "studentGuide.resourcesDescription":
      "Nous avons compilé des ressources essentielles pour aider les étudiants marocains à naviguer facilement dans le processus d'études à l'étranger.",
    "studentGuide.applicationProcess": "Processus de Candidature",
    "studentGuide.applicationProcessDesc":
      "Guide étape par étape pour postuler aux universités à Chypre du Nord et en Chine, y compris les documents requis et les délais.",
    "studentGuide.visaRequirements": "Exigences de Visa",
    "studentGuide.visaRequirementsDesc":
      "Informations détaillées sur les exigences de visa étudiant, les procédures de demande et les délais de traitement.",
    "studentGuide.scholarshipOpportunities": "Opportunités de Bourses",
    "studentGuide.scholarshipOpportunitiesDesc":
      "Explorez les différentes options de bourses disponibles pour les étudiants marocains, y compris nos bourses exclusives couvrant 50 à 100% des frais de scolarité.",
    "studentGuide.lifeAbroad": "Vie à l'Étranger",
    "studentGuide.lifeAbroadDesc":
      "Informations pratiques sur le logement, le coût de la vie, l'adaptation culturelle et la vie étudiante à Chypre du Nord et en Chine.",
    "studentGuide.downloadGuide": "Télécharger le Guide Complet (PDF)",
    "studentGuide.faqTitle": "Questions Fréquemment Posées",
    "studentGuide.faq1Question": "Quelles sont les exigences linguistiques pour étudier à Chypre du Nord et en Chine?",
    "studentGuide.faq1Answer":
      "La plupart des programmes à Chypre du Nord et en Chine proposent des cours en anglais. Généralement, un score TOEFL de 550 ou IELTS de 6.0 est requis. Certaines universités offrent des cours de préparation linguistique si vous ne répondez pas à ces exigences.",
    "studentGuide.faq2Question": "Combien coûte l'étude à Chypre du Nord et en Chine?",
    "studentGuide.faq2Answer":
      "Les frais de scolarité varient selon l'université et le programme, mais se situent généralement entre 3 000 et 8 000 dollars par an. Avec nos bourses, vous pouvez réduire ces coûts de 50 à 100%. Les frais de subsistance sont d'environ 300 à 500 dollars par mois.",
    "studentGuide.faq3Question": "Puis-je travailler pendant mes études à Chypre du Nord ou en Chine?",
    "studentGuide.faq3Answer":
      "À Chypre du Nord, les étudiants internationaux peuvent travailler à temps partiel (jusqu'à 20 heures par semaine) avec un permis de travail. En Chine, les étudiants internationaux peuvent travailler sur le campus et participer à des stages avec l'approbation de leur université.",
    "studentGuide.faq4Question": "Combien de temps dure le processus de visa pour les étudiants marocains?",
    "studentGuide.faq4Answer":
      "Le processus de visa étudiant prend généralement 2 à 4 semaines pour Chypre du Nord et 3 à 6 semaines pour la Chine. Nous fournissons une assistance complète pour les demandes de visa afin d'assurer un processus fluide.",
    "studentGuide.faq5Question": "Y a-t-il des communautés marocaines à Chypre du Nord et en Chine?",
    "studentGuide.faq5Answer":
      "Oui, il existe des communautés croissantes d'étudiants marocains dans les deux destinations. De nombreuses universités ont des associations d'étudiants marocains qui aident les nouveaux étudiants à s'adapter et à se connecter avec leurs compatriotes.",
    "studentGuide.getInTouch": "Contactez Nos Conseillers",
    "application.title": "Formulaire de Demande de Bourse",
    "application.description":
      "Complétez le formulaire ci-dessous pour demander une bourse. Notre équipe examinera votre candidature et vous contactera prochainement.",
    "application.countryLabel": "Sélectionnez le pays où vous souhaitez étudier :",
    "application.northCyprus": "Chypre du Nord",
    "application.china": "Chine",
    "application.fieldOfStudyLabel": "Sélectionnez votre domaine d'études préféré :",
    "application.selectField": "Sélectionnez un domaine d'études",
    "application.baccalaureateYearLabel": "Année d'obtention de votre Baccalauréat :",
    "application.selectYear": "Sélectionnez l'année",
    "application.fullNameLabel": "Nom Complet :",
    "application.phoneNumberLabel": "Numéro de Téléphone :",
    "application.messageLabel": "Votre Message :",
    "application.messagePlaceholder":
      "Parlez-nous de votre parcours académique, vos réalisations et pourquoi vous êtes intéressé(e) par des études à l'étranger...",
    "application.submitButton": "Soumettre la Demande",
    "application.successTitle": "Demande Soumise avec Succès !",
    "application.successMessage":
      "Merci pour votre candidature. Notre équipe examinera vos informations et vous contactera prochainement pour discuter des prochaines étapes du processus de bourse.",
    "application.backToHome": "Retour à l'Accueil",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
  dir: "ltr",
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language
    if (savedLanguage && ["en", "ar", "fr"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    } else {
      // Try to detect country by timezone
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const isMoroccoTimezone = timezone === "Africa/Casablanca"

      // If in Morocco, default to Arabic
      if (isMoroccoTimezone) {
        setLanguageState("ar")
      }
    }

    // Set document direction based on language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("preferredLanguage", lang)

    // Set document direction based on language
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    const langTranslations = translations[language] || translations.en
    return langTranslations[key as keyof typeof langTranslations] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>{children}</LanguageContext.Provider>
}
