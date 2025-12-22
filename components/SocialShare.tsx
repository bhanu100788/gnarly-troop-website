"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Send,
  Link as LinkIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface SocialShareProps {
  title: string;
}

export default function SocialShare({ title }: SocialShareProps) {
  const pathname = usePathname();
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}${pathname}`
      : "";

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    alert("Link copied!");
  };

  return (
    <div style={{ marginTop: 40 }}>
      <p style={{ fontWeight: 600, marginBottom: 12 }}>
        Share this story
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>

        {/* Twitter / X */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>

        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send />
        </a>

        {/* Telegram */}
        <a
          href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send />
        </a>

        {/* Email */}
        <a
          href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        >
          <Mail />
        </a>

        {/* Copy Link */}
        <button
          onClick={copyLink}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <LinkIcon />
        </button>
      </div>
    </div>
  );
}
