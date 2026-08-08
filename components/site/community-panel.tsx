"use client";

import { FormEvent, useEffect, useState } from "react";

import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type Member = {
  name: string;
  email: string;
};

type Post = {
  id: string;
  author: string;
  body: string;
  createdAt: string;
};

type CommunityPanelProps = {
  content: SiteContent["community"];
  locale: Locale;
};

function postsKey(locale: Locale) {
  return `banna.community.posts.${locale}`;
}

export function CommunityPanel({ content, locale }: CommunityPanelProps) {
  const [member, setMember] = useState<Member | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [postBody, setPostBody] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSession() {
      try {
        const response = await fetch("/api/community/session");
        if (!response.ok) return;
        const payload = (await response.json()) as { member: Member | null };
        setMember(payload.member);
      } catch {
        setMember(null);
      }
    }

    void loadSession();

    try {
      const savedPosts = window.localStorage.getItem(postsKey(locale));
      if (savedPosts) setPosts(JSON.parse(savedPosts) as Post[]);
    } catch {
      setPosts([]);
    }
  }, [locale]);

  async function handleJoin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextMember = { name: name.trim(), email: email.trim() };
    if (!nextMember.name || !nextMember.email) return;
    setFormError(null);
    const response = await fetch("/api/community/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nextMember)
    });
    const payload = (await response.json()) as { member?: Member; error?: string };
    if (!response.ok || !payload.member) {
      setFormError(payload.error ?? "Unable to create community session.");
      return;
    }
    setMember(payload.member);
  }

  function handlePost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!member || !postBody.trim()) return;
    const nextPost: Post = {
      id: `${Date.now()}`,
      author: member.name,
      body: postBody.trim(),
      createdAt: new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" }).format(new Date())
    };
    const nextPosts = [nextPost, ...posts];
    setPosts(nextPosts);
    setPostBody("");
    window.localStorage.setItem(postsKey(locale), JSON.stringify(nextPosts));
  }

  return (
    <section className="community-wrap wrap">
      <div className="community-copy">
        <span className="tag solid">{content.eyebrow}</span>
        <h2>
          {content.title}
          <br />
          <span className="accent">{content.titleAccent}</span>
        </h2>
        <p>{content.description}</p>
        <ul>
          {content.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <div className="community-console pipe">
        <div className="pipe__chrome">
          <span>{content.signupTitle}</span>
          <div className="pipe__dots" aria-hidden="true">
            <span style={{ background: "var(--warn)" }} />
            <span style={{ background: "var(--accent)" }} />
            <span style={{ background: "var(--ok)" }} />
          </div>
        </div>
        <div className="community-console__body">
          {member ? (
            <p className="community-console__member">
              {content.signedInPrefix} <strong>{member.name}</strong>
            </p>
          ) : (
            <form className="community-form" onSubmit={handleJoin}>
              <label>
                <span>{content.nameLabel}</span>
                <input value={name} onChange={(event) => setName(event.target.value)} placeholder={content.namePlaceholder} />
              </label>
              <label>
                <span>{content.emailLabel}</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={content.emailPlaceholder}
                />
              </label>
              <button type="submit" className="btn primary">
                {content.joinButton}
              </button>
              {formError ? <p className="community-form__error">{formError}</p> : null}
            </form>
          )}
          <form className="community-form" onSubmit={handlePost}>
            <label>
              <span>{content.postLabel}</span>
              <textarea
                rows={4}
                value={postBody}
                onChange={(event) => setPostBody(event.target.value)}
                placeholder={content.postPlaceholder}
                disabled={!member}
              />
            </label>
            <button type="submit" className="btn primary" disabled={!member}>
              {content.postButton}
            </button>
          </form>
          <div className="community-posts">
            {posts.length === 0 ? <p className="mute">{content.emptyState}</p> : null}
            {posts.map((post) => (
              <article key={post.id} className="community-post">
                <div>
                  <strong>{post.author}</strong>
                  <span className="mono">{post.createdAt}</span>
                </div>
                <p>{post.body}</p>
              </article>
            ))}
          </div>
          <p className="community-console__note">{content.demoNote}</p>
        </div>
      </div>
    </section>
  );
}
