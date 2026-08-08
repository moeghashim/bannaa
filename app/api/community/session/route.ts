import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { getCommunityCookieName, readCommunitySession } from "@/lib/community-auth";

export async function GET() {
  const cookieStore = await cookies();
  const member = readCommunitySession(cookieStore.get(getCommunityCookieName())?.value);
  return NextResponse.json({ member });
}
