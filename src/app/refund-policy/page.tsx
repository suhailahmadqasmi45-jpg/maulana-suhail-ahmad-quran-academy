import React from "react";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Refund Policy",
  description: "Fee payment and refund policy of Suhail Online Quran Academy.",
};

export default function RefundPolicyPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        title="Refund & Cancellation Policy"
        subtitle="Transparent policies regarding course fees, satisfaction guarantee, and subscription cancellation."
        badge="Fair & Honest Policies"
        breadcrumbs={[{ label: "Refund Policy" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-dark-800/85 leading-relaxed">
        <div className="p-8 rounded-3xl bg-ivory-50 border border-emerald-950/10 space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">1. Free Trial Class First</h2>
            <p>
              To ensure that you and your child are 100% satisfied with the teaching style, tutor compatibility, and technical setup, we provide a free 1-on-1 trial class prior to collecting any tuition fees. You only make payment after you have experienced and approved the class.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">2. 7-Day Money-Back Guarantee</h2>
            <p>
              If, within the first 7 calendar days of your paid enrollment, you are dissatisfied with your learning experience for any legitimate reason, and a tutor reassignment does not resolve the concern, we will issue a pro-rated or full refund of that month’s fee.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">3. Monthly Cancellation & Pausing</h2>
            <p>
              There are no long-term locked contracts. You may pause or cancel your enrollment at the end of any billing cycle simply by notifying administration via email or WhatsApp at least 5 days before the next monthly due date.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-emerald-950">4. Processing of Approved Refunds</h2>
            <p>
              Approved refunds are credited directly back to the original source account (UPI or bank account) within 5 to 7 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
