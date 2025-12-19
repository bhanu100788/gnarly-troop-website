"use client";

import { useRef, useState } from "react";
import styles from "./SectionClimate.module.css";
import ShareComponent from "@/components/sections/4CVision/SectionVisionShare";

interface LargeCard {
  id: number;
  kicker: string;
  title: string;
  imageSrc: string;
  alt: string;
  caption: string; // short preview (below image)
  body: string; // full story in popup
}

interface SmallCard {
  id: number;
  title: string;
  imageSrc: string;
  alt: string;
  caption: string; // short preview
  body: string; // full story
}

interface StoryForModal {
  title: string;
  imageSrc: string;
  alt: string;
  body: string;
}

const featuredStory = {
  title:
    "Transforming awareness into action, nurturing ecosystems, and empowering youth to lead India as the global beacon of environmental responsibility",
  imageSrc: "/images/visions/climate/feature-article.jpg",
  alt: "Featured article image",
  caption:
    "India stands today at a defining crossroads in the relationship between humanity and nature. Rapid industrialisation, unplanned expansion and unsustainable lifestyles have placed unprecedented pressure on our ecosystems...",
  body: `India stands today at a defining crossroads in the relationship between humanity and nature. Rapid industrialisation, unplanned urban expansion, deforestation, vehicle emissions, waste mismanagement, and unsustainable lifestyles have placed unprecedented pressure on our ecosystems. Air quality has deteriorated, water resources are diminishing, and soil fertility is weakening. What was once an environmental concern has now become a matter of survival, dignity, and national security.

The founding vision of the Gnarly Troop Global Federation recognises a fundamental truth: climate revival cannot be achieved by policies and technologies alone. It must be ignited within the hearts of people, anchored in values, and led by empowered youth. Under the 4C’s Vision, the Climate Pillar is not limited to conservation — it is a call to civilisational responsibility.

Through the flagship movement, “Welcome to My Country – India (Padharo Mhare Desh Bharat) – Global Leadership Summit & Cultural Exchange,” Gnarly Troop has launched a nationwide, youth-driven environmental mission dedicated to Clean Air, Blue Skies and a Green Future. This movement unites rural communities, urban citizens, students, environmentalists, defence forces, institutions, and international participants under a shared goal: to restore harmony between humanity and nature.

This is not symbolic activism. It is a structured, action-oriented, and measurable commitment to ecological restoration, sustainable living, biodiversity protection, and climate leadership. By integrating environmental action into culture, education, leadership and community life, the initiative plants the seeds of a greener, stronger and more conscious India.

Through this vision, India is not positioned as a victim of climate change, but as a global leader of environmental responsibility, ecological wisdom and sustainable civilisation.

Suggested Image Theme: A powerful panoramic image showing India’s landscapes—mountains, rivers, forests, cities and villages—blended with youth planting trees and a clear blue sky above.`,
};

const largeCards: LargeCard[] = [
  {
    id: 1,
    kicker: "NATIONAL GREEN MOVEMENT",
    title: "Annual Marathons & Cycling Missions for Clean Air and Blue Skies",
    imageSrc: "/images/visions/climate/section-1.jpg",
    alt: "Section 1 image",
    caption:
      "One of the most powerful symbols of Gnarly Troop’s Climate mission is the Annual Marathon for Clean Air and Blue Skies...",
    body: `Annual Marathons & Cycling Missions for Clean Air and Blue Skies
One of the most powerful symbols of Gnarly Troop’s Climate mission is the Annual Marathon for Clean Air and Blue Skies. More than just a physical event, the marathon is a national pledge to protect the planet. Thousands of citizens—students, professionals, athletes, soldiers, environmentalists, rural communities and international visitors—run together, united by one vision: “If we can run for our lives, we can also run for the life of the Earth.”

Each edition of the marathon is aligned with a concrete environmental commitment: planting thousands of trees, restoring green corridors, promoting car-free zones, raising awareness on air pollution, encouraging recyclable alternatives, and revitalising public gardens and water bodies. Alongside the marathon runs, nationwide cycling campaigns promote eco-friendly transportation and a healthy lifestyle. From city streets to village roads, participants ride together carrying the message of climate consciousness and sustainability. Every step and every pedal becomes an act of resistance against pollution and a step towards a cleaner future.

Suggested Image Theme: A mass marathon or cycling rally with banners saying Clean Air • Blue Skies • Gnarly Troop.`,
  },
  {
    id: 2,
    kicker: "THE GARDEN OF THE FUTURE",
    title: "HOW SMALL CHANGES CREATE BIG IMPACTS",
    imageSrc: "/images/visions/climate/section-2.jpg",
    alt: "Section 2 image",
    caption:
      "Through the annual Global Leadership Summit & Cultural Exchange, Gnarly Troop advances climate responsibility as a global duty...",
    body: `Through the annual “Welcome to My Country – India (Padharo Mhare Desh Bharat) – Global Leadership Summit & Cultural Exchange,” Gnarly Troop Global Federation advances climate responsibility as a global duty rooted in local action. By mobilizing youth, rural communities, institutions, and environmental leaders, the initiative promotes afforestation, clean energy education, sustainable tourism, plastic-free villages, water conservation, and biodiversity protection.

Indigenous wisdom is integrated with modern innovation to form powerful eco-solutions tailored to regional needs. Every plantation drive, clean air campaign, and green skill program contributes to a healthier planet. Gnarly Troop’s climate leadership aligns with the vision of Viksit Bharat, demonstrating that true national development begins with environmental stewardship and a collective commitment to protect Mother Earth for generations to come.`,
  },
];

