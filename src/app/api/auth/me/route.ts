import { NextRequest, NextResponse } from "next/server";
import { getSessionFromRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      phone: true,
      students: {
        select: {
          id: true,
          parentName: true,
          age: true,
          country: true,
          city: true,
          preferredLanguage: true,
          status: true,
        },
      },
    },
  });

  return NextResponse.json({ user });
}
