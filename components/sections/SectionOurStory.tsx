"use client";
import React, { useState } from "react";

const timeline: TimelineItem[] = [
    {
    year: "2029",
    title: "ROADMAP TO VIKSIT BHARAT @2047",
    location: "New Delhi | Rome",
    date: "May 2029",
    desc: {
      executedAndOngoingTasks: [
        {
          title: "Vibrant Bharat Roadmap",
          description:
            "Submission of Vibrant Bharat Roadmap to: Hon’ble President of India | National Ministries | NITI Aayog",
        },
        {
          title: "National Frameworks ",
          description:
            "Citizen participation | Youth leadership | Cultural & tourism transformation | Climate-positive community models",
        },
        {
          title: "National Targets",
          description:
            "1 Crore youth engaged | 1,000 Community clusters empowered | Global recognition of India’s civilizational leadership",
        },
        
      ],
      leadershipOutcome: {
        summary:
          "GTGF directly contributes to: Climate resilience | Rural prosperity | Women-led entrepreneurship | Youth leadership | Cultural diplomacy | Tourism-led sustainable development",
      },
    },
  },
    {
    year: "2028",
    title: "CONSOLIDATION & NATIONAL SCALING",
    location: "New Delhi | Chicago",
    date: "May 2028",
    desc: {
      executedAndOngoingTasks: [
        {
          title: "Troop Model Village",
          description:
            "Expansion of Troop Model Village framework to 100+ districts.",
        },
        {
          title: "Digital Portal Launch",
          description:
            "Launch of Digital Troop Youth Leadership Portal.",
        },
        {
          title: "Cultural Festival",
          description:
            "National cultural festival showcasing tribal, rural, and youth innovation.",
        },
      ],
      leadershipOutcome: {
        summary:
          "Cultural economy strengthened as a pillar of development.",
      },
    },
  },
    {
    year: "2027",
    title: "INTERNATIONAL CULTURAL DIPLOMACY",
    location: "New Delhi | Dubai",
    date: "May 2027",
    desc: {
      executedAndOngoingTasks: [
        {
          title: "Cultural Exchange Summit",
          description:
            "International Cultural Exchange Summit with MEA alignment.",
        },
        {
          title: "My Country – My Pride ",
          description:
            "Launch of My Country – My Pride Global Youth Cohort.",
        },
        {
          title: "Rural Tourism",
          description:
            "Expansion of rural tourism, documentation, and storytelling.",
        },
        
      ],
      leadershipOutcome: {
        summary:
          "India positioned as a citizen-led cultural superpower.",
      },
    },
  },
    {
    year: "2026",
    title: "IMPLEMENTATION & MODEL VILLAGE DECLARATION",
    location: "New Delhi | London",
    date: "21 FEB 2026",
    desc: {
      executedAndOngoingTasks: [
        {
          title: "Global Leadership Summit",
          description:
            "•	Global Leadership Summit & Tourism Excellence Series (2026–2029) launched from Bharat Mandapam (21 Feb 2026).",
        },
        {
          title: "Explore Bharat Leadership ",
          description:
            "Explore Bharat Leadership Expedition commencing nationwide.",
        },
        {
          title: "Troop Model Villages",
          description:
            "Declaration of 28 Troop Model Villages in 28 States.",
        },
        {
          title: "Launch of",
          description:
            "Troop Rural Development Centres | Sustainability Labs | One District – One Cultural Brand framework",
        },
        
      ],
      leadershipOutcome: {
        summary:
          "Grassroots development reframed as national pride and global inspiration.",
      },
    },
  },
  {
    year: "2025",
    title: "NATIONAL ALIGNMENT & GLOBAL SOFT POWER",
    location: "New Delhi | Sikkim",
    date: "May 2025",
    desc: {
      executedAndOngoingTasks: [
        {
          title: "Campaign Launch",
          description:
            "Launch of Intercultural Exchange, Volunteering Abroad, and Explore Bharat campaigns under ministerial guidance.",
        },
        {
          title: "Monthly Reviews",
          description:
            "Monthly reviews conducted at Malaviya Smriti Bhawan, New Delhi.",
        },
        {
          title: "Documentation",
          description:
            "Documentation of Vibrant Bharat initiatives, rural tourism projects, and SHG success stories.",
        },
        {
          title: "SHG Empowerment",
          description:
            "Empowerment of Self-Help Groups (SHGs) through SARAS Festival in New Delhi and Ludhiana.",
        },
        {
          title: "Recognition",
          description:
            "Recognition received from the Punjab Government for leadership in the SARAS Festival.",
        },
        {
          title: "Strategic Planning",
          description:
            "Strategic identification of Sikkim as a Troop Camping and Tourism Icon starting from 2026.",
        },
      ],
      leadershipOutcome: {
        summary:
          "GTGF positioned as a national knowledge partner for cultural tourism and SHG empowerment.",
      },
    },
  },
    {
    year: "2024",
    title: "NATIONAL LAUNCH & BRAND INDIA POSITIONING",
    location: "Jaipur | Noida",
    date: "May 2024",
    desc: {
      executedAndOngoingTasks: [
        {
          title: "Campaign Launch",
          description:
            "Formal launch of Padharo Mhare Desh Bharat at Patrika Gate, Jaipur.",
        },
        {
          title: "Troop Marathon",
          description:
            "Troop Marathon (1 Dec 2024, JLN Marg) under the mission Clean Air & Blue Skies.",
        },
        {
          title: "National Summit",
          description:
            "National Summit, Exhibition & Award Ceremony inaugurated byShri Gajendra Singh Shekhawat Ji, Hon’ble Union Minister of Culture & Tourism.",
        },
        {
          title: "Recognition ",
          description:
            "Recognition of grassroots leaders, artisans, educators, climate champions.",
        },
        {
          title: "Establishment",
          description:
            "Establishment of the first Troop Model Village prototype..",
        },
      ],
      leadershipOutcome: {
        summary:
          "Transition from pilot movement to national flagship initiative.Public–policy–citizen convergence achieved.",
      },
    },
  },
      {
    year: "2023",
    title: "REGIONAL & INTERNATIONAL EXPANSION",
    location: "Kathmandu | New Delhi",
    date: "May 2023",
    desc: {
      executedAndOngoingTasks: [
        {
          title: "Campaign Launch",
          description:
            "Launch of Cultural Exchange & Troop Internship Program in Nepal, with Kathmandu as the coordination hub.",
        },
        {
          title: "Cross-Border Engagement",
          description:
            "Cross-border youth engagement focusing on:Culture, volunteering, sustainability Himalayan ecology and heritage.",
        },
        {
          title: "Rural Development",
          description:
            "Expansion of Rural Development Centres (pilot phase).",
        },
        {
          title: "Women Empowerment",
          description:
            "Introduction of women empowerment and youth skill mapping initiatives.",
        },
      ],
      leadershipOutcome: {
        summary:
          "GTGF emerges as a South Asian youth bridge for cultural diplomacy.Strengthened people-to-people relations beyond borders.",
      },
    },
  },
      {
    year: "2022",
    title: "FOUNDATION YEAR – BUILDING THE TROOP PHILOSOPHY         ",
    location: "New Delhi",
    date: "May 2022",
    desc: {
      executedAndOngoingTasks: [
        {
          title: "Formal Establishment ",
          description:
            "Formal establishment of Gnarly Troop Global Federation as a youth-led national platform.",
        },
        {
          title: "Troop Motto",
          description:
            "Adoption of the Troop Motto: “My Country, My Responsibility, My Pride.”",
        },
        {
          title: "4C’s Vision",
          description:
            "Launch of the 4C’s Vision: Climate, Community, Culture, Cooperation.",
        },
        {
          title: "GT20 Summit",
          description:
            "Organisation of GT20 Summit at Ambedkar International Centre, New Delhi.",
        },
        {
          title: "Village Adoption",
          description:
            "Presentation of a successful adopted village model from Bihar, demonstrating: Rural Development Centre (RDC) Troop Academic Point Addiction-free community education Integrated health and livelihood awareness"
        },
        {
          title: "Cultural Exchange Hubs",
          description:
            "Creation of Urban–Rural Cultural Exchange Hubs connecting SHGs, artisans, and youth entrepreneurs with urban markets."
        },
      ],
      leadershipOutcome: {
        summary:
          "Proof of concept established for scalable rural transformation. Foundation laid for India-led grassroots diplomacy.",
      },
    },
  },
];

