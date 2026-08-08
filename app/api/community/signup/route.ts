import { NextResponse } from "next/server";

import {
  createCommunitySession,
  getCommunityCookieName,
  isCommunityAuthConfigured
} from "@/lib/community-auth";

type SignupPayload = {
  name?: unknown;
  email?: unknown;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!isCommunityAuthConfigured()) {
    return NextResponse.json(
      { error: "COMMUNITY_AUTH_SECRET must be configured in production." },
      { status: 500 }
    );
  }

  const payload = (await request.json()) as SignupPayload;
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";

  if (!name || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid name and email are required." }, { status: 400 });
  }

  const token = createCommunitySession({ name, email });
  if (!token) {
    return NextResponse.json({ error: "Community auth is not configured." }, { status: 500 });
  }

  const response = NextResponse.json({ member: { name, email } });
  response.cookies.set(getCommunityCookieName(), token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 90
  });
  return response;
}
