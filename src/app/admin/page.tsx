import React from "react";
import { prisma } from "@/lib/prisma";
import { formatCurrency } from "@/lib/utils";
import { AdminDashboardClient } from "./AdminDashboardClient";

export default async function AdminPage() {
  // Fetch latest data from database
  const [courses, admissions, trials, inquiries, settings, stats] = await Promise.all([
    prisma.course.findMany({ orderBy: { order: "asc" } }),
    prisma.admission.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
    prisma.trialBooking.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
    prisma.contactInquiry.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
    prisma.setting.findMany(),
    Promise.all([
      prisma.admission.count(),
      prisma.trialBooking.count({ where: { status: "PENDING" } }),
      prisma.student.count(),
      prisma.paymentRecord.aggregate({ _sum: { amount: true } }),
    ]),
  ]);

  const overviewStats = {
    totalAdmissions: stats[0],
    pendingTrials: stats[1],
    totalStudents: stats[2],
    totalRevenue: stats[3]._sum.amount || 0,
  };

  return (
    <AdminDashboardClient
      initialCourses={courses}
      initialAdmissions={admissions}
      initialTrials={trials}
      initialInquiries={inquiries}
      initialSettings={settings}
      stats={overviewStats}
    />
  );
}
