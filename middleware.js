import { NextResponse } from "next/server";

export function middleware(req) {
  const cookie = req.cookies.get("wedding_auth");
  const isLogged = cookie === process.env.SITE_PASSWORD;

  const url = req.nextUrl.pathname;

  // 🔥 PUBLIC ROUTE : /login
  if (url.startsWith("/login")) {
    return NextResponse.next();
  }

  // 🔥 PROTECTED ROUTES (tout le site sauf /login)
  if (!isLogged) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // 🔥 Si connecté → autorisé
  return NextResponse.next();
}

// 🔥 IMPORTANT : on protège absolument TOUT sauf les assets
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|videos|icons).*)"
  ],
};
