import React from "react";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and student data security terms of Maulana Suhail Ahmad Online Quran Academy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding student, guardian, and payment privacy."
        badge="Data Protection"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-dark-800/85 leading-relaxed">
        <div className="p-8 rounded-3xl bg-ivory-50 border border-emerald-950/10 space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">1. Information We Collect</h2>
            <p>
              When you enroll or book a free trial at Maulana Suhail Ahmad Online Quran Academy, we collect personal information strictly required to deliver our educational services, including student full name, parent or guardian name, age, email address, phone/WhatsApp number, country, and class schedule preferences.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">2. How We Use Student Data</h2>
            <p>
              Your information is used solely to coordinate live class schedules, assign appropriate certified instructors, send reminder notifications, track academic progress, and generate periodic performance records. We never sell, rent, or trade student or parent information to third parties or marketing brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">3. Class Privacy & Sister Protection</h2>
            <p>
              All online classes are private one-on-one sessions. We maintain strict Islamic modesty and ethical codes. Recordings are never published publicly without explicit, written parental consent. Sisters and female children are instructed by verified female faculty in a secure digital environment.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">4. Payment Security</h2>
            <p>
              All tuition fee transactions are processed through encrypted, compliant financial gateways and verified bank channels. The academy does not store sensitive credit/debit card numbers on its servers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">5. Contact Regarding Privacy</h2>
            <p>
              If you have any questions or wish to request data deletion, please contact our privacy compliance officer at{" "}
              <a href="mailto:info@maulanasuhailquranacademy.com" className="text-emerald-900 underline font-semibold">
                info@maulanasuhailquranacademy.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
