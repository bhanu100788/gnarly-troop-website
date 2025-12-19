"use client";

import React, { useMemo, useState } from "react";
import styles from "./SectionLeadershipFilter.module.css";
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

export default function SectionLeadershipByGroupName() {
  /* ===== Collect unique group names dynamically ===== */
  const groupOptions = useMemo(() => {
    const set = new Set(
      (members as Person[]).map((p) => p.dataType).filter(Boolean)
    );
    return Array.from(set) as string[];
  }, []);

  const [selectedGroup, setSelectedGroup] = useState<string>(
    groupOptions[0] || ""
  );
  const [appliedGroup, setAppliedGroup] = useState<string>(
    groupOptions[0] || ""
  );

  const leaders = useMemo(() => {
    return (members as Person[])
      .filter((p) => p.dataType === appliedGroup)
      .slice()
      .sort((a, b) => getPriority(a) - getPriority(b));
  }, [appliedGroup]);

  if (!groupOptions.length) return null;

  return (
    <section className={styles.section}>
      {/* ===== FILTER BAR ===== */}
      <div className={styles.filterBar}>
        <select
          className={styles.select}
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          {groupOptions.map((group) => (
            <option key={group} value={group}>
              {group.toUpperCase()}
            </option>
          ))}
        </select>

        <button
          className={styles.searchButton}
          onClick={() => setAppliedGroup(selectedGroup)}
        >
          Search
        </button>
      </div>
      <hr className={styles.separator} />
      {/* ===== HEADING ===== */}
      <h2 className={styles.subHeading}>{appliedGroup.toUpperCase()}</h2>

      {/* ===== GRID ===== */}
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
