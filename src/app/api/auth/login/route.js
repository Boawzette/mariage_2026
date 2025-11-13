import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export async function POST(req) {
  const { password } = await req.json();

  if (password !== process.env.SITE_PASSWORD) {
    return NextResponse.json({ ok: false, error: "Invalid password" }, { status: 401 });
  }

  // Crée un JWT signé avec SESSION_SECRET
  const token = jwt.sign({}, process.env.SESSION_SECRET, { expiresIn: "12h" });

  // Crée cookie HTTPOnly
  const headers = {
    "Set-Cookie": cookie.serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 12, // 12h
    }),
  };

  return NextResponse.json({ ok: true }, { headers });
}
