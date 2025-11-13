// app/api/login/route.js
import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import cookie from "cookie";

export async function POST(req) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json({ error: "Password required" }, { status: 400 });
    }

    const SITE_PASSWORD = process.env.SITE_PASSWORD;
    const SESSION_SECRET = process.env.SESSION_SECRET;

    if (!SITE_PASSWORD || !SESSION_SECRET) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    if (password !== SITE_PASSWORD) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Génère un token JWT
    const token = sign({ authenticated: true }, SESSION_SECRET, { expiresIn: "12h" });

    const headers = {
      "Set-Cookie": cookie.serialize("site_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 12 * 60 * 60, // 12h
      }),
    };

    return NextResponse.json({ ok: true }, { headers });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
