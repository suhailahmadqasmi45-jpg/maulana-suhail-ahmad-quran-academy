import React from "react";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions governing online Quran courses, admissions, and student conduct.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Terms and Conditions"
        subtitle="Academic policies, student attendance guidelines, and code of conduct."
        badge="Legal Agreement"
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-dark-800/85 leading-relaxed">
        <div className="p-8 rounded-3xl bg-ivory-50 border border-emerald-950/10 space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">1. Acceptance of Terms</h2>
            <p>
              By registering, booking a trial class, or submitting an admission form with Maulana Suhail Ahmad Online Quran Academy, you agree to comply with and be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">2. Attendance & Punctuality</h2>
            <p>
              Students are expected to join scheduled live classes on time. If a student anticipates an absence due to travel, illness, or family emergency, notice must be provided at least 12 hours in advance to arrange a make-up session.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">3. Monthly Course Fees & Schedule</h2>
            <p>
              Tuition fees are billed monthly on a recurring schedule according to the approved fee structure: Noorani Qaida (₹1,399/mo), Quran Kareem Nazra (₹1,399/mo), Hifz-e-Quran (₹1,899/mo), and Aalim Course (₹1,399/mo). Monthly fees ensure dedicated reservation of tutor time slots.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">4. Code of Conduct & Adab</h2>
            <p>
              Teaching and studying the Holy Quran is a sacred trust. Both students and instructors are required to maintain the highest Islamic adab, respect, punctuality, and modesty during all digital interactions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">5. Course Certification</h2>
            <p>
              Certificates of completion (Nazra, Hifz, or Qaida) are awarded strictly upon passing oral diagnostic evaluations administered by the senior academic council.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
