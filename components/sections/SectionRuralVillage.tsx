"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// ----------------------
// Types
// ----------------------
interface SectionItem {
  title: string;
  description: string;
  points?: string[];
  dialogue: string;
}

export default function SectionRuralVillage() {
  const [activeSection, setActiveSection] = useState<string>("");

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Scroll spy – detect which section is active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );

    sectionRefs.current.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  // Scroll to section on sidebar click
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-white text-gray-900 flex">
      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="hidden md:block w-64 sticky top-0 h-screen border-r p-6 overflow-y-auto">
        <h3 className="text-lg font-bold mb-4">On this page</h3>

        <nav className="space-y-3">
          {sections.map((s, i) => {
            const id = s.title.toLowerCase().replace(/\s+/g, "-");
            return (
              <button
                key={i}
                onClick={() => scrollToSection(id)}
                className={`block text-left text-sm transition-all ${
                  activeSection === id
                    ? "text-blue-600 font-bold"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <section className="flex-1 max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-y py-6 text-center space-y-3"
        >
          <h1 className="text-2xl font-bold uppercase">
            GNARLY TROOP GLOBAL FEDERATION (GTGF)
          </h1>
          <p className="text-sm">
            Transforming Communities • Empowering Women • Strengthening
            Education • Connecting Local to Global
          </p>
          <p className="italic font-medium">
            Troop Spirit Motto: “My Country, My Responsibility, My Pride”
          </p>
          <p className="font-medium">
            National Mission: “Viksit Bharat with Gnarly Troop”
          </p>
        </motion.div>

        {/* CSR HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2"
        >
          <h2 className="text-xl font-bold uppercase">
            CSR–ODOP NATIONAL INITIATIVE
          </h2>
          <p className="text-gray-700">
            A Nationwide Vision for Sustainable Development & Next-Generation
            Leadership
          </p>
        </motion.div>

        {/* ---------------- AUTOMATIC SECTIONS LOOP ---------------- */}
        {sections.map((s, index) => {
          const id = s.title.toLowerCase().replace(/\s+/g, "-");

          return (
            <motion.section
              key={index}
              id={id}
              ref={(el) => {sectionRefs.current[index] = el;}}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-24"
            >
              <h3 className="text-xl font-bold uppercase">{s.title}</h3>

              <p className="mt-3 text-gray-700 leading-relaxed">
                {s.description}
              </p>

              {s.points && (
                <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-6">
                  {s.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}

              <blockquote className="mt-4 border-l-4 pl-4 italic text-gray-600">
                {s.dialogue}
              </blockquote>
            </motion.section>
          );
        })}

        {/* FINAL VISION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold uppercase">The Vision Ahead</h3>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Village by Village • Woman by Woman • Student by Student • Household
            by Household
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-6">
            <li>Rural and urban communities prosper equally</li>
            <li>Women lead economic and social development</li>
            <li>Youth become global-ready leaders</li>
            <li>Artisans and farmers earn with dignity</li>
            <li>Culture and heritage become engines of growth</li>
            <li>Digital and climate literacy reach every home</li>
            <li>Entrepreneurship becomes a way of life</li>
          </ul>

          <p className="mt-4 italic font-semibold text-center">
            “My Country, My Responsibility, My Pride.”
          </p>
        </motion.section>
      </section>
    </main>
  );
}

// ----------------------------------------------------------------------
// DATA: All GTGF Sections
// ----------------------------------------------------------------------
const sections: SectionItem[] = [
  {
    title: "Gnarly Troop National Development Mission",
    description:
      "Strengthening communities for India’s next century of growth. India’s cultural wisdom, craftsmanship, and human potential are unparalleled—yet millions remain disconnected from opportunities.",
    points: [
      "Digital literacy & financial awareness",
      "Skill development in crafts, agriculture, food processing, services",
      "Climate resilience and sustainable livelihoods",
      "Market linkage for entrepreneurs",
      "Women-led economic strengthening",
      "Access to online marketplaces & buyers",
    ],
    dialogue:
      "Every community has the power to change the world. We are here to unlock that power.",
  },
  {
    title: "Women Empowerment: India’s Strongest Economic Force",
    description:
      "Women remain the backbone of households and community stability. GTGF transforms this strength into leadership.",
    points: [
      "SHG strengthening & micro-enterprise incubation",
      "Digital banking & e-market confidence",
      "Climate-smart livelihood training",
      "Leadership in governance & cooperatives",
      "Branding & market access",
    ],
    dialogue: "Every woman deserves dignity. Every mother deserves opportunity.",
  },
  {
    title: "Rural Development Centres (RDCs)",
    description:
      "RDCs combine learning, livelihoods, artisan training, digital literacy, and ODOP strengthening to uplift households.",
    points: [
      "Digital basics: smartphone, UPI, online safety",
      "Entrepreneurship & startup formation",
      "Climate-smart agriculture",
      "E-commerce & digital sales",
      "Youth & women micro-enterprises",
    ],
    dialogue:
      "A Digital India must include every village, every home, every hand.",
  },
  {
    title: "Education: Empowering Tool for Nation-Building",
    description:
      "Education becomes the foundation of future leadership, ensuring youth are skilled, aware, and responsible.",
    points: [
      "Digital classrooms & STEAM tools",
      "Leadership & values-based learning",
      "School-to-RDC integration",
      "Career pathways & mentorship",
      "Community libraries",
    ],
    dialogue: "Youth are not the future—they are the present.",
  },
  {
    title: "Urban–Rural Cultural Exchange Hubs",
    description:
      "GTGF connects rural artisans and youth with national/global markets through cultural exchange platforms.",
    points: [
      "District exhibitions & craft showcases",
      "International cultural exchange",
      "Export readiness & product design mentoring",
      "Social media storytelling",
    ],
    dialogue: "Culture is not just heritage—it is a global currency.",
  },
  {
    title: "Youth Entrepreneurship & Rural Startup Programs",
    description:
      "GTGF trains youth to become entrepreneurs, innovators, and climate-resilient leaders.",
    points: [
      "Eco-tourism entrepreneurship",
      "Freelancing & remote-work skills",
      "Rural startup incubation",
      "Agri-tech & food processing skills",
      "Leadership & civic responsibility",
    ],
    dialogue:
      "Opportunity should not be hunted in cities—it must be created in villages.",
  },
  {
    title: "Digital Awareness & Inclusion",
    description: "No family should remain excluded from India’s digital rise.",
    points: [
      "Cyber safety & digital confidence",
      "Telemedicine & digital health",
      "E-governance services",
      "AI-assisted learning",
      "Women-focused smartphone literacy",
    ],
    dialogue: "Digital empowerment is social empowerment.",
  },
  {
    title: "Local to Global Market Expansion",
    description:
      "GTGF enhances market visibility through branding, storytelling, and export facilitation.",
    points: [
      "E-commerce integration",
      "Global buyer networks",
      "District brand identity",
      "Retail partnerships",
      "International collaborations",
    ],
    dialogue: "Local identity is India’s global strength.",
  },
  {
    title: "CSR Alignment & National Collaboration",
    description:
      "Aligned with national priorities, GTGF invites collaboration with ministries, CSR partners, and state missions.",
    points: [
      "Ministry of Rural Development",
      "Ministry of Women & Child Development",
      "Ministry of MSME",
      "Ministry of Education",
      "Ministry of Skill Development",
    ],
    dialogue: "Collaboration makes development unstoppable.",
  },
];

