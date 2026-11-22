import { NextRequest, NextResponse } from "next/server";
import { getSessionFromRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getSessionFromRequest(req);
    if (!session || session.role !== "ADMIN") {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 });
    }

    const { id, status, meetingLink, adminNotes } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, message: "ID and status are required" }, { status: 400 });
    }

    const updated = await prisma.trialBooking.update({
      where: { id },
      data: {
        status,
        meetingLink: meetingLink !== undefined ? meetingLink : undefined,
        adminNotes: adminNotes !== undefined ? adminNotes : undefined,
      },
    });

    return NextResponse.json({ success: true, trial: updated });
  } catch (error) {
    console.error("Update trial error:", error);
    return NextResponse.json({ success: false, message: "Failed to update trial" }, { status: 500 });
  }
}
