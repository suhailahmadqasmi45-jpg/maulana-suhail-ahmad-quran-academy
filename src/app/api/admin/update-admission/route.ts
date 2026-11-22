import { NextRequest, NextResponse } from "next/server";
import { getSessionFromRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getSessionFromRequest(req);
    if (!session || session.role !== "ADMIN") {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 });
    }

    const { id, status, adminNotes } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, message: "ID and status are required" }, { status: 400 });
    }

    const updated = await prisma.admission.update({
      where: { id },
      data: {
        status,
        adminNotes: adminNotes ?? undefined,
      },
    });

    return NextResponse.json({ success: true, admission: updated });
  } catch (error) {
    console.error("Update admission error:", error);
    return NextResponse.json({ success: false, message: "Failed to update admission" }, { status: 500 });
  }
}
