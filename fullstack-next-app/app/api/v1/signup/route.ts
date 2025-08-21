import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma/index";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const resdata = await req.json();

  await prisma.user.create({
    data: {
      username: resdata.username,
      password: resdata.password,
      email: resdata.email,
    },
  });

  return NextResponse.json({
    messgae: "Account Created",
  });
}
