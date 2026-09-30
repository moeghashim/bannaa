"use client";

import Image from "next/image";
import { useState } from "react";
import { communityMediaCopy } from "@/lib/content";
import { youtubeVideoId } from "@/lib/community-media";
import type { CommunityImage } from "@/lib/community-media";
import type { Locale } from "@/lib/i18n";

export function CommunityMedia({ images, youtube, locale }: { images: CommunityImage[]; youtube: string; locale: Locale }) {
  const c = communityMediaCopy[locale];
  const id = youtubeVideoId(youtube);
  const [playing, setPlaying] = useState<string | null>(null);
  return <div className="community-media">
    {!!images.length && <div className="community-image-grid">{images.map(img => <Image key={img.id} src={img.src} alt={img.alt || img.name} width={800} height={600} unoptimized />)}</div>}
    {id && <div className="community-video">{playing === id ? <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`} title={c.videoTitle} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <button type="button" onClick={() => setPlaying(id)}><span aria-hidden="true">▷</span><strong>{c.play}</strong><small>{c.youtube}</small></button>}<a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">{c.openYoutube}</a></div>}
  </div>;
}