const smallCards: SmallCard[] = [
  {
    id: 1,
    title: "YOUTH INTERNSHIPS & VOLUNTEERING",
    imageSrc: "/images/visions/climate/img-1.jpg",
    alt: "Youth internships and volunteering",
    caption:
      "Restoring ecosystems through action-based learning. Youth form the backbone of the Climate Pillar...",
    body: `Restoring ecosystems through action-based learning
Youth form the backbone of the Climate Pillar. Through internship, volunteering and restoration programs, young people from India and across the globe are placed directly in the heart of ecological action. They participate in forest restoration, village-level afforestation, biodiversity conservation, soil regeneration, organic farming, waste segregation, river cleaning and renewable energy awareness.

This is not theoretical environmental education. It is experiential, hands-on learning, where young individuals reconnect with the Earth—touching the soil, planting saplings, cleaning water sources, protecting wildlife habitats and learning indigenous ecological knowledge directly from rural communities.

In doing so, a generation of Eco-Leaders is born—leaders who view nature not as a resource, but as a sacred trust. They learn:
• Responsibility
• Sustainability
• Environmental ethics
• Intergenerational accountability
• Respect for ecosystems

They realise a simple truth: If we do not protect the Earth, the Earth will not protect us.

Suggested Image Theme: Youth group planting trees or working in a clean-up drive in a rural or forest area.`,
  },
  {
    id: 2,
    title: "EDUCATIONAL & CORPORATE WORKSHOPS",
    imageSrc: "/images/visions/climate/img-2.jpg",
    alt: "Educational and corporate workshops",
    caption:
      "Transforming mindset into climate leadership through structured workshops and seminars...",
    body: `Transforming mindset into climate leadership
Recognising that climate change is also a crisis of mindset, Gnarly Troop extends its mission into educational and corporate institutions. Structured workshops, seminars and leadership programs are conducted in schools, colleges, universities and corporate environments to promote sustainable thinking.

These programs focus on:
• Climate literacy
• Environmental ethics
• Green innovation
• Carbon footprint reduction
• Plastic-free and zero-waste practices
• Adoption of renewable energy
• Responsible consumption

Institutions are encouraged to become “Troop Green Campuses”, adopting eco-friendly design, green spaces, rainwater harvesting, solar energy, waste segregation, and sustainable food systems. Climate responsibility becomes a personal leadership mission, not an external problem.

A conscious workforce and educated youth turn into ambassadors of change, influencing families, businesses and future generations.

Suggested Image Theme: A workshop or seminar image with students and professionals engaging in a climate awareness session.`,
  },
  {
    id: 3,
    title: "TROOP CAMPING & NATURE RECONNECTION",
    imageSrc: "/images/visions/climate/img-3.jpg",
    alt: "Troop camping and nature reconnection",
    caption:
      "Returning humanity to the arms of nature through Troop Camping & Survival Learning Experiences...",
    body: `Returning humanity to the arms of nature
Modern life has distanced human beings from nature. To restore this bond, Gnarly Troop conducts Troop Camping & Survival Learning Experiences in forests, mountains, deserts, riversides, eco-villages and coastal regions.

Participants live close to nature—without comfort zones. They plant trees, clean rivers, cook together using sustainable methods, meditate under open skies, and learn the art of simplicity. These experiences develop resilience, gratitude, discipline and a deep emotional connection with the planet.

For many urban youth, it is the first time they hear the real silence of the forest, witness an unpolluted night sky, or drink water from a natural source. This moment becomes transformational. It creates protectors, not consumers.

Suggested Image Theme: Youth gathered around a campfire under a starry sky in a natural environment.`,
  },
  {
    id: 4,
    title: "POSITIONING INDIA AS A GLOBAL CLIMATE LEADER",
    imageSrc: "/images/visions/climate/img-4.jpg",
    alt: "India as a global climate leader",
    caption:
      "From ancient wisdom to modern responsibility, India is positioned as a solution provider...",
    body: `From ancient wisdom to modern responsibility
India’s civilisation has always revered nature. From the Vedas to Ayurveda, from rivers we worship to trees we protect, ecological consciousness is woven into India’s spiritual identity.

Through Gnarly Troop’s Climate Pillar, this wisdom is revived and presented on a global platform. India is positioned as a solution provider, not a climate burden. International delegates, institutions, youth leaders and environmental experts participate in the Global Climate Exchange Program, witnessing India’s integrated model of sustainability rooted in tradition and strengthened by modern science.

This initiative presents India as a living example of:
• Harmony with nature
• Community-based sustainability
• Youth-led transformation
• Spiritual environmental ethics

From villages to global stages, India rises as the guardian of Earth.

Suggested Image Theme: A symbolic image of India’s map shaped through trees or rivers, with a green glow.`,
  },
  {
    id: 5,
    title: "COMMUNITY AS THE FORCE OF CHANGE",
    imageSrc: "/images/visions/climate/img-5.jpg",
    alt: "Community as the force of change",
    caption:
      "Local action, global transformation. Villagers, farmers, artisans and youth form the grassroots engine...",
    body: `Local action, global transformation
The success of the Climate Pillar depends on community participation. Villagers, farmers, artisans, teachers, women’s groups, youth clubs and local leaders form the grassroots engine of transformation.

Together, they revive ponds, protect forests, create green belts, adopt sustainable farming, and preserve biodiversity. By participation, ownership is created. This ensures that environmental change is not dependent on external agencies but is rooted in local pride and responsibility.

Communities become guardians of their environment, passing sustainable values to future generations. This is where the mantra comes to life: Act Locally. Think Globally.

Suggested Image Theme: Rural community planting saplings along a road or water body.`,
  },
  {
    id: 6,
    title: "MESSAGE TO INDIA & THE WORLD",
    imageSrc: "/images/visions/climate/img-6.jpg",
    alt: "Message to India and the world",
    caption:
      "A generational promise. The Climate Pillar is more than an initiative; it is a moral movement...",
    body: `A generational promise
The Climate Pillar of Gnarly Troop is more than an initiative. It is a moral movement. A national duty. A promise to the future.

To every citizen of India and every citizen of the world, the message is clear: The Earth does not belong to us. We belong to the Earth. Let us not be remembered as the generation that destroyed its home. Let us be honoured as the generation that restored it.

This is our legacy. This is our responsibility. This is our pride.
My Country. My Responsibility. My Pride.
Clean Air. Blue Skies. Green Future.

Suggested Image Theme: A child planting a sapling under a bright blue sky with the Indian flag in the background.`,
  },
];

