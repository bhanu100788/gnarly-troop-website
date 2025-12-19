"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./SectionLeadershipSliderShow.module.css";
import members from "@/app/leadership/members-data.js";

export interface Person {
  id: string;
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

function getPriority(p: Person): number {
  if (p.priority == null) return DEFAULT_HIGH_PRIORITY;
  const n = Number(p.priority);
  return Number.isFinite(n) ? n : DEFAULT_HIGH_PRIORITY;
}

export default function SectionLeadershipFilteredData() {
  const leaders = useMemo(() => {
    return (members as Person[])
      .filter((p) => p.dataType === "executive leadership committee members")
      .slice()
      .sort((a, b) => getPriority(a) - getPriority(b));
  }, []);

  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const sliderRef = useRef<HTMLDivElement>(null);

  /* SSR-safe viewport detection */
  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth >= 1024 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, leaders.length - visibleCount);

  const handlePrev = () => setIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setIndex((i) => Math.min(i + 1, maxIndex));

  if (!leaders.length) return null;

  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>EXECUTIVE TEAM</h2>

        <div className={styles.navDesktop}>
          <button onClick={handlePrev} disabled={index === 0}>
            ←
          </button>
          <button onClick={handleNext} disabled={index === maxIndex}>
            →
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <button
        className={`${styles.navMobile} ${styles.left}`}
        onClick={handlePrev}
        disabled={index === 0}
      >
        ←
      </button>
      <button
        className={`${styles.navMobile} ${styles.right}`}
        onClick={handleNext}
        disabled={index === maxIndex}
      >
        →
      </button>

      {/* SLIDER */}
      <div className={styles.viewport}>
        <div
          ref={sliderRef}
          className={styles.slider}
          style={{
            transform: `translateX(calc(-${
              index * (100 / visibleCount)
            }% + 12px))`,
          }}
        >
          {leaders.map((p) => (
            <article
              key={p.id}
              className={styles.card}
              style={{ flex: `0 0 ${100 / visibleCount}%` }}
            >
              <div className={styles.imageWrapper}>
                {p.href ? (
                  <a href={p.href} aria-label={`View profile of ${p.name}`}>
                    <img
                      src={p.img || "/placeholder-profile.png"}
                      alt={p.name}
                    />
                  </a>
                ) : (
                  <img src={p.img || "/placeholder-profile.png"} alt={p.name} />
                )}
              </div>

              <div className={styles.content}>
                <h3>{p.name}</h3>
                <p className={styles.role}>{p.role}</p>

                {p.href && (
                  <a
                    href={p.href}
                    className={styles.profileButton}
                    aria-label={`View profile of ${p.name}`}
                  >
                    View profile →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
