// middleware.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const PUBLIC_PATHS = ["/login", "/api/login", "/favicon.ico"];

export function middleware(req) {
  const url = req.nextUrl;

  if (PUBLIC_PATHS.some((p) => url.pathname.startsWith(p))) return NextResponse.next();

  const cookieHeader = req.headers.get("cookie") || "";
  const match = cookieHeader.match(/site_session=([^;]+)/);

  if (!match) return NextResponse.redirect(new URL("/login", req.url));

  try {
    const payload = jwt.verify(match[1], process.env.SESSION_SECRET);
    if (payload.authenticated) return NextResponse.next();
    else return NextResponse.redirect(new URL("/login", req.url));
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
