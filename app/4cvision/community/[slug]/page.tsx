import { notFound } from "next/navigation";
import {
  featuredStory,
  largeCards,
  smallCards,
} from "@/app/data/communityStories";
import SocialShareFloating from "@/components/SocialShareFloating";


export default async function CommunityStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const allStories = [
    featuredStory,
    ...largeCards,
    ...smallCards,
  ];

  const story = allStories.find((s) => s.slug === slug);

  if (!story) return notFound();

  return (
    <section style={{ background: "#f5f3ef" }}>
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
          {story.title}
        </h1>

        <img
          src={story.imageSrc}
          alt={story.alt}
          style={{
            width: "100%",
            borderRadius: 16,
            marginBottom: 32,
          }}
        />

        <div
          style={{
            whiteSpace: "pre-line",
            fontSize: 18,
            lineHeight: 1.7,
            color: "#1f2937",
          }}
        >
          {story.body}
        </div>

        {/* ✅ Social Share */}
        <SocialShareFloating title={story.title} />
      </div>
    </section>
  );
}
