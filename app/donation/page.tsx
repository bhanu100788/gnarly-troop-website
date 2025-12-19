"use client";

import React, { useState } from "react";
import DonationSectionWithForm, { DonationOption } from "@/components/sections/SectionDonation";
import SectionHeader from "@/components/sections/Header";
import SectionFooter from "@/components/sections/SectionFooter";

const donationOptions: DonationOption[] = [
  { id: "tier1", title: "Supporter", amount: "₹500", description: "Help a small community initiative." },
  { id: "tier2", title: "Champion", amount: "₹1000", description: "Support training for women & youth." },
  { id: "tier3", title: "Leader", amount: "₹5000", description: "Fund larger village development programs." },
];

export default function DonationsPage() {
  const [showDonationModal, setShowDonationModal] = useState(false);

  return (
    <div className="text-center py-20">
        <SectionHeader/>
      <h1 className="text-4xl font-bold mb-6">Support GTGF</h1>
      <p className="text-lg text-gray-700 mb-10">
        Your generosity transforms lives and strengthens villages.
      </p>

      <button
        onClick={() => setShowDonationModal(true)}
        className="bg-[#1155cc] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0f449c] transition-colors"
      >
        Donate Now
      </button>

      {showDonationModal && (
        <DonationSectionWithForm
          options={donationOptions}
          onClose={() => setShowDonationModal(false)}
        />
      )}
      <SectionFooter/>
    </div>
  );
}
