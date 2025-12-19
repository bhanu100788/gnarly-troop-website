"use client";

// components/SectionTeams.tsx
import React, { useMemo, useState } from "react";
import styles from "./SectionLeadershipGlobalAdvisory.module.css";
import members from "@/app/leadership/members-data.js";

export interface Person {
  id: string; // <-- string type
  name: string;
  role?: string;
  img?: string;
  href?: string | null;
  dataType?: string | null;
  bio?: string | null;
  priority?: string | number | null;
  [key: string]: any;
}

const DEFAULT_HIGH_PRIORITY = 999999;

// Convert priority to number safely
function getPriority(p: Person): number {
  if (p.priority == null) return DEFAULT_HIGH_PRIORITY;
  const n = Number(p.priority);
  return Number.isFinite(n) ? n : DEFAULT_HIGH_PRIORITY;
}

// Build URL using string id
function resolveHref(p: Person): string {
  if (p.bio && typeof p.bio === "string" && p.bio.trim() !== "") {
    return `/leadership/${String(p.id)}`;
  }
  return "#";
}

export default function SectionTeams() {
  const sectionA = useMemo(() => {
    return (members as Person[])
      .filter((p) => p.dataType === "global advisory and governing board")
      .slice()
      .sort((a, b) => getPriority(a) - getPriority(b));
  }, []);

  return (
    <div className={styles.page}>
      {/* -------------------------------- */}
      {/* 1 — GLOBAL ADVISORY AND GOVERNING BOARD */}
      {/* -------------------------------- */}
      <section aria-labelledby="section-a">
        <hr className={styles.separator} />
        <h2 id="section-a" className={styles.subHeading}>
          GLOBAL ADVISORY AND GOVERNING BOARD
        </h2>

        <div className={styles.wrapper2}>
          <div className={styles.grid}>
            {sectionA.map((p: Person) => (
              <a
                key={p.id}
                href={resolveHref(p)}
                className={`${styles.cardLink} ${
                  resolveHref(p) === "#" ? styles.disabledLink : ""
                }`}
              >
                <article
                  className={styles.card}
                  aria-label={p.name}
                  id={`leadership-${p.id}`}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={p.img || "/placeholder-profile.png"}
                      alt={p.name}
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.cardText}>
                    <h3 className={styles.personName}>{p.name}</h3>
                    <p className={styles.personRole}>{p.role}</p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
