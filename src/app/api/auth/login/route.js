import { serialize } from "cookie"; // <--- ici, import nommé
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { password } = await req.json();

  if (password !== process.env.SITE_PASSWORD) {
    return NextResponse.json({ ok: false, error: "Mot de passe incorrect" }, { status: 401 });
  }

  const token = jwt.sign({}, process.env.SESSION_SECRET, { expiresIn: "12h" });

  return NextResponse.json(
    { ok: true },
    {
      headers: {
        "Set-Cookie": serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 60 * 12,
        }),
      },
    }
  );
}
