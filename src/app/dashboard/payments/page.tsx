import React from "react";
import { getServerSession } from "@/lib/auth";
import { formatCurrency } from "@/lib/utils";
import { CreditCard, CheckCircle2, FileText } from "lucide-react";

export default async function StudentPaymentsPage() {
  const session = await getServerSession();
  if (!session) return null;

  const payments = [
    {
      invoiceId: "INV-2026-9921",
      course: "Noorani Qaida",
      amount: 1399,
      date: "Nov 01, 2026",
      status: "PAID",
      method: "UPI / Bank Transfer",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in">
      <div>
        <h1 className="font-serif text-3xl font-bold text-emerald-950">Tuition & Fee Records</h1>
        <p className="text-xs sm:text-sm text-dark-800/70 mt-1">
          Review your paid invoices, monthly course fee statements, and receipt references.
        </p>
      </div>

      <div className="p-6 rounded-3xl bg-ivory-50 border border-emerald-950/10 shadow-sm space-y-4">
        <h3 className="font-serif text-lg font-bold text-emerald-950">Payment History</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-emerald-950/10 text-dark-800/60 uppercase">
                <th className="py-3 px-4">Invoice #</th>
                <th className="py-3 px-4">Course</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Method</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-950/5">
              {payments.map((p, idx) => (
                <tr key={idx} className="hover:bg-ivory-100/50">
                  <td className="py-3 px-4 font-mono font-medium text-emerald-950">{p.invoiceId}</td>
                  <td className="py-3 px-4 font-semibold text-emerald-950">{p.course}</td>
                  <td className="py-3 px-4 font-bold text-emerald-900">{formatCurrency(p.amount)}</td>
                  <td className="py-3 px-4 text-dark-800/70">{p.date}</td>
                  <td className="py-3 px-4 text-dark-800/70">{p.method}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-ivory-100 border border-emerald-950/10 text-xs text-dark-800/75 space-y-1">
        <h4 className="font-bold text-emerald-950">Fee Policy:</h4>
        <p>
          Course fees are billed on a recurring monthly schedule. In accordance with academy policy, live payment collection is processed only after the initial trial class has been completed and approved by the student or guardian.
        </p>
      </div>
    </div>
  );
}
