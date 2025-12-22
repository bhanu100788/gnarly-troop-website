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
import { useEffect, useState } from "react";

export default function SocialShareFloating({ title }: { title: string }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) return null;

  const url = `${window.location.origin}${pathname}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    alert("Link copied");
  };

  const baseStyle: React.CSSProperties = {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
    transition: "all 0.25s ease",
  };

  const hoverStyle: React.CSSProperties = {
    transform: "translateX(-4px)",
    boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
  };

  const Icon = ({
    href,
    children,
  }: {
    href?: string;
    children: React.ReactNode;
  }) => {
    const [hover, setHover] = useState(false);

    const style = hover
      ? { ...baseStyle, ...hoverStyle }
      : baseStyle;

    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={style}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        onClick={copyLink}
        style={{ ...style, border: "none", cursor: "pointer" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </button>
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <Icon href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}>
        <Facebook size={20} />
      </Icon>

      <Icon
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
      >
        <Twitter size={20} />
      </Icon>

      <Icon
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
      >
        <Linkedin size={20} />
      </Icon>

      <Icon
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
      >
        <Send size={20} />
      </Icon>

      <Icon href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}>
        <Mail size={18} />
      </Icon>

      <Icon>
        <LinkIcon size={18} />
      </Icon>
    </div>
  );
}
