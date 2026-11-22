import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email address is required"),
  phone: z.string().min(6, "Contact phone is required"),
  subject: z.string().min(3, "Subject is required"),
  courseInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = contactSchema.parse(body);

    await prisma.contactInquiry.create({
      data: {
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        subject: validated.subject,
        courseInterest: validated.courseInterest || null,
        message: validated.message,
        status: "NEW",
      },
    });

    return NextResponse.json({
      success: true,
      message: "JazakAllahu Khairan! Your inquiry has been sent to academy administration. We will reply promptly.",
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error("Contact inquiry error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
