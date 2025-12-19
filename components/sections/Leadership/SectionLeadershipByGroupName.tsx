"use client";

import React, { useMemo } from "react";
import styles from "./SectionLeadershipByGroupName.module.css";
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

interface SectionLeadershipProps {
  filterType: string; // 👈 dynamic value from Page.tsx
  heading?: string; // 👈 optional, for reuse
}

const DEFAULT_HIGH_PRIORITY = 999999;

function getPriority(p: Person): number {
  if (p.priority == null) return DEFAULT_HIGH_PRIORITY;
  const n = Number(p.priority);
  return Number.isFinite(n) ? n : DEFAULT_HIGH_PRIORITY;
}

export default function SectionLeadership({
  filterType,
  heading = "OUR LEADERSHIP",
}: SectionLeadershipProps) {
  const leaders = useMemo(() => {
    return (members as Person[])
      .filter((p) => p.dataType === filterType)
      .slice()
      .sort((a, b) => getPriority(a) - getPriority(b));
  }, [filterType]);

  if (!leaders.length) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.subHeading}>{heading}</h2>

      <div className={styles.grid}>
        {leaders.map((leader) => (
          <article key={leader.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <img
                src={leader.img || "/placeholder-profile.png"}
                alt={leader.name}
              />
            </div>
            <div className={styles.info}>
              <h3>{leader.name}</h3>
              {leader.role && <p>{leader.role}</p>}
            </div>
          </article>
        ))}
      </div>
      <hr className={styles.separator} />
    </section>
  );
}
