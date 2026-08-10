import type { ExternalVideo } from "@/lib/content";

const YOUTUBE_CHANNEL_ID = "UCABPpC4zfzPziLLYrA0G39g";
const YOUTUBE_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

type FeedOptions = {
  limit?: number;
};

export async function getLatestYouTubeVideos({ limit = 6 }: FeedOptions = {}): Promise<ExternalVideo[]> {
  try {
    const response = await fetch(YOUTUBE_FEED_URL, {
      next: { revalidate: 3600 }
    });

    if (!response.ok) return [];

    const xml = await response.text();
    const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

    return entries.slice(0, limit).map((entry): ExternalVideo => {
      const id = readTag(entry, "yt:videoId");
      const title = readTag(entry, "title");
      const href = readLink(entry) || `https://www.youtube.com/watch?v=${id}`;
      const thumbnail = readAttribute(entry, "media:thumbnail", "url");
      const published = readTag(entry, "published");
      const channelTitle = readNestedTag(entry, "author", "name") || "Bannaa";
      const views = readAttribute(entry, "media:statistics", "views");

      return {
        id,
        platform: "youtube" as const,
        title,
        href,
        thumbnail,
        published,
        channelTitle,
        views: views || undefined
      };
    }).filter((video) => video.id && video.title && video.thumbnail);
  } catch {
    return [];
  }
}

function readTag(xml: string, tag: string): string {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = xml.match(new RegExp(`<${escaped}>([\\s\\S]*?)<\\/${escaped}>`));
  return decodeXml(match?.[1]?.trim() ?? "");
}

function readNestedTag(xml: string, parent: string, tag: string): string {
  const parentMatch = xml.match(new RegExp(`<${parent}>[\\s\\S]*?<\\/${parent}>`));
  if (!parentMatch) return "";
  return readTag(parentMatch[0], tag);
}

function readLink(xml: string): string {
  const match = xml.match(/<link\s+rel="alternate"\s+href="([^"]+)"/);
  return decodeXml(match?.[1] ?? "");
}

function readAttribute(xml: string, tag: string, attr: string): string {
  const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedAttr = attr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = xml.match(new RegExp(`<${escapedTag}[^>]*\\s${escapedAttr}="([^"]+)"`));
  return decodeXml(match?.[1] ?? "");
}

function decodeXml(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}
