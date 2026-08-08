import { createHmac, timingSafeEqual } from "crypto";

export type CommunityMember = {
  name: string;
  email: string;
};

const COOKIE_NAME = "banna_community_session";
const DEV_SECRET = "dev-only-banna-community-session";

export function getCommunityCookieName() {
  return COOKIE_NAME;
}

function getSecret() {
  const secret = process.env.COMMUNITY_AUTH_SECRET;
  if (secret) return secret;
  if (process.env.NODE_ENV !== "production") return DEV_SECRET;
  return null;
}

function encode(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function decode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function sign(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createCommunitySession(member: CommunityMember) {
  const secret = getSecret();
  if (!secret) return null;
  const payload = encode(JSON.stringify(member));
  return `${payload}.${sign(payload, secret)}`;
}

export function readCommunitySession(token: string | undefined): CommunityMember | null {
  const secret = getSecret();
  if (!secret || !token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  const expected = sign(payload, secret);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (signatureBuffer.length !== expectedBuffer.length) return null;
  if (!timingSafeEqual(signatureBuffer, expectedBuffer)) return null;

  try {
    const parsed = JSON.parse(decode(payload)) as Partial<CommunityMember>;
    if (!parsed.name || !parsed.email) return null;
    return { name: parsed.name, email: parsed.email };
  } catch {
    return null;
  }
}

export function isCommunityAuthConfigured() {
  return getSecret() !== null;
}
