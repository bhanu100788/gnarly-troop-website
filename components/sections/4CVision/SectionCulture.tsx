"use client";

import { useRef, useState } from "react";
import styles from "./SectionCulture.module.css";
import ShareCompnent from "@/components/sections/4CVision/SectionVisionShare";

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
    "CULTURE — Reconnecting Youth and the World to India’s Timeless Heritage Reconnecting youth and the world to India’s timeless heritage, transforming culture into global leadership and conscious identity",
  imageSrc: "/images/visions/culture/feature-article.jpg",
  alt: "CULTURE — Reconnecting Youth and the World to India’s Timeless Heritage Reconnecting youth and the world to India’s timeless heritage, transforming culture into global leadership and conscious identity",
  caption:
    "India is not merely a geographical entity; it is one of the world’s most ancient and continuous living civilisations. Born ...",
  body: `
India is not merely a geographical entity; it is one of the world’s most ancient and continuous living civilisations. Born from sacred rivers, shaped by soaring mountains and guarded by centuries of wisdom, Bharat stands as a timeless sanctuary of art, spirituality, philosophy, science, and human consciousness. From the Vedas to the Upanishads, from classical dance to sacred architecture, from Ayurveda and Yoga to ancient universities like Takshashila and Nalanda, India is a civilisational teacher, not a follower.
Yet today, in an age dominated by digital noise and cultural imitation, a dangerous disconnect has emerged. Young generations, both within India and abroad, are slowly drifting away from their roots. Ancient languages are fading. Indigenous knowledge systems are disappearing. Sacred arts are becoming forgotten echoes. Globalisation has opened doors, but it has also blurred identity.
Recognising this profound crisis, Gnarly Troop Global Federation has placed Culture at the heart of its 4C’s Vision. Through its flagship initiative, “Welcome to My Country – India (Padharo Mhare Desh Bharat) – Global Leadership Summit & Cultural Exchange,” the Federation is spearheading a powerful cultural reawakening. This is not a programme of nostalgia; it is a structured, strategic movement to transform India’s heritage into a source of modern leadership, unity, and global respect.
Culture is no longer treated as entertainment or tourism, but as a leadership framework, a moral compass, and a civilisational identity. Youth are being reminded that they are not culture-less globals — they are the inheritors of a 5,000-year-old wisdom tradition.
Under the guiding principles of:
“My Country, My Responsibility, My Pride”
and
“Act Locally, Think Globally,”
Gnarly Troop is shaping a new generation of Cultural Ambassadors — grounded in their roots, confident in their heritage, and prepared to carry India’s consciousness into a rapidly changing world.
Suggested Image: A powerful collage of Indian heritage — temples, dance, scriptures, architecture, and youth standing together in traditional attire.

`,
};

const largeCards: LargeCard[] = [
  {
    id: 1,
    kicker: "Padharo Mhare Desh Bharat – A Living Cultural Journey",
    title: "",
    imageSrc: "/images/visions/culture/section-1.jpg",
    alt: "Section 1 image",
    caption:
      "The “Welcome to My Country – India (Padharo Mhare Desh Bharat)” initiative is not designed as an ordinary cultural tour...",
    body: `The “Welcome to My Country – India (Padharo Mhare Desh Bharat)” initiative is not designed as an ordinary cultural tour. It is a living, breathing civilisational journey that invites participants into the very soul of Bharat. It is here that heritage is not observed — it is experienced.
Indian and international participants travel through diverse regions of India, from the deserts of Rajasthan to the monasteries of the Himalayas, from coastal temples in the South to tribal settlements in the Northeast. They immerse themselves in:
• Folk music, dance and storytelling
• Indigenous crafts and handloom traditions
• Temple architecture and sacred geometry
• Traditional agriculture and ecological knowledge
• Ayurveda, Yoga and holistic sciences
• Tribal and rural arts, rituals and languages
• Sacred rivers, pilgrimage routes and historical sites
What no textbook can fully explain, the land itself teaches. Every village, every song, every ritual becomes a classroom of identity and respect.
This journey rekindles pride in Indian youth and instills deep admiration in international visitors. India is no longer just a destination — it becomes a teacher of humanity.
Suggested Image: International and Indian youth participating in folk dance or village rituals.
`,
  },
  {
    id: 2,
    kicker: "THE GARDEN OF THE FUTURE",
    title: "HOW SMALL CHANGES CREATE BIG IMPACTS",
    imageSrc: "/images/visions/culture/section-2.jpg",
    alt: "Section 2 image",
    caption:
      "At the heart of “Welcome to My Country – India (Padharo Mhare Desh Bharat)” lies a powerful celebration of India’s living...",
    body: `At the heart of “Welcome to My Country – India (Padharo Mhare
                  Desh Bharat)” lies a powerful celebration of India’s living
                  heritage. Gnarly Troop Global Federation creates a global
                  platform where folk artists, tribal communities, historians,
                  spiritual leaders, and youth ambassadors unite to showcase
                  India’s timeless traditions. Through cultural exhibitions,
                  performances, storytelling, crafts, culinary arts, and
                  language preservation programs, the initiative strengthens
                  national identity and builds meaningful international cultural
                  bonds. Every exchange becomes a bridge connecting
                  civilizations while reviving fading traditions and empowering
                  local custodians of heritage. By transforming culture into a
                  living global dialogue, Gnarly Troop reinforces India’s role
                  as a world teacher—leading humanity toward unity, respect, and
                  shared understanding under the vision of Viksit Bharat.
`,
  },
];

