"use client";

import React, { useMemo, useState } from "react";
import styles from "./SectionLeadershipHead.module.css";

export default function SectionTeams() {
  const [open, setOpen] = useState(false);

  return (
    // <div className={styles.page}>
    <div className={styles.introLayout}>
      {/* SIDEBAR */}
      <aside className={`${styles.sideNav} ${open ? styles.open : ""}`}>
        <a href="/about" className={styles.backLink}>
          ← About
        </a>
        <button
          className={styles.mobileToggle}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span>Leadership</span>
          <span className={styles.chevron}>{open ? "▲" : "▼"}</span>
        </button>

        <div className={styles.sideContent}>
          <ul className={styles.sideList}>
            <li>
              <a href="#section-a">Scientific Advisory Committee</a>
            </li>
            <li>
              <a href="#section-b">Executive Leadership</a>
            </li>
            <li>
              <a href="#section-c">Gnarly Troop Council</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
    // </div>
  );
}
