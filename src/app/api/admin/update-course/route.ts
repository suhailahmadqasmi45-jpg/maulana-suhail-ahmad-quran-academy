import { NextRequest, NextResponse } from "next/server";
import { getSessionFromRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getSessionFromRequest(req);
    if (!session || session.role !== "ADMIN") {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 });
    }

    const { slug, monthlyFee, originalFee, description, fullDescription, level, duration } =
      await req.json();

    if (!slug) {
      return NextResponse.json({ success: false, message: "Course slug is required" }, { status: 400 });
    }

    const updated = await prisma.course.update({
      where: { slug },
      data: {
        monthlyFee: Number(monthlyFee),
        originalFee: originalFee ? Number(originalFee) : null,
        description: description || undefined,
        fullDescription: fullDescription || undefined,
        level: level || undefined,
        duration: duration || undefined,
      },
    });

    return NextResponse.json({ success: true, course: updated });
  } catch (error) {
    console.error("Update course error:", error);
    return NextResponse.json({ success: false, message: "Failed to update course" }, { status: 500 });
  }
}
