"use client";

import React, { useState } from "react";
import styles from "@/app/how-we-are/HowWeAreSupporting.module.css";

type SupportId = "health" | "education" | "agriculture" | "technology";

interface SupportItem {
  id: SupportId;
  title: string;
  subtitle: string;
  image: string;
}

const supportItems: SupportItem[] = [
  {
    id: "health",
    title: "Global Health",
    subtitle: "Improving health systems worldwide",
    image:
      "/images/collaboration/troopvillage/img-4.jpg?w=800",
  },
  {
    id: "education",
    title: "Education Access",
    subtitle: "Better learning outcomes for all",
    image:
      "/images/collaboration/troopvillage/img-5.jpg?w=800",
  },
  {
    id: "agriculture",
    title: "Food Security",
    subtitle: "Boosting agricultural innovation",
    image:
      "/images/collaboration/troopvillage/img-6.jpg?w=800",
  },
  {
    id: "technology",
    title: "Tech for Good",
    subtitle: "Innovations for sustainable growth",
    image:
      "/images/collaboration/troopvillage/img-3.jpg?w=800",
  },
];

export default function HowWeAreSupporting() {
  const [activeItem, setActiveItem] = useState<SupportId | null>(null);

  return (
    <>
      {/* ================= SECTION ================= */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <h2 className={styles.heading}>How We Are Supporting</h2>
          <p className={styles.subheading}>
            Advancing ideas and initiatives to help solve the world’s toughest
            challenges.
          </p>

          {/* GRID CARDS */}
          <div className={styles.grid}>
            {supportItems.map((item) => (
              <button
                key={item.id}
                className={styles.card}
                onClick={() => setActiveItem(item.id)}
              >
                <img src={item.image} alt={item.title} className={styles.cardImage} />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardSubtitle}>{item.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {activeItem && (
        <Modal onClose={() => setActiveItem(null)}>
          {activeItem === "health" && <HealthContent />}
          {activeItem === "education" && <EducationContent />}
          {activeItem === "agriculture" && <AgricultureContent />}
          {activeItem === "technology" && <TechnologyContent />}
        </Modal>
      )}
    </>
  );
}

/* ---------------------- MODAL COMPONENT ---------------------- */

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => (
  <div className={styles.modalOverlay} onClick={onClose}>
    <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
      <button className={styles.modalClose} onClick={onClose}>
        ×
      </button>
      {children}
    </div>
  </div>
);

/* ---------------------- MODAL CONTENTS ---------------------- */

const HealthContent = () => (
  <div className={styles.modalContent}>
    <h3>Global Health</h3>
    <p>
      Supporting medical innovation, disease prevention, and stronger global
      healthcare systems.
    </p>
  </div>
);

const EducationContent = () => (
  <div className={styles.modalContent}>
    <h3>Education Access</h3>
    <p>Improving literacy, digital learning, and equitable education for all.</p>
  </div>
);

const AgricultureContent = () => (
  <div className={styles.modalContent}>
    <h3>Food Security</h3>
    <p>
      Investing in modern agricultural methods and innovations that boost food
      security.
    </p>
  </div>
);

const TechnologyContent = () => (
  <div className={styles.modalContent}>
    <h3>Tech for Good</h3>
    <p>
      Leveraging emerging technologies to support global development and social
      progress.
    </p>
  </div>
);
