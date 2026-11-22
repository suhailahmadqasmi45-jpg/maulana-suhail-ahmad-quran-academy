# Maulana Suhail Ahmad Online Quran Academy
## Premium, Modern, Fully Responsive Online Islamic Education Platform

> **Main Academy Headline:** Learn Quran from Home, From Anywhere in the World  
> **Official Approved Pricing:** Noorani Qaida (₹1,399/mo), Quran Kareem Nazra (₹1,399/mo), Hifz-e-Quran (₹1,899/mo), Aalim Course (₹1,399/mo)

---

### 1. Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom Islamic color palette & geometric accents
- **Icons:** Lucide React
- **ORM & Database:** Prisma ORM with SQLite (for zero-config local dev) & seamless PostgreSQL compatibility
- **Form Validation:** React Hook Form + Zod
- **Authentication:** Custom JWT-session auth (`jose` + secure HTTP-only cookies) supporting role-based access for Students and Administrators
- **Images:** Next.js Image optimization with curated, authentic Quran & Islamic learning imagery
- **Deployment:** Vercel-ready with edge caching, sitemap, robots.txt, and JSON-LD schema metadata

---

### 2. Islamic Design Direction & Color Palette
- **Deep Emerald Green:** `#064E3B`
- **Forest Green:** `#065F46`
- **Soft Gold:** `#D4AF37`
- **Ivory White:** `#FFFCF5`
- **Light Cream:** `#F8F5ED`
- **Dark Text:** `#172B25`
- **Arabic & Urdu Support:** Native RTL switching support (English, Urdu, Arabic, Hindi) with language-aware styling.

---

### 3. Approved Courses & Centralized Pricing Matrix

| Course | Monthly Fee | Level | Duration | Highlights |
|---|---|---|---|---|
| **Noorani Qaida** | **₹1,399/month** | Beginner / Foundation | 3 to 5 Months | Makharij, alphabet recognition, letter joining, short vowels (Harakat), Tanween, Sukoon |
| **Quran Kareem Nazra** | **₹1,399/month** | Intermediate | 10 to 18 Months | Fluent Quran reading, Noon & Meem Sakin, Tajweed rules, stopping signs (Waqf) |
| **Hifz-e-Quran** | **₹1,899/month** | All Levels | 2 to 4 Years | Complete memorization with Sabaq, Sabqi, and Manzil daily revision framework |
| **Aalim Course** | **₹1,399/month** | Advanced Islamic Studies | Modular semesters | Classical Arabic (Nahw & Sarf), Hadith, Tafseer, Fiqh (Subject to admin syllabus confirmation) |

*Prices are centrally defined in `src/lib/courses.ts` and managed directly via the Admin Panel in the database.*

---

### 4. Complete List of 28 Functional Pages

1. **Home** — `/` (Hero, Intro with Quranic verse, 4 Courses, Why Choose Us, How Online Classes Work, Transparent Fees, Learning Benefits, Meet Faculty, Journey Timeline, Free Trial Banner, Testimonials, FAQ, Blog preview, CTA, Footer)
2. **About Us** — `/about` (Heritage, mission, 4 educational pillars, scholarly note from Maulana Suhail Ahmad)
3. **All Courses** — `/courses` (Comparison of all 4 courses, level filters, admission CTAs)
4. **Noorani Qaida** — `/courses/noorani-qaida` (Full syllabus breakdown, Makharij rules, ₹1,399/mo fee)
5. **Quran Kareem Nazra** — `/courses/quran-kareem-nazra` (Syllabus, Tajweed milestones, ₹1,399/mo fee)
6. **Hifz-e-Quran** — `/courses/hifz-e-quran` (Sabaq-Sabqi-Manzil retention structure, ₹1,899/mo fee)
7. **Aalim Course** — `/courses/aalim-course` (Classical Arabic, Hadith, Fiqh, admin syllabus disclaimer, ₹1,399/mo fee)
8. **Course Fees / Pricing** — `/pricing` (Clear comparison table, inclusions, payment channels)
9. **Online Admission** — `/admission` (Working multi-field form with Zod validation, unique reference code `ADM-2026-XXXX` generation, database storage, and confirmation screen)
10. **Book Free Trial** — `/free-trial` (Working trial scheduler, slot preferences, database storage, subject to admin confirmation)
11. **Our Teachers** — `/teachers` (Faculty profiles, credentials, 4-stage vetting standard)
12. **How Online Classes Work** — `/how-it-works` (4-step walkthrough, technical & headset recommendations)
13. **Student Reviews** — `/testimonials` (Verified feedback from UK, Canada, India, UAE parents)
14. **Frequently Asked Questions** — `/faq` (Categorized interactive accordion)
15. **Islamic Learning Blog** — `/blog` (Index of scholarly articles)
16. **Individual Blog Pages** — `/blog/[slug]`
    - `/blog/how-to-learn-quran-online-beginners-guide`
    - `/blog/what-is-noorani-qaida-foundation-of-quran-reading`
    - `/blog/effective-quran-memorization-hifz-tips`
    - `/blog/importance-of-tajweed-in-quran-recitation`
17. **Contact Us** — `/contact` (Interactive contact inquiry form, direct WhatsApp CTA, email, phone)
18. **Student Login** — `/login` (Secure authentication with one-click demo credentials)
19. **Student Registration** — `/register` (Instant student account creation)
20. **Student Dashboard** — `/dashboard` (Personalized portal, active enrollment, next class time, Google Meet button)
21. **My Courses** — `/dashboard/courses` (Enrolled syllabus milestones and digital resources)
22. **My Class Schedule** — `/dashboard/schedule` (Weekly class schedule with live class links)
23. **My Learning Progress** — `/dashboard/progress` (Tajweed accuracy scores and teacher oral assessment notes)
24. **My Payments** — `/dashboard/payments` (Fee invoices and transaction statements)
25. **Privacy Policy** — `/privacy-policy` (GDPR and child privacy compliance)
26. **Terms and Conditions** — `/terms-and-conditions` (Student conduct and attendance policies)
27. **Refund Policy** — `/refund-policy` (7-day satisfaction guarantee and cancellation terms)
28. **Admin Dashboard** — `/admin` (Manage admissions, approve trial requests, edit course pricing without code changes, view inquiries, update settings)

---

### 5. Demo Credentials

| Role | Email | Password | Access URL |
|---|---|---|---|
| **Administrator** | `admin@maulanasuhailacademy.com` | `admin123` | `/admin` or `/login` |
| **Student** | `student@example.com` | `student123` | `/dashboard` or `/login` |

---

### 6. Local Development Setup

```bash
# 1. Install dependencies
npm install

# 2. Push Prisma database schema
npx prisma db push

# 3. Seed initial database (Courses, Admin, Student, Blog, Testimonials)
node prisma/seed.js

# 4. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 7. PostgreSQL Switch for Production

To switch from SQLite to PostgreSQL for production:
1. Open `prisma/schema.prisma`
2. Change `provider = "sqlite"` to `provider = "postgresql"`
3. Set your connection string in `.env`:
   ```env
   DATABASE_URL="postgresql://user:password@host:5432/quran_academy?schema=public"
   ```
4. Run `npx prisma db push` and `node prisma/seed.js`.