export default function SectionClimate() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // one modal for ALL “Full Story” actions
  const [activeStory, setActiveStory] = useState<StoryForModal | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const openStory = (story: StoryForModal) => {
    setActiveStory(story);
  };

  const handleCloseModal = () => {
    setActiveStory(null);
  };

  return (
    <section className={styles.sectionClimate}>
      {/* Title and Video section */}
      <div className={styles.topTealBand}>
        <div className={styles.inner}>
          <div className={styles.breadcrumb}>
            <a href="/" className={styles.link}>
              Home
            </a>{" "}
            <span className={styles.breadcrumbSpanSlash}>/</span>{" "}
            <a href="/" className={styles.link}>
              4C's Vision
            </a>{" "}
            <span className={styles.breadcrumbSpanSlash}>/</span>{" "}
            <a className={styles.linkSub}>Climate</a>{" "}
          </div>
          <center>
            <h1 className={styles.pageTitle}>CLIMATE</h1>
            <h1 className={styles.pageSubTitle}>
              STEWARDSHIP FOR A GREENER AND SUSTAINABLE TOMORROW
            </h1>
          </center>

          <p className={styles.lead}>
            Humanity faces a pivotal environmental moment. Climate change is no
            longer a distant threat—it is an immediate crisis, affecting lives,
            livelihoods, and ecosystems. The Climate Pillar of Gnarly Troop
            Global Federation’s 4C’s Vision positions environmental stewardship
            as a sacred duty, rooted in India’s civilizational ethos where the
            Earth is revered as Prithvi Mata and nature is sacred.
          </p>
          <p className={styles.lead}>
            Through youth-led campaigns, Troop Marathons, afforestation drives,
            wetland restoration, eco-tourism initiatives, and renewable energy
            programs, GTGF translates awareness into measurable action.
            Protecting nature becomes devotion; sustainability becomes national
            character. By nurturing ecosystems, conserving biodiversity, and
            empowering youth as Climate Commanders, India sets a global example
            for ecological responsibility and leadership.
          </p>

          <ShareComponent />

          {/* Hero video frame */}
          <div className={styles.heroFrame}>
            <div className={styles.heroScreen}>
              <video
                ref={videoRef}
                className={styles.heroVideo}
                src="/hero.mp4"
                playsInline
                controls
              />

              {!isPlaying && (
                <button
                  className={styles.playButton}
                  aria-label="Play video"
                  onClick={handlePlay}
                >
                  <span className={styles.playIcon} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured article strip */}
      <section className={styles.featuredStrip}>
        <div className={styles.inner}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredText}>
              <p className={styles.featuredKicker}>FEATURED ARTICLE</p>
              <h2 className={styles.featuredTitle}>{featuredStory.title}</h2>
              {/* caption only, 2 lines via CSS clamp */}
              <p
                className={`${styles.featuredBody} ${styles.smallCaptionClamp}`}
              >
                {featuredStory.caption}
              </p>
              <button
                type="button"
                className={styles.yellowButton}
                onClick={() =>
                  openStory({
                    title: featuredStory.title,
                    imageSrc: featuredStory.imageSrc,
                    alt: featuredStory.alt,
                    body: featuredStory.body,
                  })
                }
              >
                Read Full Story
              </button>
            </div>
            <div className={styles.featuredImageWrap}>
              <img
                src={featuredStory.imageSrc}
                alt={featuredStory.alt}
                className={styles.featuredImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main article grid */}
      <section className={styles.articleSection}>
        <div className={styles.inner}>
          {/* Two larger top cards: dynamic + Full Story */}
          <div className={styles.topArticleGrid}>
            {largeCards.map((card) => (
              <article key={card.id} className={styles.largeArticle}>
                <div className={styles.largeImageWrap}>
                  <img
                    src={card.imageSrc}
                    alt={card.alt}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.largeContent}>
                  <p className={styles.cardKicker}>{card.kicker}</p>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  {/* caption only */}
                  <p
                    className={`${styles.cardBody} ${styles.smallCaptionClamp}`}
                  >
                    {card.caption}
                  </p>
                  <button
                    type="button"
                    className={styles.yellowButton}
                    onClick={() =>
                      openStory({
                        title: card.title,
                        imageSrc: card.imageSrc,
                        alt: card.alt,
                        body: card.body,
                      })
                    }
                  >
                    Read Full Story
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* 3 x 2 smaller cards: dynamic + Full Story */}
          <div className={styles.smallGrid}>
            {smallCards.map((card) => (
              <article
                key={card.id}
                className={styles.smallCard}
                role="button"
                tabIndex={0}
                onClick={() =>
                  openStory({
                    title: card.title,
                    imageSrc: card.imageSrc,
                    alt: card.alt,
                    body: card.body,
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openStory({
                      title: card.title,
                      imageSrc: card.imageSrc,
                      alt: card.alt,
                      body: card.body,
                    });
                  }
                }}
              >
                <div className={styles.smallImageWrap}>
                  <img
                    src={card.imageSrc}
                    alt={card.alt}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.smallContent}>
                  <h4 className={styles.smallTitle}>{card.title}</h4>
                  {/* Caption: only 2 lines visible via CSS */}
                  <p
                    className={`${styles.smallBody} ${styles.smallCaptionClamp}`}
                  >
                    {card.caption}
                  </p>
                  <button
                    type="button"
                    className={styles.yellowButton}
                    onClick={(e) => {
                      e.stopPropagation(); // avoid double-trigger
                      openStory({
                        title: card.title,
                        imageSrc: card.imageSrc,
                        alt: card.alt,
                        body: card.body,
                      });
                    }}
                  >
                    Read Full Story
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popup / Modal for full story (works for ALL cards) */}
      {activeStory && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={handleCloseModal}
              aria-label="Close"
            >
              ×
            </button>

            <div className={styles.modalImageWrap}>
              <img
                src={activeStory.imageSrc}
                alt={activeStory.alt}
                className={styles.modalImage}
              />
            </div>

            <div className={styles.modalTextWrap}>
              <h3 className={styles.modalTitle}>{activeStory.title}</h3>
              <p className={styles.modalBody}>{activeStory.body}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