const smallCards: SmallCard[] = [
  {
    id: 1,
    title: "Culture as Leadership, Not Entertainment",
    imageSrc: "/images/visions/culture/img-1.jpg",
    alt: "Culture as Leadership, Not Entertainment",
    caption:
      "In modern society, culture has been reduced to performance. Stages, screens and commercial shows have replaced...",
    body: `In modern society, culture has been reduced to performance. Stages, screens and commercial shows have replaced meaning with mere display. Gnarly Troop redefines this idea entirely. Under its 4C’s Vision, culture is repositioned as a leadership force.
Participants are taught that Indian culture is:
• A system of values
• A discipline of life
• A philosophy of coexistence
• A model of ethical governance
• A blueprint for harmony
Core principles such as unity in diversity, respect for all life, harmony with nature and universal brotherhood become leadership values for participants. From this awareness emerges a new kind of leader — a Cultural Leader — one who carries wisdom, humility and global consciousness.
Such a leader does not imitate the world. They influence it.
This transformation makes India not just culturally rich, but culturally powerful in shaping global thought.
Suggested Image: A young Troop leader speaking before an audience with Indian symbols behind.
`,
  },
  {
    id: 2,
    title: "Cultural Internships & Heritage Volunteering",
    imageSrc: "/images/visions/culture/img-2.jpg",
    alt: "Cultural Internships & Heritage Volunteering",
    caption:
      "One of the most powerful tools in the Culture pillar is the Cultural Internship & Heritage Volunteering Program...",
    body: `One of the most powerful tools in the Culture pillar is the Cultural Internship & Heritage Volunteering Program. These immersive experiences take participants directly into the heart of India’s living traditions.
Youth work alongside:
• Artisans and craftsmen
• Temple historians and scholars
• Folk performers
• Agricultural elders
• Healers and storytellers
• Language teachers & archivists
Their purpose is not observation — it is participation. They document endangered practices, digitise ancient texts, assist artisans in market access, teach younger children, and revive community pride.
This work rescues heritage from extinction and turns it into opportunity. Forgotten skills gain new students. Dying traditions meet modern protection. Cultural knowledge moves from decline to revival.
In giving service, participants receive identity.
In offering respect, they inherit wisdom.
This is not preservation alone.
It is cultural resurrection.
Suggested Image: Participants learning pottery, weaving or manuscript writing with elders.
`,
  },
  {
    id: 3,
    title: "Troop Cultural Camps – Where Identity is Reborn",
    imageSrc: "/images/visions/culture/img-3.jpg",
    alt: "Troop Cultural Camps – Where Identity is Reborn",
    caption:
      "Troop Cultural Camps are sacred spaces of learning and transformation. Held in heritage villages...",
    body: `Troop Cultural Camps are sacred spaces of learning and transformation. Held in heritage villages, temple towns and eco-cultural regions, these camps immerse participants in a traditional way of life.
Here, youth:
• Wake with the sunrise
• Learn local music and dance
• Cook ancestral recipes
• Participate in rituals and festivals
• Meditate in sacred spaces
• Study history on living ground
It is not comfort that shapes character. It is experience.
Disconnected minds reconnect.
Confused hearts find clarity.
Lost identities return home.
These camps do not just teach history — they awaken belonging.
Suggested Image: Youth meditating at sunrise in a historical or temple environment.
`,
  },
  {
    id: 4,
    title: "India as the Cultural Teacher of the World",
    imageSrc: "/images/visions/culture/img-4.jpg",
    alt: "India as the Cultural Teacher of the World",
    caption:
      "In a world struggling with conflict, loneliness, moral decline and identity loss, India holds...",
    body: `In a world struggling with conflict, loneliness, moral decline and identity loss, India holds a timeless answer:
Vasudhaiva Kutumbakam — The World is One Family.
Through this initiative, international participants do not arrive as tourists, but as students of a great civilisation. They learn:
• Spiritual balance in a material world
• Unity beyond religion and race
• Conscious living over consumerism
• Moral strength over domination
Culture thus becomes India’s greatest diplomatic strength. A soft power that shapes hearts, not borders.
In Gnarly Troop’s vision, every participant becomes a global ambassador of Indian consciousness.
Suggested Image: International participants joining hands around a symbolic cultural fire or diya.
`,
  },
  {
    id: 5,
    title: "Cultural Revival Mission – 28 States, 1000 Traditions",
    imageSrc: "/images/visions/culture/img-5.jpg",
    alt: "Cultural Revival Mission – 28 States, 1000 Traditions",
    caption:
      "The next phase aims to identify and revive over 1,000 endangered traditions across 28 Indian states...",
    body: `The next phase aims to identify and revive over 1,000 endangered traditions across 28 Indian states. Each region will serve as a Cultural Leadership Zone and knowledge centre.
Programs include:
• Heritage mapping
• Language preservation
• Cultural exchange initiatives
• Youth leadership networks
• Global university collaborations
This initiative will create the world’s largest youth-led cultural movement, rooted in India but impacting the globe.
From every village will rise a guardian of culture.
From every tradition, a new strength for India.
Suggested Image: Map of India highlighting 28 states and cultural symbols.

`,
  },
  {
    id: 6,
    title: "A Message to the Youth of India & the World",
    imageSrc: "/images/visions/culture/img-6.jpg",
    alt: "A Message to the Youth of India & the World",
    caption:
      "You are not merely students, professionals or travellers. You are the...",
    body: `You are not merely students, professionals or travellers.
You are the inheritors of an ancient civilisation.
When you carry your culture with pride, you stand unshaken.
When you honour your roots, your future strengthens.
When you understand your heritage, the world listens.
This movement is not about returning to the past.
It is about moving into the future with the strength of 5,000 years behind you.
My Country. My Responsibility. My Pride.
My Culture. My Roots. My Power.
Suggested Image: A confident young leader standing with Indian heritage in the background, holding the Gnarly Troop flag.`,
  },
];

