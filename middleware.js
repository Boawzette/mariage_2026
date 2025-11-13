import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const url = request.nextUrl.clone();

  // Laisse passer /login
  if (url.pathname.startsWith("/login") || url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Vérifie JWT
  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  try {
    jwt.verify(token, process.env.SESSION_SECRET);
    return NextResponse.next();
  } catch {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = { matcher: ["/"] };