interface TimelineDescItem {
  title: string;
  description: string;
}

interface TimelineDescription {
  executedAndOngoingTasks: TimelineDescItem[];
  leadershipOutcome: {
    summary: string;
  };
}

interface TimelineItem {
  year: string;
  title: string;
  location: string;
  date: string;
  desc: TimelineDescription;
}

interface OurStoryProps { heroImage?: string; videosLink?: string; }
export default function SectionOurStory({
  heroImage,
  videosLink,
}: OurStoryProps) {
  const [expandedYears, setExpandedYears] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpand = (year: string) => {
    setExpandedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroImage || '/images/collaboration/OurStory/our-story-hero.jpg'})` }}
      >
        <div className="bg-black/50">
          <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest">Our story</p>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                An Empowerment Initiative by Gnarly Troop Global Federation
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-100">
                (Under the Flagship Campaign – “PadharoMhare Desh Bharat | Welcome to My Country, India”)
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href={videosLink}
                  className="inline-block bg-white text-black py-2 px-4 rounded-md font-medium shadow"
                >
                  Watch our videos
                </a>
                <a href="#timeline" className="inline-block py-2 px-4 border border-white rounded-md font-medium">
                  See timeline
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Our story</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We invite grant partners, universities, CSR collaborators, ministries, and global agencies to join hands with Gnarly Troop Global Federation in building Rural Vibrant Bharat.
            </p>

            <div className="mt-8">
              <figure className="overflow-hidden rounded-lg shadow">
                <img src="/images/collaboration/OurStory/s1.jpg" alt="Success Story" className="w-full h-64 object-cover" />
                <figcaption className="p-4 text-sm text-gray-600">Rural Vibrant Bharat, let us transform villages into global business destinations.</figcaption>
              </figure>
            </div>

            <div id="timeline" className="mt-12">
              <h3 className="text-xl font-semibold">Timeline</h3>
              <div className="mt-6 space-y-6">
              {timeline.map((item) => {
              const isExpanded = expandedYears[item.year];
              const tasks = item.desc.executedAndOngoingTasks;
              const visibleTasks = isExpanded ? tasks : tasks.slice(0, 2);

              return (
                <div
                  key={item.year}
                  className="border-l-4 border-gray-200 pl-6"
                >
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="text-lg font-semibold">
                      {item.year} — {item.title}
                    </h3>
                    <span className="text-sm text-gray-600">
                      {item.location} • {item.date}
                    </span>
                  </div>

                  {/* TASKS */}
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
                    {visibleTasks.map((task, index) => (
                      <li key={index}>
                        <span className="font-semibold">{task.title}:</span>{" "}
                        {task.description}
                      </li>
                    ))}
                  </ul>

                  {/* TOGGLE */}
                  {tasks.length > 2 && (
                    <button
                      onClick={() => toggleExpand(item.year)}
                      className="mt-3 text-sm font-medium text-blue-600 hover:underline"
                    >
                      {isExpanded ? "Show less ▲" : "Show more ▼"}
                    </button>
                  )}

                  {/* LEADERSHIP OUTCOME */}
                  <p className="mt-4 font-medium text-gray-800">
                    {item.desc.leadershipOutcome.summary}
                  </p>
                </div>
              );
            })}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h4 className="font-semibold">Learn more</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#" className="text-blue-600 hover:underline">Our work</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Partners of Human Potential</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Watch our videos</a></li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h4 className="font-semibold">Quick facts</h4>
              <p className="mt-2 text-sm text-gray-600">Since 2000, the foundation has invested billions to help partners scale high-impact solutions.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-semibold">Watch the latest photos to learn more</h3>
          <p className="mt-2 text-gray-600">Explore the latest photos from the Gnarly Foundation.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img src="/images/collaboration/OurStory/s2.jpg" alt="" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="font-semibold">Technology, Training & Entrepreneurship for Every Household</h5>
                <p className="text-sm text-gray-600 mt-2">RDCs are the backbone of GTGF’s national mission: centres that combine learning, livelihoods, digital literacy, artisan training, startup incubation, and ODOP strengthening.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img src="/images/collaboration/OurStory/s3.jpg" alt="" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="font-semibold">Strengthening Education as GTGF’s Lifelong Mission</h5>
                <p className="text-sm text-gray-600 mt-2">GTGF makes education the foundation of future leadership, ensuring children and youth are globally aware, technologically skilled, and socially responsible.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img src="/images/collaboration/OurStory/s4.jpg" alt="" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h5 className="font-semibold">From Job Seekers to Job Creators</h5>
                <p className="text-sm text-gray-600 mt-2">GTGF trains youth to become entrepreneurs, innovators, and climate-resilient leaders Eco-tourism entrepreneurship Digital freelancing & remote-work skills Rural startup incubation food processing skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
