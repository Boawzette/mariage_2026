import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token"); // JWT créé par /api/auth/login
  const url = request.nextUrl.clone();

  // Si pas de token et qu'on n'est pas déjà sur /login → redirige
  if (!token && !url.pathname.startsWith("/login")) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Sinon, laisse passer
  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // protège la homepage et toutes ses sous-routes
};
