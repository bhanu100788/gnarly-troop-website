"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/SectionSummit.module.css";

type SummitItemId =
  | "parliamentarians"
  | "ambassadors"
  | "ceos"
  | "academicians";

interface SummitItem {
  id: SummitItemId;
  title: string;
  subtitle: string;
}

const summitItems: SummitItem[] = [
  {
    id: "parliamentarians",
    title: "Hon'ble Parliamentarians & Union Ministers",
    subtitle: " ",
  },
  {
    id: "ambassadors",
    title: "Ambassadors & Diplomats from partner nations",
    subtitle: " ",
  },
  {
    id: "ceos",
    title: "CEOs, Cultural Icons and Youth Leaders",
    subtitle: " ",
  },
  {
    id: "academicians",
    title: "Academicians, Entrepreneurs and Global Thinkers",
    subtitle: " ",
  },
];

const SectionSummit: React.FC = () => {
  const [activeItem, setActiveItem] = useState<SummitItemId | null>(null);
  const router = useRouter();

  const handleRegistrationClick = () => {
    router.push("/registration");
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.inner}>
          {/* TOP — BHARAT MANDAPAM IMAGE */}
          <div className={styles.mandapamWrapper}>
            <img
              src="/images/sections/bharat-mandapam.png"
              alt="Bharat Mandapam"
              className={styles.mandapamImage}
            />
          </div>

          {/* HEADING AREA */}
          <h1 className={styles.heading}>
            PADHARO MHARE DESH BHARAT GLOBAL LEADERSHIP SUMMIT
            <br />& CULTURAL EXCHANGE-2026
          </h1>

          <p className={styles.dates}>21st - 22nd FEBRUARY, 2026</p>

          <button
            type="button"
            onClick={handleRegistrationClick}
            className={styles.registrationButton}
          >
            Register Now
          </button>

          <p className={styles.venue}>VENUE : BHARAT MANDAPAM</p>

          {/* PM IMAGE + QUOTE */}
          <div className={styles.bottomLayout}>
            <div className={styles.pmColumn}>
              <img
                src="/images/sections/pm-img.png"
                alt="Prime Minister of India"
                className={styles.pmImage}
              />
            </div>

            <div className={styles.textColumn}>
              <p className={styles.quote}>
                “Today,{" "}
                <span style={{ color: "#1155cc" }}>
                  across its streets and institutions
                </span>
                , in its villages and cities, anchored in equal respect for all
                faiths; and in the melody of hundreds of its languages and
                dialects, India lives as one; India grows as one;{" "}
                <span style={{ color: "#1155cc" }}>
                  India celebrates as one
                </span>
                .”
              </p>

              <p className={styles.quoteAttribution}>
                – Shri Narendra Modi, Hon&apos;ble Prime Minister of India
              </p>
            </div>
          </div>

          {/* POPUP BUTTONS – BELOW IMAGE & QUOTE */}
          <div className={styles.participantRow}>
            {summitItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <button
                  className={styles.participantCard}
                  onClick={() => setActiveItem(item.id)}
                >
                  <span className={styles.participantTitle}>{item.title}</span>
                  <span className={styles.participantSubtitle}>
                    {item.subtitle}
                  </span>
                </button>
                {index < summitItems.length - 1 && (
                  <span className={styles.participantSeparator}>//</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeItem && (
        <Modal onClose={() => setActiveItem(null)}>
          {activeItem === "parliamentarians" && <ParliamentariansContent />}
          {activeItem === "ambassadors" && <AmbassadorsContent />}
          {activeItem === "ceos" && <CeosContent />}
          {activeItem === "academicians" && <AcademiciansContent />}
        </Modal>
      )}
    </>
  );
};

/* Modal & Content Components */

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

const ParliamentariansContent: React.FC = () => (
  <div className={styles.modalContent}>
    <h3>Hon&apos;ble Parliamentarians &amp; Union Ministers</h3>
    <p>Policy, governance, and leadership excellence for a developed Bharat.</p>
  </div>
);

const AmbassadorsContent: React.FC = () => (
  <div className={styles.modalContent}>
    <h3>Ambassadors &amp; Diplomats</h3>
    <p>Strengthening global partnerships and cultural cooperation.</p>
  </div>
);

const CeosContent: React.FC = () => (
  <div className={styles.modalContent}>
    <h3>CEOs, Cultural Icons &amp; Youth Leaders</h3>
    <p>Innovation, leadership, and youth-driven transformation.</p>
  </div>
);

const AcademiciansContent: React.FC = () => (
  <div className={styles.modalContent}>
    <h3>Academicians, Entrepreneurs &amp; Global Thinkers</h3>
    <p>Ideas shaping the future of inclusive global growth.</p>
  </div>
);

export default SectionSummit;
