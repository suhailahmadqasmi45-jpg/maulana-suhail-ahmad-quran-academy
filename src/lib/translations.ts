export type LanguageCode = "en" | "ur" | "ar" | "hi";

export interface TranslationStrings {
  academyName: string;
  tagline: string;
  nav: {
    home: string;
    about: string;
    courses: string;
    pricing: string;
    teachers: string;
    howItWorks: string;
    testimonials: string;
    faq: string;
    blog: string;
    contact: string;
    login: string;
    enrollNow: string;
    freeTrial: string;
    dashboard: string;
    adminPanel: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    description: string;
    exploreCourses: string;
    applyAdmission: string;
    bookTrial: string;
    guarantee: string;
  };
  coursesSection: {
    title: string;
    subtitle: string;
    viewDetails: string;
    enrollNow: string;
    perMonth: string;
  };
  features: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    description: string;
    btn: string;
  };
}

export const translations: Record<LanguageCode, TranslationStrings> = {
  en: {
    academyName: "Suhail Online Quran Academy",
    tagline: "Learn Quran from Home, From Anywhere in the World",
    nav: {
      home: "Home",
      about: "About Us",
      courses: "Courses",
      pricing: "Pricing",
      teachers: "Our Teachers",
      howItWorks: "How It Works",
      testimonials: "Reviews",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contact Us",
      login: "Student Login",
      enrollNow: "Apply for Admission",
      freeTrial: "Book Free Trial",
      dashboard: "Student Portal",
      adminPanel: "Admin Panel",
    },
    hero: {
      badge: "Trusted Global Islamic Education",
      headline: "Learn Quran from Home, From Anywhere in the World",
      subheadline: "Suhail Online Quran Academy",
      description:
        "Begin your journey of Quran learning with structured online courses designed for children, beginners, and adults. Learn Quran reading, memorization, and Islamic knowledge from the comfort of your home.",
      exploreCourses: "Explore Our Courses",
      applyAdmission: "Apply for Admission",
      bookTrial: "Book Free Trial Class",
      guarantee: "1-on-1 Certified Teachers • Flexible Timings • Male & Female Instructors",
    },
    coursesSection: {
      title: "Our Structured Quran Courses",
      subtitle: "Four comprehensive learning paths designed for beginners, reciters, memorizers, and scholars.",
      viewDetails: "Course Details",
      enrollNow: "Enroll Now",
      perMonth: "/ month",
    },
    features: {
      title: "Why Choose Our Quran Academy?",
      subtitle: "Dedicated to authentic Tajweed, gentle pedagogy, and academic excellence worldwide.",
    },
    cta: {
      title: "Begin Your Quran Journey Today",
      description: "Join hundreds of satisfied students and parents worldwide. Apply for online admission in minutes.",
      btn: "Apply for Admission Now",
    },
  },
  ur: {
    academyName: "مولانا سہیل احمد آن لائن قرآن اکیڈمی",
    tagline: "گھر بیٹھے قرآن سیکھیں، دنیا کے کسی بھی کونے سے",
    nav: {
      home: "صفحہ اول",
      about: "ہمارے بارے میں",
      courses: "کورسز",
      pricing: "فیس شیڈول",
      teachers: "ہمارے اساتذہ",
      howItWorks: "کلاس کا طریقہ کار",
      testimonials: "آراء و تاثرات",
      faq: "عام سوالات",
      blog: "مضامین",
      contact: "رابطہ کریں",
      login: "لاگ ان",
      enrollNow: "آن لائن داخلہ",
      freeTrial: "مفت ٹرائل کلاس",
      dashboard: "طلبہ پورٹل",
      adminPanel: "ایڈمن پینل",
    },
    hero: {
      badge: "معیاری عالمی اسلامی تعلیم",
      headline: "گھر بیٹھے قرآن سیکھیں، دنیا کے کسی بھی کونے سے",
      subheadline: "مولانا سہیل احمد آن لائن قرآن اکیڈمی",
      description:
        "بچوں، نوآموزوں اور بڑوں کے لیے مرتب کردہ آن لائن کورسز کے ذریعے قرآن سیکھنے کا مبارک سفر شروع کریں۔ گھر کی آسائش میں تجوید، حفظ اور اسلامی علوم حاصل کریں۔",
      exploreCourses: "ہمارے کورسز دیکھیں",
      applyAdmission: "آن لائن داخلہ لیں",
      bookTrial: "مفت آزمائشی کلاس بک کریں",
      guarantee: "انفرادی کلاسز • لچکدار اوقات • مرد و خواتین اساتذہ",
    },
    coursesSection: {
      title: "ہمارے منتخب قرآن کورسز",
      subtitle: "تجوید، تلاوت، حفظ اور اسلامی علوم پر مشتمل مستند تعلیمی کورسز",
      viewDetails: "تفصیلات دیکھیں",
      enrollNow: "ابھی داخلہ لیں",
      perMonth: "/ ماہانہ",
    },
    features: {
      title: "ہماری اکیڈمی کا انتخاب کیوں کریں؟",
      subtitle: "مستند تجوید، نرم خو اور تجربہ کار اساتذہ اور منظم تعلیمی نظام۔",
    },
    cta: {
      title: "آج ہی اپنا قرآنی سفر شروع کریں",
      description: "دنیا بھر کے سینکڑوں مطمئن طلبہ اور والدین کا حصہ بنیں۔",
      btn: "داخلہ فارم پر کریں",
    },
  },
  ar: {
    academyName: "أكاديمية مولانا سهيل أحمد لتعليم القرآن الكريم عن بعد",
    tagline: "تعلّم القرآن الكريم وأنت في منزلك، من أي مكان في العالم",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      courses: "الدورات",
      pricing: "الرسوم",
      teachers: "المعلمون",
      howItWorks: "آلية الدراسة",
      testimonials: "آراء الطلاب",
      faq: "الأسئلة الشائعة",
      blog: "المدونة",
      contact: "اتصل بنا",
      login: "تسجيل الدخول",
      enrollNow: "طلب الالتحاق",
      freeTrial: "حجز حصة تجريبية",
      dashboard: "بوابة الطالب",
      adminPanel: "لوحة التحكم",
    },
    hero: {
      badge: "تعليم إسلامي عالمي متميز",
      headline: "تعلّم القرآن الكريم وأنت في منزلك، من أي مكان في العالم",
      subheadline: "أكاديمية مولانا سهيل أحمد لتعليم القرآن الكريم",
      description:
        "ابدأ رحلتك المباركة في تعلّم كتاب الله مع دورات منهجية مخصصة للأطفال والمبتدئين والكبار، مع نخبة من خيرة الأساتذة والمعلمين المعتمدين.",
      exploreCourses: "استكشف دوراتنا",
      applyAdmission: "قدّم طلب التسجيل",
      bookTrial: "احجز درساً تجريبياً مجانياً",
      guarantee: "دروس فردية مباشرة • مواعيد مرنة • معلّمون ومعلمات مجازون",
    },
    coursesSection: {
      title: "دوراتنا القرآنية المعتمدة",
      subtitle: "برامج منهجية في التلاوة والتجويد والحفظ والعلوم الشرعية.",
      viewDetails: "تفاصيل الدورة",
      enrollNow: "سجّل الآن",
      perMonth: "/ شهرياً",
    },
    features: {
      title: "لماذا تختار أكاديميتنا؟",
      subtitle: "منهجية أصيلة، عناية فائقة بالنطق السليم ومخارج الحروف والتجويد.",
    },
    cta: {
      title: "ابدأ رحلتك القرآنية المباركة اليوم",
      description: "انضم إلى مئات الطلاب حول العالم وسجل في دقائق معدودة.",
      btn: "سجّل طلب الالتحاق الآن",
    },
  },
  hi: {
    academyName: "मौलाना सुहैल अहमद ऑनलाइन क़ुरआन अकादमी",
    tagline: "घर बैठे क़ुरआन सीखें, दुनिया के किसी भी कोने से",
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      courses: "कोर्स",
      pricing: "फीस संरचना",
      teachers: "शिक्षक",
      howItWorks: "कक्षा प्रक्रिया",
      testimonials: "समीक्षाएं",
      faq: "अक्सर पूछे जाने वाले सवाल",
      blog: "ब्लॉग",
      contact: "संपर्क करें",
      login: "लॉग इन",
      enrollNow: "एडमिशन लें",
      freeTrial: "मुफ़्त ट्रायल क्लास",
      dashboard: "छात्र पोर्टल",
      adminPanel: "एडमिन पैनल",
    },
    hero: {
      badge: "विश्वसनीय वैश्विक इस्लामी शिक्षा",
      headline: "घर बैठे क़ुरआन सीखें, दुनिया के किसी भी कोने से",
      subheadline: "मौलाना सुहैल अहमद ऑनलाइन क़ुरआन अकादमी",
      description:
        "बच्चों, शुरुआती और वयस्कों के लिए संरचित ऑनलाइन पाठ्यक्रमों के साथ क़ुरआन सीखने की यात्रा शुरू करें। घर बैठे शुद्ध उच्चारण और तजवीद के साथ सीखें।",
      exploreCourses: "हमारे कोर्स देखें",
      applyAdmission: "एडमिशन के लिए आवेदन करें",
      bookTrial: "मुफ़्त ट्रायल बुक करें",
      guarantee: "1-ऑन-1 व्यक्तिगत कक्षाएं • लचीला समय • योग्य शिक्षक",
    },
    coursesSection: {
      title: "हमारे प्रमुख क़ुरआन पाठ्यक्रम",
      subtitle: "शुरुआती से लेकर उन्नत स्तर तक के लिए चार प्रमाणित पाठ्यक्रम।",
      viewDetails: "कोर्स विवरण",
      enrollNow: "अभी एडमिशन लें",
      perMonth: "/ महीना",
    },
    features: {
      title: "हमारी अकादमी क्यों चुनें?",
      subtitle: "सटीक तजवीद, धैर्यवान शिक्षक और समय की पूर्ण सुविधा।",
    },
    cta: {
      title: "आज ही अपनी क़ुरआनी शिक्षा शुरू करें",
      description: "दुनिया भर के छात्रों के साथ जुड़ें और आसानी से एडमिशन प्राप्त करें।",
      btn: "अभी आवेदन करें",
    },
  },
};
