import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ username: "ankit", email: "ankit@gmail.com" });
}
