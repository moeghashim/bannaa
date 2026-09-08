"use client";
import { useState } from "react";
import type { BlogPost } from "@/lib/blog";
import type { Locale } from "@/lib/i18n";

export function BlogList({ posts, locale }: { posts: Omit<BlogPost, "body">[]; locale: Locale }) {
  const [tag, setTag] = useState("");
  const tags = [...new Set(posts.flatMap(post => post.tags))];
  return <section className="wrap blog-list">
    <label className="blog-filter">{locale === "ar" ? "الموضوع" : "Topic"} <select value={tag} onChange={event => setTag(event.target.value)}><option value="">{locale === "ar" ? "الكل" : "All"}</option>{tags.map(item => <option key={item}>{item}</option>)}</select></label>
    {posts.filter(post => !tag || post.tags.includes(tag)).map(post => <article className="blog-row" key={post.slug}>
      <div><time dateTime={post.date}>{post.date}</time><p>{post.author}</p></div>
      <div><h2><a href={`/${locale}/hub/${post.slug}`}>{post.title}</a></h2><p>{post.description}</p><div className="tags">{post.tags.map(item => <span className="tag" key={item}>{item}</span>)}</div></div>
    </article>)}
    {!posts.length && <p>{locale === "ar" ? "مقالات الفريق قريباً." : "Team articles are coming soon."}</p>}
  </section>;
}
