export interface CourseData {
  slug: string;
  title: string;
  titleUrdu: string;
  titleArabic: string;
  description: string;
  fullDescription: string;
  monthlyFee: number; // Exact approved price (original minus 100)
  originalFee: number;
  duration: string;
  level: string;
  image: string;
  highlights: string[];
  curriculum: {
    week: string;
    title: string;
    topics: string[];
  }[];
}

// CRITICAL: Master Centralized Course List & Final Approved Pricing
// Noorani Qaida: ₹1,399/month
// Quran Kareem Nazra: ₹1,399/month
// Hifz-e-Quran: ₹1,899/month
// Aalim Course: ₹1,399/month
export const APPROVED_COURSES: CourseData[] = [
  {
    slug: "noorani-qaida",
    title: "Noorani Qaida",
    titleUrdu: "نورانی قاعدہ",
    titleArabic: "القاعدة النورانية",
    description: "Learn the foundation of Quran reading through Arabic letters, pronunciation, letter joining, and essential reading rules.",
    fullDescription: "The Noorani Qaida course is the premier foundational program designed specifically for beginners, children, and adult learners embarking on their Quranic journey. Through structured lessons, students master the 29 Arabic alphabets with precise articulation (Makharij), learn consonant-vowel combinations (Harakat), grasp compound letters (Murakkabat), and understand Sukoon, Tanween, Tashdeed, and Madd. By the completion of this course, students gain absolute confidence in recognizing Arabic script and reading Quranic sentences fluently.",
    monthlyFee: 1399,
    originalFee: 1499,
    duration: "3 to 5 Months (Based on individual pace)",
    level: "Beginner / Foundation",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Arabic alphabet recognition & precise Makharij",
      "Correct Arabic pronunciation from vocal cords",
      "Letter joining rules & Murakkabat formations",
      "Basic reading rules & Harakat (Fatha, Kasra, Damma)",
      "Introduction to fundamental Tajweed principles",
      "Gradual preparation for Quran Kareem recitation",
      "Interactive digital worksheets & personalized attention",
    ],
    curriculum: [
      { week: "Module 1", title: "Single Arabic Letters (Mufradat)", topics: ["29 Arabic Alphabets", "Throat, Tongue, and Lip Points of Articulation", "Differentiating similar sounding letters"] },
      { week: "Module 2", title: "Compound Letters & Joining (Murakkabat)", topics: ["Letter shapes at beginning, middle, and end", "Connecting letters to form words", "Visual identification drills"] },
      { week: "Module 3", title: "Short Vowels & Movements (Harakat)", topics: ["Zabar (Fatha), Zair (Kasra), Pesh (Damma)", "Sound duration and avoiding elongation errors", "Practical reading drills"] },
      { week: "Module 4", title: "Tanween & Sukoon (Jazm)", topics: ["Double vowels (Do Zabar, Do Zair, Do Pesh)", "Sukoon mechanics and stopping rules", "Letters of Qalqalah (Bouncing sounds)"] },
      { week: "Module 5", title: "Tashdeed, Madd & Transition to Quran", topics: ["Shaddah / Tashdeed pronunciation", "Prolongation rules (Huroof Maddah)", "Reading sample verses from Surah Al-Fatiha and Juz Amma"] },
    ],
  },
  {
    slug: "quran-kareem-nazra",
    title: "Quran Kareem Nazra",
    titleUrdu: "قرآن کریم ناظرہ",
    titleArabic: "تلاوة القرآن الكريم نظراً",
    description: "Develop fluent Quran reading skills with careful attention to pronunciation, reading accuracy, and Tajweed.",
    fullDescription: "The Quran Kareem Nazra course is meticulously structured for students who have completed the Noorani Qaida or can identify Arabic letters and wish to recite the complete Holy Quran directly with beauty, confidence, and adherence to Tajweed rules. Under one-on-one guidance from certified Qaris, students read through the 30 Juz of the Holy Quran, continually refining their articulation, pauses (Waqf), assimilation (Idgham), concealment (Ikhfa), and melodious delivery.",
    monthlyFee: 1399,
    originalFee: 1499,
    duration: "10 to 18 Months (Comprehensive Complete Quran Recitation)",
    level: "Intermediate",
    // Authentic Holy Quran on wooden stand with Tasbih (No coffee!)
    image: "https://images.unsplash.com/photo-1587617425953-9075d28b8c46?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Continuous guided Quran reading practice",
      "Correct Arabic pronunciation & authentic dialect",
      "Tajweed fundamentals (Noon Sakin, Meem Sakin, Madd)",
      "Building reading fluency and breathing stamina",
      "Mastery of Quranic stop signs (Rumooz al-Awqaf)",
      "Regular revision and daily oral correction",
      "One-on-one live feedback by certified Qaris",
    ],
    curriculum: [
      { week: "Module 1", title: "Recitation Evaluation & Surah Al-Fatiha", topics: ["Baseline fluency assessment", "Surah Al-Fatiha in-depth pronunciation", "Rules of Istiaadha and Basmalah"] },
      { week: "Module 2", title: "Juz 30 (Amma) Focused Practice", topics: ["Short Surahs recitation", "Noon Sakinah and Tanween rules (Izhar, Idgham, Iqlab, Ikhfa)", "Daily recitation logs"] },
      { week: "Module 3", title: "Meem Sakin Rules & Thick/Thin Letters", topics: ["Ahkam al-Meem as-Sakinah", "Rules of Tafkheem and Tarqeeq (Lam and Ra)", "Application in Surah Al-Baqarah"] },
      { week: "Module 4", title: "Stopping Signs & Breath Control (Al-Waqf wal-Ibtida)", topics: ["Types of stops: Lazim, Mutlaq, Jaiz, Mamnoo", "Proper breathing techniques during prolonged verses", "Connecting stopping principles with sentence meaning"] },
      { week: "Module 5", title: "Full Quran Recitation Milestone", topics: ["Systematic progression through Juz 1 to 30", "Quarterly recitation assessments", "Completion certification and Sanad guidance"] },
    ],
  },
  {
    slug: "hifz-e-quran",
    title: "Hifz-e-Quran",
    titleUrdu: "حفظِ قرآن",
    titleArabic: "تحفيظ القرآن الكريم",
    description: "Begin a structured Quran memorization journey with guided lessons, consistent revision, and progress monitoring.",
    fullDescription: "The Hifz-e-Quran program provides an individualized, disciplined, and spiritually uplifting memorization framework for students aspiring to commit the Holy Quran to heart. Utilizing the proven classical tri-fold methodology — Sabaq (daily new memorization), Sabqi (recent memorization revision), and Manzil / Amokhta (long-term cumulative revision) — our experienced Huffaz provide rigorous daily assessment, ensuring retention is solid, pronunciation flawless, and progress sustainable.",
    monthlyFee: 1899,
    originalFee: 1999,
    duration: "2 to 4 Years (Personalized according to student capacity)",
    level: "All Levels (Beginner to Advanced Memorizers)",
    // Authentic Holy Quran book reading
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Complete Quran memorization with certified Huffaz",
      "Realistic daily memorization targets tailored to capacity",
      "Disciplined Sabaq, Sabqi, and Manzil revision system",
      "Daily oral assessment and retention benchmarking",
      "Pronunciation perfection and continuous Tajweed check",
      "Detailed digital progress reports for parents",
      "Flexible schedules accommodating school and work routines",
    ],
    curriculum: [
      { week: "Phase 1", title: "Foundation & Juz Amma (Juz 30)", topics: ["Memorization technique mastery (Visual & Auditory mapping)", "Memorizing from Surah An-Nas up to Surah An-Naba", "Establishing daily revision discipline"] },
      { week: "Phase 2", title: "Juz Tabarak (Juz 29) & Juz 28", topics: ["Increasing daily memorization output from 5 lines to a page", "Sabqi revision techniques for adjacent chapters", "Weekly oral tests without opening the Mushaf"] },
      { week: "Phase 3", title: "Major Surahs (Al-Kahf, Yaseen, Al-Mulk, Ar-Rahman)", topics: ["Strengthening retention of high-frequency Surahs", "Advanced Tajweed application during fluent recall", "Differentiating similar verses (Mutashabihat)"] },
      { week: "Phase 4", title: "Accelerated Systematic Memorization (Juz 1 to 27)", topics: ["Half-page to full-page daily new lessons", "Daily 1/2 Juz Manzil revision cycle", "Simulated Taraweeh recitation prep"] },
      { week: "Phase 5", title: "Daur (Comprehensive Final Review) & Assessment", topics: ["Continuous revision of 3 to 5 Juz daily", "Final oral examination before Senior Scholars", "Hifz Completion Sanad & Celebration"] },
    ],
  },
  {
    slug: "aalim-course",
    title: "Aalim Course",
    titleUrdu: "عالم کورس",
    titleArabic: "البرنامج العالِمي في الدراسات الإسلامية",
    description: "Explore structured Islamic studies and develop a deeper understanding of foundational Islamic subjects.",
    fullDescription: "The Aalim Course at Maulana Suhail Ahmad Online Quran Academy offers a structured, authentic curriculum in foundational Islamic scholarship designed for serious students of knowledge, working professionals, and university students seeking a scholarly grounding in their faith. Covering Classical Arabic, Quranic Tafseer, Hadith principles, Islamic Jurisprudence (Fiqh), Seerah, and Islamic Ethics, this course cultivates balanced understanding under qualified traditional scholars. (Note: The final syllabus, course duration, qualifications, and certification details must be confirmed by academy administration).",
    monthlyFee: 1399,
    originalFee: 1499,
    duration: "Multi-year structured levels (Flexible modular semesters)",
    level: "Comprehensive Islamic Studies",
    // Authentic Islamic manuscript study
    image: "https://images.unsplash.com/photo-1596125160970-6f02eeba00d3?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Classical Arabic language fundamentals (Nahw & Sarf)",
      "Quranic Tafseer and sciences of revelation (Uloom al-Quran)",
      "Hadith study and prophetic traditions (Usool al-Hadith)",
      "Foundational Islamic jurisprudence (Fiqh & Usool al-Fiqh)",
      "Prophetic biography (Seerah an-Nabawiyyah) & Islamic history",
      "Islamic ethics, spirituality (Tazkiyah) and contemporary issues",
      "Direct mentorship from respected scholars and educators",
    ],
    curriculum: [
      { week: "Year 1", title: "Arabic Grammar & Foundational Studies", topics: ["Arabic Morphology (Ilm as-Sarf fundamentals)", "Arabic Syntax (Ilm an-Nahw introductory principles)", "Basic Islamic Creed (Aqeedah Tahawiyyah overview)", "Fiqh of Purification and Prayer"] },
      { week: "Year 2", title: "Quranic Exegesis & Prophetic Traditions", topics: ["Selected chapters of Quranic Tafseer (Juz Amma & Surah Yusuf)", "Forty Hadith of Imam An-Nawawi with commentary", "Fiqh of Zakat, Fasting, and Business Transactions", "Seerah of the Messenger of Allah (PBUH)"] },
      { week: "Year 3", title: "Advanced Legal & Hadith Studies", topics: ["Principles of Islamic Jurisprudence (Usool al-Fiqh)", "Riyadh as-Saliheen in-depth text reading", "Islamic History (The Rightly Guided Caliphs and Umayyad Era)", "Contemporary Fiqh issues & Muslim living in modern society"] },
      { week: "Year 4", title: "Scholarly Specialization & Research", topics: ["Detailed study of Mishkat al-Masabih selections", "Tafseer Jalalayn analytical reading", "Ethics, Da’wah, and Community Leadership skills", "Final Research Project & Oral Defense"] },
    ],
  },
];

export async function getCoursesFromDb() {
  try {
    const { prisma } = await import("@/lib/prisma");
    const dbCourses = await prisma.course.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
    if (dbCourses.length > 0) {
      return dbCourses.map((c) => ({
        slug: c.slug,
        title: c.title,
        titleUrdu: c.titleUrdu || "",
        titleArabic: c.titleArabic || "",
        description: c.description,
        fullDescription: c.fullDescription,
        monthlyFee: c.monthlyFee,
        originalFee: c.originalFee || c.monthlyFee + 100,
        duration: c.duration,
        level: c.level,
        image: c.image,
        highlights: JSON.parse(c.highlights || "[]"),
        curriculum: JSON.parse(c.curriculum || "[]"),
      }));
    }
  } catch (error) {
    console.warn("Falling back to static courses list:", error);
  }
  return APPROVED_COURSES;
}

export function getCourseBySlug(slug: string): CourseData | undefined {
  return APPROVED_COURSES.find((c) => c.slug === slug);
}
