"use client";

import React, { useMemo, useState } from "react";
import styles from "./SectionLeadershipHead.module.css";
import SectionLeadershipQuickLinks from "@/components/sections/Leadership/SectionLeadershipQuickLinks";

export default function SectionTeams() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb}>
        <a href="/">Home</a>
        <span className={styles.separator}>›</span>
        <span className={styles.current}>Leadership</span>
      </nav>

      <div className={styles.introLayout}>
        {/* SIDEBAR */}
        <SectionLeadershipQuickLinks />

        {/* DESCRIPTION */}
        <main className={styles.main}>
          <h1 className={styles.heading}>Leadership</h1>

          <p className={styles.desc}>
            <b>Gnarly Founder:</b> One of the best indicators of success is the
            capacity to react swiftly and forcefully to setbacks in life. Not
            your athletic prowess, beauty, or the fact that you took first place
            in a pie-eating contest in year nine... It's an area I find
            absolutely fascinating because it predicts your overall gnarly
            success and happiness throughout your lifespan. Your capacity to
            adapt in troop and respond to the changing seasons of life. I've
            come to this conclusion about what it takes to develop resilience as
            a result of everything I've gone through, everyone I've talked to,
            and everything I've learned. We appreciate your participation in
            Gnarly Troop today.
          </p>
        </main>
      </div>
    </div>
  );
}
