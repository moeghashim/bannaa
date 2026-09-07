import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n";

export type BlogPost = { slug: string; locale: Locale; title: string; description: string; author: string; date: string; tags: string[]; body: string };
const directory = path.join(process.cwd(), "content/blog");

export function getPosts(locale: Locale): BlogPost[] {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter(name => name.endsWith(".md")).flatMap(name => {
    const { data, content } = matter(fs.readFileSync(path.join(directory, name), "utf8"));
    if (data.draft === true) return [];
    const required = ["title", "description", "author", "date", "locale"];
    for (const key of required) {
      if (typeof data[key] !== "string" || !data[key].trim()) throw new Error(`Blog ${name}: ${key} must be a nonempty string (quote dates).`);
    }
    if (!["ar", "en"].includes(data.locale)) throw new Error(`Blog ${name}: invalid locale.`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date) || Number.isNaN(Date.parse(data.date))) throw new Error(`Blog ${name}: invalid date.`);
    if (!Array.isArray(data.tags) || data.tags.some((tag: unknown) => typeof tag !== "string" || !tag.trim())) throw new Error(`Blog ${name}: tags must be a string list.`);
    if (data.locale !== locale) return [];
    return [{ slug: name.slice(0, -3), locale, title: data.title, description: data.description, author: data.author, date: data.date, tags: data.tags, body: content }];
  }).sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}
