export interface CityLocationData {
  slug: string;
  cityName: string;
  state: string;
  region: string;
  title: string;
  metaDescription: string;
  heroHeadline: string;
  localContext: string;
  popularCourses: string[];
  languagesSupported: string[];
  schedulingFlexibility: string;
  frequentlyAskedQuestions: {
    question: string;
    answer: string;
  }[];
}

export const INDIA_LOCATIONS: CityLocationData[] = [
  {
    slug: "delhi",
    cityName: "Delhi NCR",
    state: "Delhi & NCR",
    region: "North India",
    title: "Online Quran Classes in Delhi NCR | 1-on-1 Certified Tutors",
    metaDescription:
      "Join online Quran classes in Delhi, Noida & Gurugram from home. Private 1-on-1 tutoring in Noorani Qaida (₹1,399/m), Nazra, Hifz & Aalim Course with verified Qaris. Free Trial Class.",
    heroHeadline: "Private 1-on-1 Online Quran Classes for Families in Delhi NCR",
    localContext:
      "Living in Delhi, Noida, and Gurugram often entails demanding school commutes and traffic congestion. Our online distance learning academy enables children, working professionals, and sisters across Delhi NCR to receive personalized Quranic instruction from certified Islamic scholars directly from the comfort and safety of their homes.",
    popularCourses: [
      "Noorani Qaida for Beginners & Children (₹1,399/mo)",
      "Quran Kareem Nazra with Tajweed (₹1,399/mo)",
      "Hifz-e-Quran Memorization (₹1,899/mo)",
      "Aalim Course for Students of Knowledge (₹1,399/mo)",
    ],
    languagesSupported: ["Urdu", "Hindi", "English"],
    schedulingFlexibility:
      "Flexible morning (6:00 AM - 9:00 AM), afternoon, evening, and weekend slots adjusted to Delhi school and office hours.",
    frequentlyAskedQuestions: [
      {
        question: "How do online Quran classes work for students living in Delhi NCR?",
        answer:
          "Students join private 1-on-1 live video or audio sessions via Google Meet or Zoom. Tutors share digital Noorani Qaida and Mushaf on-screen, providing real-time Makharij corrections. No physical travel is required.",
      },
      {
        question: "Are female Quran teachers available for sisters and daughters in Delhi?",
        answer:
          "Yes. We have qualified female Qariyas and Alimas dedicated to teaching sisters and young girls in an encouraging, private, and respectful environment.",
      },
      {
        question: "What is the monthly fee for online Quran classes in Delhi?",
        answer:
          "Our fees are strictly transparent across India: Noorani Qaida, Nazra, and Aalim courses are ₹1,399 per month, and Hifz-e-Quran is ₹1,899 per month. There are zero admission or registration fees.",
      },
    ],
  },
  {
    slug: "mumbai",
    cityName: "Mumbai",
    state: "Maharashtra",
    region: "West India",
    title: "Online Quran Classes in Mumbai | Personalized 1-on-1 Lessons",
    metaDescription:
      "Learn Quran online in Mumbai from certified Qaris. Flexible evening & weekend timings for Noorani Qaida, Nazra with Tajweed, Hifz, and Aalim Course. 1-2 Days Free Trial.",
    heroHeadline: "Online Quran Classes in Mumbai with Flexible Scheduling",
    localContext:
      "With Mumbai's fast-paced lifestyle and dense urban travel, finding reliable, patient local Quran teachers with matching timings can be challenging. Our distance-learning platform offers Mumbai families 24/7 scheduling options, enabling students from South Mumbai, Bandra, Andheri, Navi Mumbai, and Thane to learn at their own pace.",
    popularCourses: [
      "Noorani Qaida (₹1,399/mo)",
      "Quran Kareem Nazra (₹1,399/mo)",
      "Hifz-e-Quran (₹1,899/mo)",
      "Aalim Course (₹1,399/mo)",
    ],
    languagesSupported: ["English", "Urdu", "Hindi"],
    schedulingFlexibility:
      "Early morning and late-evening slots up to 10:30 PM IST to accommodate Mumbai's academic and corporate schedules.",
    frequentlyAskedQuestions: [
      {
        question: "Can working professionals in Mumbai learn Quran from scratch?",
        answer:
          "Yes. We offer specialized adult beginner classes starting from Noorani Qaida phonetics, scheduled during late evenings or weekends with complete patience and privacy.",
      },
      {
        question: "Can I attend a free demo session from Mumbai?",
        answer:
          "Yes. We provide a 1 to 2 days complimentary 1-on-1 trial class so you can experience our pedagogical quality before confirming enrollment.",
      },
    ],
  },
  {
    slug: "hyderabad",
    cityName: "Hyderabad",
    state: "Telangana",
    region: "South India",
    title: "Online Quran Classes in Hyderabad | Tajweed & Hifz Tutors",
    metaDescription:
      "Authentic online Quran classes for kids and adults in Hyderabad. Noorani Qaida (₹1,399/m), Nazra, Hifz-e-Quran & Aalim Course. Female teachers available. Book Free Trial.",
    heroHeadline: "Authentic Online Quran Learning for Hyderabad Families",
    localContext:
      "Hyderabad has a celebrated Islamic scholarly heritage. Maulana Suhail Ahmad Online Quran Academy brings classical Sanad and Dars-e-Nizami standards directly to households in Old City, Banjara Hills, Jubilee Hills, Gachibowli, Secunderabad, and Cyberabad through individualized online tutoring.",
    popularCourses: [
      "Noorani Qaida Foundation (₹1,399/mo)",
      "Complete Nazra with Tajweed (₹1,399/mo)",
      "Hifz-e-Quran Sabaq & Revision (₹1,899/mo)",
      "Aalim Course (₹1,399/mo)",
    ],
    languagesSupported: ["Urdu", "English", "Hindi"],
    schedulingFlexibility:
      "Multiple batches matching local school hours and IT shift timings across Telangana.",
    frequentlyAskedQuestions: [
      {
        question: "Are classes taught in Urdu for Hyderabad students?",
        answer:
          "Yes. Our scholars are fluent in classical Urdu as well as English, ensuring explanations of Tajweed rules and Islamic concepts are crystal clear.",
      },
      {
        question: "How does the Hifz-e-Quran program operate online in Hyderabad?",
        answer:
          "Students follow the classical Sabaq (daily lesson), Sabqi (recent revision), and Manzil (long-term revision) cycle, reciting directly to their dedicated Hafiz mentor daily.",
      },
    ],
  },
  {
    slug: "lucknow",
    cityName: "Lucknow",
    state: "Uttar Pradesh",
    region: "North India",
    title: "Online Quran Classes in Lucknow | Traditional Scholarship Online",
    metaDescription:
      "Join online Quran classes in Lucknow directed by Maulana Suhail Ahmad. 1-on-1 Noorani Qaida, Nazra Quran, Hifz & Aalim Course from ₹1,399/month. Free Trial Available.",
    heroHeadline: "Classical Quranic Instruction for Learners in Lucknow",
    localContext:
      "Under the direct oversight of Maulana Suhail Ahmad, our academy maintains close educational and spiritual ties across Uttar Pradesh. Lucknow students receive rigorous pronunciation correction and gentle mentorship adhering to the highest pedagogical benchmarks.",
    popularCourses: [
      "Noorani Qaida (₹1,399/mo)",
      "Nazra Quran (₹1,399/mo)",
      "Hifz-e-Quran (₹1,899/mo)",
      "Aalim Course (₹1,399/mo)",
    ],
    languagesSupported: ["Urdu", "Hindi", "English"],
    schedulingFlexibility:
      "Convenient morning and evening batches accommodating madrasa and convent school calendars.",
    frequentlyAskedQuestions: [
      {
        question: "What qualifications do the teachers possess?",
        answer:
          "All tutors are certified Huffaz, Qaris, or graduates of traditional Dars-e-Nizami seminaries, vetted personally by Maulana Suhail Ahmad.",
      },
    ],
  },
  {
    slug: "bengaluru",
    cityName: "Bengaluru",
    state: "Karnataka",
    region: "South India",
    title: "Online Quran Classes in Bengaluru | 1-on-1 Classes for Kids & Adults",
    metaDescription:
      "Learn Quran online in Bangalore with flexible hours. 1-on-1 Noorani Qaida, Nazra with Tajweed, Hifz and Aalim studies. Female teachers available. Free Trial.",
    heroHeadline: "Convenient 1-on-1 Online Quran Classes for Bengaluru Families",
    localContext:
      "For Muslim families residing in Bengaluru tech corridors like Whitefield, Koramangala, Indiranagar, and Electronic City, balancing hectic school and corporate schedules with Quranic education is effortless through our digital classrooms.",
    popularCourses: [
      "Noorani Qaida for Kids (₹1,399/mo)",
      "Nazra Quran with Tajweed (₹1,399/mo)",
      "Hifz-e-Quran (₹1,899/mo)",
      "Aalim Course (₹1,399/mo)",
    ],
    languagesSupported: ["English", "Urdu", "Hindi"],
    schedulingFlexibility:
      "Flexible weekday and weekend slots customized for working parents and students.",
    frequentlyAskedQuestions: [
      {
        question: "Can children in Bengaluru take weekend-only Quran classes?",
        answer:
          "Yes. We offer weekend-intensive and customized weekly schedules to ensure consistent learning without interfering with school activities.",
      },
    ],
  },
  {
    slug: "kolkata",
    cityName: "Kolkata",
    state: "West Bengal",
    region: "East India",
    title: "Online Quran Classes in Kolkata | Verified Islamic Scholars",
    metaDescription:
      "Online Quran classes in Kolkata for children and adults. Learn Noorani Qaida (₹1,399/m), Nazra, Hifz & Aalim Course with 1-on-1 private tuition. Free Trial.",
    heroHeadline: "Personalized Online Quran Learning in Kolkata",
    localContext:
      "Serving students across Park Circus, Rajarhat, Howrah, and greater Kolkata, our academy delivers patient, Sanad-backed Quranic instruction right to your home screen.",
    popularCourses: [
      "Noorani Qaida (₹1,399/mo)",
      "Nazra Quran (₹1,399/mo)",
      "Hifz-e-Quran (₹1,899/mo)",
      "Aalim Course (₹1,399/mo)",
    ],
    languagesSupported: ["Urdu", "Hindi", "English"],
    schedulingFlexibility: "Daily flexible hours from 6:30 AM to 10:00 PM IST.",
    frequentlyAskedQuestions: [
      {
        question: "What equipment is needed to start classes from Kolkata?",
        answer:
          "Only a mobile phone, tablet, or PC with an internet connection and headphones. Classes run smoothly on Google Meet and Zoom.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): CityLocationData | undefined {
  return INDIA_LOCATIONS.find((loc) => loc.slug === slug);
}
