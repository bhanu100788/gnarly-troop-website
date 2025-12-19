"use client";

import React, { useMemo, useState } from "react";
import styles from "@/app/registration/SectionRegistration.module.css";

type FormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  gender: string;
  state: string;
  district: string;
  termsAccepted: boolean;
  aadharNumber?: string;
  panNumber?: string;
};

type Errors = Partial<Record<keyof FormState | "form", string>>;

const stateDistrictMap: Record<string, string[]> = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur"],
  Delhi: ["New Delhi", "North Delhi", "South Delhi", "East Delhi"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Karnataka: ["Bengaluru Urban", "Mysuru", "Mangaluru", "Hubballi"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Noida"],
  "West Bengal": ["Kolkata", "Howrah", "Darjeeling", "Siliguri"],
};

const allStates = Object.keys(stateDistrictMap);

/* ================= HELPERS ================= */

const formatAadhaar = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 12);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
};

const unformatAadhaar = (value: string) => value.replace(/\s/g, "");

const formatPAN = (value: string) =>
  value
    .replace(/[^A-Za-z0-9]/g, "")
    .toUpperCase()
    .slice(0, 10);

const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

/* ================= COMPONENT ================= */

const SectionRegistration = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    gender: "",
    state: "",
    district: "",
    termsAccepted: false,
    aadharNumber: "",
    panNumber: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<"success" | "error" | null>(null);

  const districtsForSelectedState = useMemo(() => {
    return form.state ? stateDistrictMap[form.state] ?? [] : [];
  }, [form.state]);

  /* ================= CHANGE HANDLER ================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (name === "phone") {
      setForm((p) => ({ ...p, phone: value.replace(/\D/g, "").slice(0, 10) }));
      return;
    }

    if (name === "aadharNumber") {
      setForm((p) => ({ ...p, aadharNumber: formatAadhaar(value) }));
      return;
    }

    if (name === "panNumber") {
      setForm((p) => ({ ...p, panNumber: formatPAN(value) }));
      return;
    }

    if (type === "checkbox") {
      setForm((p) => ({
        ...p,
        [name]: (e.target as HTMLInputElement).checked,
      }));
      return;
    }

    if (name === "state") {
      setForm((p) => ({ ...p, state: value, district: "" }));
      return;
    }

    setForm((p) => ({ ...p, [name]: value }));
  };

  /* ================= VALIDATION ================= */

  const validate = () => {
    const e: Errors = {};

    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Valid email required.";
    if (!form.phone.match(/^\d{10}$/)) e.phone = "Phone must be 10 digits.";
    if (!form.gender) e.gender = "Select gender.";
    if (!form.state) e.state = "Select state.";
    if (!form.district) e.district = "Select district.";
    if (!form.termsAccepted) e.termsAccepted = "Accept terms.";

    const aadhaar = unformatAadhaar(form.aadharNumber || "");
    if (aadhaar.length !== 12) e.aadharNumber = "Aadhaar must be 12 digits.";

    if (!panRegex.test(form.panNumber || ""))
      e.panNumber = "PAN format: ABCDE1234F.";

    console.log(e);

    if (Object.keys(e).length) e.form = "Please fix the errors below.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      const payload = {
        ...form,
        aadharNumber: unformatAadhaar(form.aadharNumber || ""),
      };

      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      setPopup("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        organization: "",
        designation: "",
        gender: "",
        state: "",
        district: "",
        termsAccepted: false,
        aadharNumber: "",
        panNumber: "",
      });
      setErrors({});
    } catch {
      setPopup("error");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <h1 className={styles.heading}>Summit Registration Form</h1>

        <div className={styles.formCard}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                <span className={styles.labelText}>Full Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              {errors.name && <p className={styles.errorText}>{errors.name}</p>}
            </div>

            {/* Email */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                <span className={styles.labelText}>Email Address</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                />
              </label>
              {errors.email && (
                <p className={styles.errorText}>{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                <span className={styles.labelText}>Phone Number</span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  maxLength={10}
                />
              </label>
              <p className={styles.helperText}>Enter 10-digit mobile number.</p>
              {errors.phone && (
                <p className={styles.errorText}>{errors.phone}</p>
              )}
            </div>

            {/* Gender */}
            <div className={styles.fieldGroup}>
              <span className={styles.labelText}>Gender</span>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={form.gender === "Male"}
                    onChange={handleChange}
                  />
                  <span>Male</span>
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={form.gender === "Female"}
                    onChange={handleChange}
                  />
                  <span>Female</span>
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={form.gender === "Other"}
                    onChange={handleChange}
                  />
                  <span>Other</span>
                </label>
              </div>
              {errors.gender && (
                <p className={styles.errorText}>{errors.gender}</p>
              )}
            </div>

            {/* State / District */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>State</span>
                  <select
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select State</option>
                    {allStates.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </label>
                {errors.state && (
                  <p className={styles.errorText}>{errors.state}</p>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>District</span>
                  <select
                    name="district"
                    value={form.district}
                    onChange={handleChange}
                    required
                    disabled={!form.state}
                  >
                    <option value="">
                      {form.state ? "Select District" : "Select State first"}
                    </option>
                    {districtsForSelectedState.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    ))}
                  </select>
                </label>
                {errors.district && (
                  <p className={styles.errorText}>{errors.district}</p>
                )}
              </div>
            </div>

            {/* Organization */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                <span className={styles.labelText}>Organization</span>
                <input
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* Designation */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                <span className={styles.labelText}>Designation</span>
                <input
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                />
              </label>
            </div>

            {/* Aadhaar */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                <span className={styles.labelText}>Aadhaar Number</span>
                <input
                  name="aadharNumber"
                  value={form.aadharNumber}
                  onChange={handleChange}
                  placeholder="XXXX XXXX XXXX"
                />
              </label>
              {errors.aadharNumber && (
                <p className={styles.errorText}>{errors.aadharNumber}</p>
              )}
            </div>

            {/* PAN */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                <span className={styles.labelText}>PAN Number</span>
                <input
                  name="panNumber"
                  value={form.panNumber}
                  onChange={handleChange}
                  placeholder="ABCDE1234F"
                />
              </label>
              {errors.panNumber && (
                <p className={styles.errorText}>{errors.panNumber}</p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className={styles.fieldGroup}>
              <label className={styles.checkboxRow}>
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={form.termsAccepted}
                  onChange={handleChange}
                />
                <span>
                  I agree to the{" "}
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    terms &amp; conditions
                  </a>
                  .
                </span>
              </label>
              {errors.termsAccepted && (
                <p className={styles.errorText}>{errors.termsAccepted}</p>
              )}
            </div>

            {/* FORM ERROR */}
            {errors.form && <p className={styles.formError}>{errors.form}</p>}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </div>
      </section>

      {/* POPUP */}
      {popup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <h3>
              {popup === "success"
                ? "Registration Successful 🎉"
                : "Submission Failed ❌"}
            </h3>
            <p>
              {popup === "success"
                ? "Your registration has been submitted."
                : "Please try again later."}
            </p>
            <button onClick={() => setPopup(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionRegistration;
