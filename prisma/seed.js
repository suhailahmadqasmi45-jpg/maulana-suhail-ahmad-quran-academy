const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database for Maulana Suhail Ahmad Online Quran Academy...');

  // 1. Settings
  const defaultSettings = [
    { key: 'academy_name', value: 'Maulana Suhail Ahmad Online Quran Academy', description: 'Official Academy Name' },
    { key: 'main_headline', value: 'Learn Quran from Home, From Anywhere in the World', description: 'Hero Headline' },
    { key: 'whatsapp_number', value: '+919876543210', description: 'Primary WhatsApp Contact Number' },
    { key: 'contact_email', value: 'info@maulanasuhailquranacademy.com', description: 'Official Inquiries Email' },
    { key: 'contact_phone', value: '+91 98765 43210', description: 'Telephone Support' },
    { key: 'address', value: 'Online Campus — Serving Students Worldwide (India, GCC, UK, USA, Canada)', description: 'Campus Location / Reach' },
  ];

  for (const s of defaultSettings) {
    await prisma.setting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: s,
    });
  }

  // 2. Users
  const adminPassword = await bcrypt.hash('admin123', 10);
  const studentPassword = await bcrypt.hash('student123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@maulanasuhailacademy.com' },
    update: {},
    create: {
      name: 'Academy Administration',
      email: 'admin@maulanasuhailacademy.com',
      passwordHash: adminPassword,
      role: 'ADMIN',
      phone: '+919876543210',
    },
  });

  const demoStudentUser = await prisma.user.upsert({
    where: { email: 'student@example.com' },
    update: {},
    create: {
      name: 'Zaid Al-Mansoor',
      email: 'student@example.com',
      passwordHash: studentPassword,
      role: 'STUDENT',
      phone: '+919876500001',
    },
  });

  const demoStudent = await prisma.student.upsert({
    where: { userId: demoStudentUser.id },
    update: {},
    create: {
      userId: demoStudentUser.id,
      parentName: 'Tariq Al-Mansoor',
      age: 12,
      country: 'India',
      city: 'Hyderabad',
      preferredLanguage: 'English',
      preferredTiming: 'Evening (06:00 PM - 07:00 PM IST)',
      status: 'ACTIVE',
    },
  });

  // 3. Approved Four Courses with EXACT PRICING
  const courses = [
    {
      slug: 'noorani-qaida',
      title: 'Noorani Qaida',
      titleUrdu: 'نورانی قاعدہ',
      titleArabic: 'القاعدة النورانية',
      description: 'Learn the foundation of Quran reading through Arabic letters, pronunciation, letter joining, and essential reading rules.',
      fullDescription: 'The Noorani Qaida course is the premier foundational program designed specifically for beginners, children, and adult learners embarking on their Quranic journey. Through structured lessons, students master the 29 Arabic alphabets with precise articulation (Makharij), learn consonant-vowel combinations (Harakat), grasp compound letters (Murakkabat), and understand Sukoon, Tanween, Tashdeed, and Madd. By the completion of this course, students gain absolute confidence in recognizing Arabic script and reading Quranic sentences fluently.',
      monthlyFee: 1399,
      originalFee: 1499,
      duration: '3 to 5 Months (Based on individual pace)',
      level: 'Beginner / Foundation',
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200',
      order: 1,
      isFeatured: true,
      highlights: JSON.stringify([
        'Arabic alphabet recognition & precise Makharij',
        'Correct Arabic pronunciation from vocal cords',
        'Letter joining rules & Murakkabat formations',
        'Basic reading rules & Harakat (Fatha, Kasra, Damma)',
        'Introduction to fundamental Tajweed principles',
        'Gradual preparation for Quran Kareem recitation',
        'Interactive digital worksheets & personalized attention',
      ]),
      curriculum: JSON.stringify([
        { week: 'Module 1', title: 'Single Arabic Letters (Mufradat)', topics: ['29 Arabic Alphabets', 'Throat, Tongue, and Lip Points of Articulation', 'Differentiating similar sounding letters'] },
        { week: 'Module 2', title: 'Compound Letters & Joining (Murakkabat)', topics: ['Letter shapes at beginning, middle, and end', 'Connecting letters to form words', 'Visual identification drills'] },
        { week: 'Module 3', title: 'Short Vowels & Movements (Harakat)', topics: ['Zabar (Fatha), Zair (Kasra), Pesh (Damma)', 'Sound duration and avoiding elongation errors', 'Practical reading drills'] },
        { week: 'Module 4', title: 'Tanween & Sukoon (Jazm)', topics: ['Double vowels (Do Zabar, Do Zair, Do Pesh)', 'Sukoon mechanics and stopping rules', 'Letters of Qalqalah (Bouncing sounds)'] },
        { week: 'Module 5', title: 'Tashdeed, Madd & Transition to Quran', topics: ['Shaddah / Tashdeed pronunciation', 'Prolongation rules (Huroof Maddah)', 'Reading sample verses from Surah Al-Fatiha and Juz Amma'] },
      ]),
    },
    {
      slug: 'quran-kareem-nazra',
      title: 'Quran Kareem Nazra',
      titleUrdu: 'قرآن کریم ناظرہ',
      titleArabic: 'تلاوة القرآن الكريم نظراً',
      description: 'Develop fluent Quran reading skills with careful attention to pronunciation, reading accuracy, and Tajweed.',
      fullDescription: 'The Quran Kareem Nazra course is meticulously structured for students who have completed the Noorani Qaida or can identify Arabic letters and wish to recite the complete Holy Quran directly with beauty, confidence, and adherence to Tajweed rules. Under one-on-one guidance from certified Qaris, students read through the 30 Juz of the Holy Quran, continually refining their articulation, pauses (Waqf), assimilation (Idgham), concealment (Ikhfa), and melodious delivery.',
      monthlyFee: 1399,
      originalFee: 1499,
      duration: '10 to 18 Months (Comprehensive Complete Quran Recitation)',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1587617425953-9075d28b8c46?auto=format&fit=crop&q=80&w=1200',
      order: 2,
      isFeatured: true,
      highlights: JSON.stringify([
        'Continuous guided Quran reading practice',
        'Correct Arabic pronunciation & authentic dialect',
        'Tajweed fundamentals (Noon Sakin, Meem Sakin, Madd)',
        'Building reading fluency and breathing stamina',
        'Mastery of Quranic stop signs (Rumooz al-Awqaf)',
        'Regular revision and daily oral correction',
        'One-on-one live feedback by certified Qaris',
      ]),
      curriculum: JSON.stringify([
        { week: 'Module 1', title: 'Recitation Evaluation & Surah Al-Fatiha', topics: ['Baseline fluency assessment', 'Surah Al-Fatiha in-depth pronunciation', 'Rules of Istiaadha and Basmalah'] },
        { week: 'Module 2', title: 'Juz 30 (Amma) Focused Practice', topics: ['Short Surahs recitation', 'Noon Sakinah and Tanween rules (Izhar, Idgham, Iqlab, Ikhfa)', 'Daily recitation logs'] },
        { week: 'Module 3', title: 'Meem Sakin Rules & Thick/Thin Letters', topics: ['Ahkam al-Meem as-Sakinah', 'Rules of Tafkheem and Tarqeeq (Lam and Ra)', 'Application in Surah Al-Baqarah'] },
        { week: 'Module 4', title: 'Stopping Signs & Breath Control (Al-Waqf wal-Ibtida)', topics: ['Types of stops: Lazim, Mutlaq, Jaiz, Mamnoo', 'Proper breathing techniques during prolonged verses', 'Connecting stopping principles with sentence meaning'] },
        { week: 'Module 5', title: 'Full Quran Recitation Milestone', topics: ['Systematic progression through Juz 1 to 30', 'Quarterly recitation assessments', 'Completion certification and Sanad guidance'] },
      ]),
    },
    {
      slug: 'hifz-e-quran',
      title: 'Hifz-e-Quran',
      titleUrdu: 'حفظِ قرآن',
      titleArabic: 'تحفيظ القرآن الكريم',
      description: 'Begin a structured Quran memorization journey with guided lessons, consistent revision, and progress monitoring.',
      fullDescription: 'The Hifz-e-Quran program provides an individualized, disciplined, and spiritually uplifting memorization framework for students aspiring to commit the Holy Quran to heart. Utilizing the proven classical tri-fold methodology — Sabaq (daily new memorization), Sabqi (recent memorization revision), and Manzil / Amokhta (long-term cumulative revision) — our experienced Huffaz provide rigorous daily assessment, ensuring retention is solid, pronunciation flawless, and progress sustainable.',
      monthlyFee: 1899,
      originalFee: 1999,
      duration: '2 to 4 Years (Personalized according to student capacity)',
      level: 'All Levels (Beginner to Advanced Memorizers)',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=1200',
      order: 3,
      isFeatured: true,
      highlights: JSON.stringify([
        'Complete Quran memorization with certified Huffaz',
        'Realistic daily memorization targets tailored to capacity',
        'Disciplined Sabaq, Sabqi, and Manzil revision system',
        'Daily oral assessment and retention benchmarking',
        'Pronunciation perfection and continuous Tajweed check',
        'Detailed digital progress reports for parents',
        'Flexible schedules accommodating school and work routines',
      ]),
      curriculum: JSON.stringify([
        { week: 'Phase 1', title: 'Foundation & Juz Amma (Juz 30)', topics: ['Memorization technique mastery (Visual & Auditory mapping)', 'Memorizing from Surah An-Nas up to Surah An-Naba', 'Establishing daily revision discipline'] },
        { week: 'Phase 2', title: 'Juz Tabarak (Juz 29) & Juz 28', topics: ['Increasing daily memorization output from 5 lines to a page', 'Sabqi revision techniques for adjacent chapters', 'Weekly oral tests without opening the Mushaf'] },
        { week: 'Phase 3', title: 'Major Surahs (Al-Kahf, Yaseen, Al-Mulk, Ar-Rahman)', topics: ['Strengthening retention of high-frequency Surahs', 'Advanced Tajweed application during fluent recall', 'Differentiating similar verses (Mutashabihat)'] },
        { week: 'Phase 4', title: 'Accelerated Systematic Memorization (Juz 1 to 27)', topics: ['Half-page to full-page daily new lessons', 'Daily 1/2 Juz Manzil revision cycle', 'Simulated Taraweeh recitation prep'] },
        { week: 'Phase 5', title: 'Daur (Comprehensive Final Review) & Assessment', topics: ['Continuous revision of 3 to 5 Juz daily', 'Final oral examination before Senior Scholars', 'Hifz Completion Sanad & Celebration'] },
      ]),
    },
    {
      slug: 'aalim-course',
      title: 'Aalim Course',
      titleUrdu: 'عالم کورس',
      titleArabic: 'البرنامج العالِمي في الدراسات الإسلامية',
      description: 'Explore structured Islamic studies and develop a deeper understanding of foundational Islamic subjects.',
      fullDescription: 'The Aalim Course at Maulana Suhail Ahmad Online Quran Academy offers a structured, authentic curriculum in foundational Islamic scholarship designed for serious students of knowledge, working professionals, and university students seeking a scholarly grounding in their faith. Covering Classical Arabic, Quranic Tafseer, Hadith principles, Islamic Jurisprudence (Fiqh), Seerah, and Islamic Ethics, this course cultivates balanced understanding under qualified traditional scholars. (Note: The final syllabus, course duration, qualifications, and certification details are confirmed by academy administration).',
      monthlyFee: 1399,
      originalFee: 1499,
      duration: 'Multi-year structured levels (Flexible modular semesters)',
      level: 'Comprehensive Islamic Studies',
      image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=1200',
      order: 4,
      isFeatured: true,
      highlights: JSON.stringify([
        'Classical Arabic language fundamentals (Nahw & Sarf)',
        'Quranic Tafseer and sciences of revelation (Uloom al-Quran)',
        'Hadith study and prophetic traditions (Usool al-Hadith)',
        'Foundational Islamic jurisprudence (Fiqh & Usool al-Fiqh)',
        'Prophetic biography (Seerah an-Nabawiyyah) & Islamic history',
        'Islamic ethics, spirituality (Tazkiyah) and contemporary issues',
        'Direct mentorship from respected scholars and educators',
      ]),
      curriculum: JSON.stringify([
        { week: 'Year 1', title: 'Arabic Grammar & Foundational Studies', topics: ['Arabic Morphology (Ilm as-Sarf fundamentals)', 'Arabic Syntax (Ilm an-Nahw introductory principles)', 'Basic Islamic Creed (Aqeedah Tahawiyyah overview)', 'Fiqh of Purification and Prayer'] },
        { week: 'Year 2', title: 'Quranic Exegesis & Prophetic Traditions', topics: ['Selected chapters of Quranic Tafseer (Juz Amma & Surah Yusuf)', 'Forty Hadith of Imam An-Nawawi with commentary', 'Fiqh of Zakat, Fasting, and Business Transactions', 'Seerah of the Messenger of Allah (PBUH)'] },
        { week: 'Year 3', title: 'Advanced Legal & Hadith Studies', topics: ['Principles of Islamic Jurisprudence (Usool al-Fiqh)', 'Riyadh as-Saliheen in-depth text reading', 'Islamic History (The Rightly Guided Caliphs and Umayyad Era)', 'Contemporary Fiqh issues & Muslim living in modern society'] },
        { week: 'Year 4', title: 'Scholarly Specialization & Research', topics: ['Detailed study of Mishkat al-Masabih selections', 'Tafseer Jalalayn analytical reading', 'Ethics, Da’wah, and Community Leadership skills', 'Final Research Project & Oral Defense'] },
      ]),
    },
  ];

  for (const c of courses) {
    await prisma.course.upsert({
      where: { slug: c.slug },
      update: {
        title: c.title,
        titleUrdu: c.titleUrdu,
        titleArabic: c.titleArabic,
        description: c.description,
        fullDescription: c.fullDescription,
        monthlyFee: c.monthlyFee,
        originalFee: c.originalFee,
        duration: c.duration,
        level: c.level,
        image: c.image,
        highlights: c.highlights,
        curriculum: c.curriculum,
        order: c.order,
      },
      create: c,
    });
  }

  // 4. Sample Admissions
  const sampleAdmissions = [
    {
      applicationRef: 'ADM-2026-8812',
      studentName: 'Hamza Farooq',
      parentName: 'Muhammad Farooq',
      age: 9,
      email: 'm.farooq@example.com',
      mobile: '+919876512345',
      whatsapp: '+919876512345',
      country: 'India',
      city: 'Mumbai',
      courseSlug: 'noorani-qaida',
      courseName: 'Noorani Qaida',
      preferredTiming: 'Evening (5:00 PM - 6:00 PM IST)',
      preferredLanguage: 'English / Urdu',
      experience: 'Can recognize a few Arabic letters, needs structured pronunciation training.',
      comments: 'Excited to begin lessons. Prefers weekend + weekday mix.',
      status: 'APPROVED',
      adminNotes: 'Assigned to Teacher Qari Abdul Rahman. Class scheduled for next Monday.',
    },
    {
      applicationRef: 'ADM-2026-9041',
      studentName: 'Aisha Siddiqui',
      parentName: 'Dr. Tariq Siddiqui',
      age: 14,
      email: 'tariq.siddiqui@example.com',
      mobile: '+919811223344',
      whatsapp: '+919811223344',
      country: 'India',
      city: 'Delhi',
      courseSlug: 'quran-kareem-nazra',
      courseName: 'Quran Kareem Nazra',
      preferredTiming: 'Morning (07:00 AM - 08:00 AM IST)',
      preferredLanguage: 'English',
      experience: 'Completed Noorani Qaida previously. Needs Tajweed and fluency coaching.',
      comments: 'Looking for a female teacher if possible.',
      status: 'PENDING',
    },
    {
      applicationRef: 'ADM-2026-9195',
      studentName: 'Bilal Khan',
      parentName: 'Imran Khan',
      age: 16,
      email: 'bilal.khan@example.com',
      mobile: '+447911123456',
      whatsapp: '+447911123456',
      country: 'United Kingdom',
      city: 'Birmingham',
      courseSlug: 'hifz-e-quran',
      courseName: 'Hifz-e-Quran',
      preferredTiming: 'UK Evening (05:30 PM GMT)',
      preferredLanguage: 'English',
      experience: 'Has memorized Juz 30 and Surah Al-Baqarah pages 1-20.',
      comments: 'Targeting full Hifz within 3 years inshaAllah.',
      status: 'ENROLLED',
      adminNotes: 'Passed diagnostic test with 92% Tajweed score.',
    },
  ];

  for (const adm of sampleAdmissions) {
    await prisma.admission.upsert({
      where: { applicationRef: adm.applicationRef },
      update: {},
      create: adm,
    });
  }

  // 5. Sample Free Trial Bookings
  const sampleTrials = [
    {
      reference: 'TRL-7701',
      name: 'Yusuf Patel',
      email: 'yusuf.patel@example.com',
      phone: '+919844001122',
      courseSlug: 'noorani-qaida',
      courseName: 'Noorani Qaida',
      country: 'India',
      preferredDate: '2026-11-25',
      preferredTime: '17:00',
      preferredLanguage: 'English',
      notes: 'Beginner student aged 7.',
      status: 'APPROVED',
      meetingLink: 'https://meet.google.com/quran-trial-demo',
      adminNotes: 'Assigned trial tutor. Google Meet link sent.',
    },
    {
      reference: 'TRL-7702',
      name: 'Maryam Fatima',
      email: 'maryam.fatima@example.com',
      phone: '+971501234567',
      courseSlug: 'quran-kareem-nazra',
      courseName: 'Quran Kareem Nazra',
      country: 'United Arab Emirates',
      preferredDate: '2026-11-26',
      preferredTime: '19:30',
      preferredLanguage: 'English / Urdu',
      notes: 'Interested in daily 30-min Nazra class.',
      status: 'PENDING',
    },
  ];

  for (const tr of sampleTrials) {
    await prisma.trialBooking.upsert({
      where: { reference: tr.reference },
      update: {},
      create: tr,
    });
  }

  // 6. Demo Student Enrollment & Schedule & Progress
  const nooraniCourse = await prisma.course.findUnique({ where: { slug: 'noorani-qaida' } });
  if (nooraniCourse) {
    const enrollment = await prisma.enrollment.create({
      data: {
        studentId: demoStudent.id,
        courseId: nooraniCourse.id,
        status: 'ACTIVE',
        nextDueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });

    // Schedule
    await prisma.classSchedule.createMany({
      data: [
        {
          enrollmentId: enrollment.id,
          studentName: demoStudentUser.name,
          courseName: 'Noorani Qaida',
          teacherName: 'Qari Muhammad Abdullah',
          dayOfWeek: 'Monday',
          startTime: '18:00',
          endTime: '18:45',
          meetingLink: 'https://meet.google.com/quran-live-demo',
          status: 'UPCOMING',
        },
        {
          enrollmentId: enrollment.id,
          studentName: demoStudentUser.name,
          courseName: 'Noorani Qaida',
          teacherName: 'Qari Muhammad Abdullah',
          dayOfWeek: 'Wednesday',
          startTime: '18:00',
          endTime: '18:45',
          meetingLink: 'https://meet.google.com/quran-live-demo',
          status: 'UPCOMING',
        },
        {
          enrollmentId: enrollment.id,
          studentName: demoStudentUser.name,
          courseName: 'Noorani Qaida',
          teacherName: 'Qari Muhammad Abdullah',
          dayOfWeek: 'Friday',
          startTime: '18:00',
          endTime: '18:45',
          meetingLink: 'https://meet.google.com/quran-live-demo',
          status: 'UPCOMING',
        },
      ],
    });

    // Progress Records
    await prisma.progressRecord.createMany({
      data: [
        {
          studentId: demoStudent.id,
          courseName: 'Noorani Qaida',
          surahOrLesson: 'Lesson 5: Tanween & Nunation',
          ayaStart: 1,
          ayaEnd: 15,
          tajweedScore: 92,
          memorizationScore: 88,
          teacherNotes: 'MashaAllah, demonstrated sharp distinction between Zabar and Tanween sounds. Keep practicing the letter Qaf.',
          date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          studentId: demoStudent.id,
          courseName: 'Noorani Qaida',
          surahOrLesson: 'Lesson 4: Harakat (Short Vowels)',
          ayaStart: 1,
          ayaEnd: 24,
          tajweedScore: 95,
          memorizationScore: 90,
          teacherNotes: 'Excellent fluency. Very clear vocalization without lengthening short vowels.',
          date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        },
      ],
    });

    // Payments
    await prisma.paymentRecord.create({
      data: {
        transactionId: 'TXN-2026-9921',
        studentName: demoStudentUser.name,
        studentEmail: demoStudentUser.email,
        courseName: 'Noorani Qaida',
        amount: 1399,
        currency: 'INR',
        status: 'PAID',
        method: 'UPI / Online Transfer',
        paymentDate: new Date(),
        receiptUrl: '#',
      },
    });
  }

  // 7. Educational Blog Posts
  const blogPosts = [
    {
      slug: 'how-to-learn-quran-online-beginners-guide',
      title: 'How to Learn Quran Online: A Comprehensive Guide for Beginners & Families',
      excerpt: 'Discover practical methods, technical setups, and spiritual habits to maximize your Quranic education from the comfort of your home.',
      category: 'Quran Learning',
      author: 'Academy Academic Council',
      readTime: '6 min read',
      published: true,
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200',
      content: `### Learning the Holy Quran from the Comfort of Your Home

In today's digital era, geographic distance is no longer a barrier to receiving authentic, traditional Islamic education. Students across the globe can now connect directly with qualified, patient, and certified Quran tutors from the sanctity of their homes.

#### 1. Why Online Quran Learning is Thriving
- **Individualized One-on-One Attention:** Unlike crowded physical classrooms, online sessions ensure that 100% of the tutor's focus is on listening, detecting slight phonetic variations, and providing immediate oral feedback.
- **Flexible Scheduling for Global Lifestyles:** Whether you reside in India, the Gulf countries, the UK, Europe, or the Americas, class schedules can be coordinated to suit your school, office, or family timings.
- **Safe & Familiar Environment:** Especially for young children and female learners, learning from home provides maximum comfort, safety, and family involvement.

#### 2. Key Steps for Setting Up Your Learning Space
1. **Dedicated Peaceful Area:** Choose a quiet room free from distractions, television, and heavy background noise.
2. **Stable Internet & Clear Audio:** A modest internet connection coupled with a clear headset or earphones allows the teacher and student to hear delicate Arabic letters like ح, خ, ص, and ض.
3. **Respectful Posture with the Mushaf:** Place the Holy Quran or Qaida on an elevated wooden stand (Rihal) or desk, maintaining physical and spiritual adab.

#### 3. Cultivating Daily Consistency
The Prophet Muhammad (peace be upon him) said: *"The deeds most loved by Allah are those done regularly, even if they are small."* (Sahih al-Bukhari). Spending 30 minutes daily with a dedicated teacher produces far greater retention than irregular multi-hour sessions.`,
    },
    {
      slug: 'what-is-noorani-qaida-foundation-of-quran-reading',
      title: 'What Is Noorani Qaida? The Essential Foundation of Quranic Recitation',
      excerpt: 'Understand why the classical Noorani Qaida remains the most trusted phonetic method for children and non-Arabic speaking adults worldwide.',
      category: 'Tajweed & Qaida',
      author: 'Maulana Suhail Ahmad',
      readTime: '5 min read',
      published: true,
      image: 'https://images.unsplash.com/photo-1587617425953-9075d28b8c46?auto=format&fit=crop&q=80&w=1200',
      content: `### The Timeless Methodology of Noorani Qaida

Compiled by the venerable scholar Sheikh Noor Muhammad Haqqani, the Noorani Qaida has served as the universal primer for Quranic literacy for generations across the Muslim world.

#### The Systematic Progression of Noorani Qaida
1. **Mufradat (Single Letters):** Mastering the 29 consonants individually, emphasizing their specific point of articulation (Makhraj).
2. **Murakkabat (Compound Forms):** Learning how Arabic letters transform their visual shapes when appearing at the beginning, middle, or end of a word.
3. **Harakat (Short Vowels):** Pronouncing Zabar, Zair, and Pesh swiftly without dragging or tilting the vowel.
4. **Tanween & Sukoon:** Understanding nasalization (Ghunnah) and resting consonants with their associated phonetic bounces (Qalqalah).
5. **Rules of Madd & Tashdeed:** Transitioning from simple syllables to complex multi-letter words identical to those found in the Holy Quran.

#### Why Beginners Should Never Skip Noorani Qaida
Attempting to read the Holy Quran without mastering phonetic foundations frequently leads to ingrained pronunciation errors that become exceedingly difficult to unlearn later. A thorough study of Noorani Qaida guarantees that when a student opens the Mushaf, their tongue glides smoothly across the sacred text with confidence and correct Tajweed.`,
    },
    {
      slug: 'effective-quran-memorization-hifz-tips',
      title: 'Proven Quran Memorization (Hifz) Strategies: Tips from Experienced Huffaz',
      excerpt: 'Explore the traditional tri-fold Hifz system (Sabaq, Sabqi, and Manzil) and discover psychological techniques to maintain rock-solid retention.',
      category: 'Hifz Tips',
      author: 'Academy Hifz Department',
      readTime: '7 min read',
      published: true,
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=1200',
      content: `### The Noble Journey of Hifz-e-Quran

Committing the 6,236 verses of the Holy Quran to heart is an incomparable spiritual honor. However, true memorization is not merely committing words to short-term memory—it is anchoring the sacred text deep into long-term subconscious recall.

#### The Golden Rule: Sabaq, Sabqi, and Manzil
The classical Islamic seminary system relies upon a three-tiered daily cycle:
- **Sabaq (New Lesson):** The new portion (usually half a page to one page) memorized that day after multiple readings with correct Tajweed.
- **Sabqi (Recent Memorization):** The preceding 5 to 10 pages memorized in recent days. This strengthens newly formed neural pathways.
- **Manzil / Amokhta (Long-Term Retention):** Daily systematic revision of entire previously completed Juz. A Hafiz should cycle through their entire memorization at least once every 10 to 15 days.

#### Practical Tips for Hifz Students
1. **Use One Mushaf Edition Exclusively:** Visual memory plays a pivotal role in Hifz. Always use the same 15-line or 16-line print so page boundaries, line placements, and aya positions remain imprinted in your visual memory.
2. **Recite Aloud to a Teacher:** Never assess your own memorization in silence. Self-recitation hides blind spots. Having a vigilant teacher interrupt each hesitation is the secret to enduring retention.
3. **Pray with What You Memorize:** Reciting newly memorized portions during Tahajjud and Sunnah prayers cements verses permanently into your heart.`,
    },
    {
      slug: 'importance-of-tajweed-in-quran-recitation',
      title: 'The Essential Importance of Tajweed: Reciting the Quran as Revealed',
      excerpt: 'Why accurate Tajweed is an obligation for every Muslim and how correct pronunciation preserves the sacred meanings of Allah’s speech.',
      category: 'Tajweed',
      author: 'Maulana Suhail Ahmad',
      readTime: '6 min read',
      published: true,
      image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=1200',
      content: `### What is Tajweed and Why Does it Matter?

Linguistically, *Tajweed* means "betterment" or "beautification". In Islamic terminology, it signifies giving every Arabic letter its rightful sound, characteristic, and origin without exaggeration or deficiency.

Allah the Almighty instructs in Surah Al-Muzzammil:
> **وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا**
> *"And recite the Quran with measured, distinct recitation."* (Quran 73:4)

#### Minor Errors vs. Meaning-Altering Errors
In the Arabic language, slight mispronunciations can radically alter the theological meaning of a verse:
- Confusing **ق** (Qaf) with **ك** (Kaf): Changing *Qalb* (قلب - Heart) into *Kalb* (كلب - Canine).
- Confusing **ح** (Haa) with **هـ** (Haa): Changing *Al-Hamd* (الحمد - All Praise) to a meaningless or distorted sound.
- Neglecting **Madd** (Prolongation): Omitting the elongation can turn affirmative statements into negations.

Learning Tajweed under a competent, patient teacher is not an optional luxury; it is the protective shield that preserves the integrity of Divine revelation.`,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        image: post.image,
      },
      create: post,
    });
  }

  // 8. Authentic Testimonials
  const testimonials = [
    {
      name: 'Dr. Tariq Mahmood',
      relation: 'Parent of 2 Students (Aged 8 and 11)',
      country: 'United Kingdom',
      rating: 5,
      courseName: 'Noorani Qaida & Nazra',
      comment: 'Maulana Suhail Ahmad Online Quran Academy has transformed my children’s connection with the Quran. The teachers are exceptionally patient, punctual, and follow a structured methodology. Seeing my 8-year-old recite with accurate Makharij brings tears of gratitude.',
    },
    {
      name: 'Sister Fatima Al-Zahra',
      relation: 'Adult Learner',
      country: 'Canada',
      rating: 5,
      courseName: 'Quran Kareem Nazra',
      comment: 'As a working professional, I struggled for years to find a schedule that worked for me. The flexible timing and dedicated female instructors here allowed me to complete the Nazra course with authentic Tajweed. Highly recommended for adults!',
    },
    {
      name: 'Brother Zafar Iqbal',
      relation: 'Parent of Hifz Student',
      country: 'India',
      rating: 5,
      courseName: 'Hifz-e-Quran',
      comment: 'The Hifz program’s revision system (Sabaq, Sabqi, Manzil) is rigorous and results-driven. My son has already completed 10 Juz with impeccable retention and confidence. The monthly progress reports keep us fully informed.',
    },
    {
      name: 'Sheikh Abdul Wahid',
      relation: 'Student',
      country: 'United Arab Emirates',
      rating: 5,
      courseName: 'Aalim Course',
      comment: 'The depth of knowledge in the Aalim course, especially classical Arabic grammar (Nahw and Sarf), is remarkable. The scholars explain complex theological concepts with clarity, wisdom, and adab.',
    },
  ];

  for (const t of testimonials) {
    await prisma.testimonial.create({
      data: t,
    });
  }

  // 9. Sample Inquiries
  await prisma.contactInquiry.create({
    data: {
      name: 'Rashid Khan',
      email: 'rashid.k@example.com',
      phone: '+919988776655',
      subject: 'Inquiry regarding class schedules for US Eastern Time',
      courseInterest: 'Hifz-e-Quran',
      message: 'Assalamu Alaikum, we live in New York and are looking for 7:00 PM EST slots for our 12-year-old son. Please advise availability.',
      status: 'NEW',
    },
  });

  console.log('Database seeding successfully finished!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
