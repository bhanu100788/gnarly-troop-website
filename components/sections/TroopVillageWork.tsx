"use client";

import React, { useState } from "react";
import styles from "@/app/troop-village/TroopVillageWork.module.css";

interface WorkStep {
  id: string;
  title: string;
  description: string;
  image: string;
}

const workSteps: WorkStep[] = [
  {
    id: "assessment",
    title: "1. Village Needs Assessment",
    description:
      "Our team conducts a ground-level assessment by interacting with local communities, panchayat leaders, SHGs, and youth groups to understand priority challenges.",
    image:
      "/images/collaboration/troopvillage/img-1.jpg?w=800",
  },
  {
    id: "planning",
    title: "2. Community-Led Planning",
    description:
      "Troops facilitate inclusive planning meetings to ensure villagers identify their own solutions—ensuring ownership, transparency, and sustainability.",
    image:
      "/images/collaboration/troopvillage/img-2.jpg?w=800",
  },
  {
    id: "implementation",
    title: "3. On-Ground Implementation",
    description:
      "From skill development to digital literacy to agricultural innovation, troops work alongside villagers to turn plans into action.",
    image:
      "/images/collaboration/troopvillage/img-3.jpg?w=800",
  },
  {
    id: "monitoring",
    title: "4. Monitoring & Impact Tracking",
    description:
      "Regular surveys, digital dashboards, and field visits ensure projects stay on track and create measurable long-term impacts.",
    image:
      "/images/collaboration/troopvillage/img-4.jpg?w=800",
  },
];

export default function TroopVillageWork() {
  const [active, setActive] = useState<WorkStep | null>(null);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.inner}>
          <h2 className={styles.heading}>
            The Way Troops Work in Villages for Sustainable Development
          </h2>
          <p className={styles.subheading}>
            A grassroots-driven, inclusive, and transparent development model
            empowering rural communities.
          </p>

          {/* GRID */}
          <div className={styles.grid}>
            {workSteps.map((step) => (
              <div
                key={step.id}
                className={styles.card}
                onClick={() => setActive(step)}
              >
                <img src={step.image} className={styles.cardImage} />

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardSubtitle}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {active && (
        <div className={styles.modalOverlay} onClick={() => setActive(null)}>
          <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setActive(null)}>
              ×
            </button>

            <div className={styles.modalContent}>
              <img src={active.image} className={styles.modalImage} />
              <h3>{active.title}</h3>
              <p>{active.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
