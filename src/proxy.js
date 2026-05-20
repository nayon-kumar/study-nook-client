import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { pathname } = request.nextUrl;

  // If user is not logged in: protect private routes
  const protectedRoutes = [
    "/add-room",
    "/my-listings",
    "/my-bookings",
    "/details",
  ];
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If user is logged in: block login/register and redirect to home
  const authRoutes = ["/login", "/register"];
  const isAuthRoute = authRoutes.includes(pathname);

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/add-room",
    "/my-listings",
    "/my-bookings",
    "/login",
    "/register",
    "/details/:path*",
  ],
};
