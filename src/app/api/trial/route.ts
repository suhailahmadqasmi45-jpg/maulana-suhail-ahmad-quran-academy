import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const trialSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email address is required"),
  phone: z.string().min(6, "Valid contact number is required"),
  courseSlug: z.string().min(2, "Course selection is required"),
  courseName: z.string().min(2, "Course name is required"),
  country: z.string().min(2, "Country is required"),
  preferredDate: z.string().min(4, "Preferred date is required"),
  preferredTime: z.string().min(2, "Preferred time slot is required"),
  preferredLanguage: z.string().min(2, "Preferred language is required"),
  notes: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = trialSchema.parse(body);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const reference = `TRL-${randomSuffix}`;

    const trial = await prisma.trialBooking.create({
      data: {
        reference,
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        courseSlug: validated.courseSlug,
        courseName: validated.courseName,
        country: validated.country,
        preferredDate: validated.preferredDate,
        preferredTime: validated.preferredTime,
        preferredLanguage: validated.preferredLanguage,
        notes: validated.notes || null,
        status: "PENDING", // Subject to academy confirmation
      },
    });

    return NextResponse.json({
      success: true,
      reference: trial.reference,
      message:
        "Free trial request received! A coordinator will verify tutor availability and send class connection instructions.",
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error("Trial booking error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
