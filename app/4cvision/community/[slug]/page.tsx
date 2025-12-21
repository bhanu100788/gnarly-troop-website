import { notFound } from "next/navigation";
import {
  featuredStory,
  largeCards,
  smallCards,
} from "@/app/data/communityStories";

/**
 * Next.js 16:
 * params is async → must await
 */
export default async function CommunityStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Combine all stories into one searchable list
  const allStories = [
    featuredStory,
    ...largeCards,
    ...smallCards,
  ];

  const story = allStories.find(
    (s) => s.slug === slug
  );

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
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 700,
            marginBottom: "24px",
          }}
        >
          {story.title}
        </h1>

        <img
          src={story.imageSrc}
          alt={story.alt}
          style={{
            width: "100%",
            borderRadius: "16px",
            marginBottom: "32px",
          }}
        />

        <div
          style={{
            whiteSpace: "pre-line",
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#1f2937",
          }}
        >
          {story.body}
        </div>
      </div>
    </section>
  );
}