export default function SectionCooperation() {
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
    <section className={styles.sectionCulture}>
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
            <a className={styles.linkSub}>Culture</a>{" "}
          </div>
          <center>
            <h1 className={styles.pageTitle}>CULTURE</h1>
            <h1 className={styles.pageSubTitle}>
              REVIVING CIVILIZATION, IGNITING IDENTITY
            </h1>
          </center>

          <p className={styles.lead}>
            Culture is consciousness; it is the essence of civilization, not
            mere performance. India’s heritage spans millennia—from Vedic wisdom
            to scientific discovery, from spirituality to statecraft—shaping the
            world’s moral and intellectual compass. GTGF’s Culture Pillar
            restores this legacy by reconnecting youth and global communities
            with living heritage through traditional arts, indigenous knowledge,
            language preservation, yoga, Ayurveda, heritage walks, and digital
            archives.
          </p>
          <p className={styles.lead}>
            Technology safeguards tradition, while youth become Cultural
            Custodians, promoting Indian wisdom globally. Through intercultural
            dialogue, artistic exchanges, spiritual tourism, and international
            delegations, GTGF elevates India’s role as a moral and spiritual
            teacher. Cultural revival becomes a vehicle for identity,
            consciousness, and global civilizational leadership.
          </p>

          <ShareCompnent />
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
