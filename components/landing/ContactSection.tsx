"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
    setFieldErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});
    const errors: Record<string, boolean> = {};

    // Name Validation
    if (form.name.trim().length < 2) {
      setError("Please enter a valid name (at least 2 characters).");
      errors.name = true;
      setFieldErrors(errors);
      return;
    }

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      errors.email = true;
      setFieldErrors(errors);
      return;
    }

    // Phone Validation (10 digits)
    const digitsOnly = form.phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setError("Please enter a valid 10-digit WhatsApp number.");
      errors.phone = true;
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contact_leads"), {
        ...form,
        submittedAt: serverTimestamp(),
        source: "Contact Section"
      });
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        category: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting contact lead:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-[#1A2E22]/10 rounded-xl px-4 py-3 text-sm text-[#1A2E22] placeholder-[#1A2E22]/30 focus:outline-none focus:border-[#1A2E22]/40 transition-colors";

  return (
    <section id="contact" className="py-12 md:py-24 max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <span className="border border-[#1A2E22]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide">
            Get In Touch
          </span>
          <h2
            className="reveal-text text-4xl md:text-5xl mt-6 mb-4"
            style={{ fontFamily: "var(--font-newsreader), serif" }}
          >
            Let's build your <br /> Shopify store.
          </h2>
          <p className="text-[#1A2E22]/60 text-sm mb-10 leading-relaxed">
            Tell us about your brand and we'll get back to you within 24 hours
            with a custom proposal.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="#1A2E22"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M22 6L12 13 2 6"
                      stroke="#1A2E22"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                label: "Email",
                value: "hello@kaelinstore.in",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      stroke="#1A2E22"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                label: "WhatsApp",
                value: "+91 98765 43210",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      stroke="#1A2E22"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.5"
                      stroke="#1A2E22"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
                label: "Location",
                value: "Pan India · Remote-First",
              },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#1A2E22]/10 flex items-center justify-center shadow-sm">
                  {icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wide text-[#1A2E22]/40 font-medium">
                    {label}
                  </div>
                  <div className="text-sm font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Shopify Partner",
              "250+ Stores Built",
              "Pan India",
              "GST Registered",
            ].map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-full bg-white border border-[#1A2E22]/10 text-xs font-medium shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 border border-[#1A2E22]/5 shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-[#1A2E22]/5 border border-[#1A2E22]/10 flex items-center justify-center mx-auto mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#1A2E22"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: "var(--font-newsreader), serif" }}
              >
                We&apos;ve received your request!
              </h3>
              <p className="text-sm text-[#1A2E22]/60">
                Our team will reach out within 24 hours with a custom proposal.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  className={`${inputClass} ${fieldErrors.name ? "border-red-500 bg-red-50/30" : ""}`}
                  placeholder="Your Name *"
                  required
                  value={form.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <input
                  type="email"
                  className={`${inputClass} ${fieldErrors.email ? "border-red-500 bg-red-50/30" : ""}`}
                  placeholder="Email Address *"
                  required
                  value={form.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <input
                type="tel"
                className={`${inputClass} ${fieldErrors.phone ? "border-red-500 bg-red-50/30" : ""}`}
                placeholder="WhatsApp / Phone Number *"
                required
                value={form.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
              <select
                className={inputClass}
                value={form.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
              >
                <option value="">Select Store Category</option>
                {[
                  "Fashion & Apparel",
                  "Electronics & Gadgets",
                  "Furniture & Home Décor",
                  "Beauty & Wellness",
                  "Food & Grocery",
                  "Sports & Fitness",
                  "Other",
                ].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <select
                className={inputClass}
                value={form.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
              >
                <option value="">Select Budget Range</option>
                {[
                  "₹50,000 – ₹75,000",
                  "₹75,000 – ₹1,50,000",
                  "₹1,50,000 – ₹3,00,000",
                  "₹3,00,000+",
                  "Not Sure",
                ].map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <textarea
                className={`${inputClass} h-28 resize-none`}
                placeholder="Tell us about your business & what you need..."
                value={form.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
              />
              {error && (
                <p className="text-xs font-medium text-red-500 text-center animate-in fade-in slide-in-from-top-1">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1A2E22] text-[#F3F1EB] py-3.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#1A2E22]/20 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#F3F1EB]/20 border-t-[#F3F1EB] rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Book Free Consultation →"
                )}
              </button>
              <p className="text-center text-[10px] text-[#1A2E22]/40">
                No spam. No commitment. Just a friendly conversation.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
