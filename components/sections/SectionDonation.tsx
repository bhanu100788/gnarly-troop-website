"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface DonationOption {
  id: string;
  title: string;
  amount: string; // "500" or "₹500"
  description: string;
}

interface DonorInfo {
  name: string;
  email: string;
  country: string;
  state: string;
  district: string;
  pin: string;
  pan: string;
  aadhar: string;
}

interface DonationSectionProps {
  options: DonationOption[];
  onClose: () => void;
}

function loadRazorpayScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return reject();
    if ((window as any).Razorpay) return resolve();
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Razorpay SDK failed to load"));
    document.body.appendChild(script);
  });
}

export default function SectionDonation({ options, onClose }: DonationSectionProps) {
  const [selectedOption, setSelectedOption] = useState<DonationOption | null>(null);
  const [donorInfo, setDonorInfo] = useState<DonorInfo>({
    name: "",
    email: "",
    country: "",
    state: "",
    district: "",
    pin: "",
    pan: "",
    aadhar: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonorInfo({ ...donorInfo, [e.target.name]: e.target.value });
  };

  const handleDonateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return alert("Select a donation tier");

    setLoading(true);
    try {
      // 1) Create order on server (server creates Razorpay order & DB pending record)
      const res = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donationId: selectedOption.id,
          title: selectedOption.title,
          amount: selectedOption.amount,
          ...donorInfo,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert("Server error: " + (data?.error || "Unable to create order"));
        setLoading(false);
        return;
      }

      // 2) Load Razorpay script
      await loadRazorpayScript();

      // 3) Open checkout
      const optionsRzp: any = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.order.amount, // in paise
        currency: data.order.currency,
        name: "Your Organization",
        description: selectedOption.title,
        order_id: data.order.id,
        prefill: {
          name: donorInfo.name,
          email: donorInfo.email,
        },
        handler: function (response: any) {
          // client receives {razorpay_payment_id, razorpay_order_id, razorpay_signature}
          // We rely on webhook server-side to finalize payment & send receipt.
          alert("Payment initiated. You will receive an email receipt after the payment is confirmed.");
          // Optionally open receipt link (poll server to confirm) or redirect to a thank-you page
          setSelectedOption(null);
          onClose();
          setDonorInfo({
            name: "",
            email: "",
            country: "",
            state: "",
            district: "",
            pin: "",
            pan: "",
            aadhar: "",
          });
        },
        modal: {
          ondismiss: function () {
            console.log("Checkout closed");
          },
        },
      };

      const rzp = new (window as any).Razorpay(optionsRzp);
      rzp.open();
    } catch (err: any) {
      console.error("Donate error", err);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-start justify-center pt-32 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-xl p-8 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-3 right-3 text-2xl font-bold" onClick={onClose}>
            ×
          </button>

          {!selectedOption ? (
            <>
              <h2 className="text-3xl font-bold mb-6 text-center">Choose a Donation Tier</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {options.map((option) => (
                  <div
                    key={option.id}
                    className="bg-[#f5f3ef] p-6 rounded-lg shadow hover:shadow-lg cursor-pointer"
                    onClick={() => setSelectedOption(option)}
                  >
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-gray-700 mb-4">{option.description}</p>
                    <span className="text-2xl font-bold">{option.amount}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Donate: {selectedOption.title} ({selectedOption.amount})
              </h3>
              <form onSubmit={handleDonateSubmit} className="space-y-4">
                <input name="name" placeholder="Full Name" value={donorInfo.name} onChange={handleInputChange} required className="w-full p-3 border rounded-lg" />
                <input name="email" type="email" placeholder="Email" value={donorInfo.email} onChange={handleInputChange} required className="w-full p-3 border rounded-lg" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="country" placeholder="Country" value={donorInfo.country} onChange={handleInputChange} required className="w-full p-3 border rounded-lg" />
                  <input name="state" placeholder="State" value={donorInfo.state} onChange={handleInputChange} required className="w-full p-3 border rounded-lg" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="district" placeholder="District" value={donorInfo.district} onChange={handleInputChange} required className="w-full p-3 border rounded-lg" />
                  <input name="pin" placeholder="PIN Code" value={donorInfo.pin} onChange={handleInputChange} required className="w-full p-3 border rounded-lg" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="pan" placeholder="PAN Number" value={donorInfo.pan} onChange={handleInputChange} required className="w-full p-3 border rounded-lg" />
                  <input name="aadhar" placeholder="Aadhaar Number" value={donorInfo.aadhar} onChange={handleInputChange} required className="w-full p-3 border rounded-lg" />
                </div>

                <button type="submit" disabled={loading} className="w-full bg-[#1155cc] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0f449c] transition-colors">
                  {loading ? "Processing..." : "Submit Donation"}
                </button>
              </form>
              <div className="mt-4 text-center">
                <button type="button" className="text-sm text-gray-600 underline" onClick={() => setSelectedOption(null)}>
                  ← Back to tiers
                </button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
