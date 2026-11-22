import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const admissionSchema = z.object({
  studentName: z.string().min(2, "Full name is required"),
  mobile: z.string().min(6, "Valid call number is required"),
  email: z.string().email("Valid email address").optional().or(z.literal("")),
  courseSlug: z.string().min(2, "Please select a course"),
  courseName: z.string().min(2, "Course name is required"),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = admissionSchema.parse(body);

    // Generate unique application reference: ADM-2026-XXXX
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const applicationRef = `ADM-${new Date().getFullYear()}-${randomDigits}`;

    const admission = await prisma.admission.create({
      data: {
        applicationRef,
        studentName: validated.studentName,
        mobile: validated.mobile,
        whatsapp: validated.mobile,
        email: validated.email || null,
        courseSlug: validated.courseSlug,
        courseName: validated.courseName,
        comments: validated.message || null,
        country: "India",
        status: "PENDING",
      },
    });

    return NextResponse.json({
      success: true,
      applicationRef: admission.applicationRef,
      message: "Application submitted successfully! Our admissions coordinator will contact you shortly.",
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error("Admission error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
