"use client";

import { ArrowRight, ArrowLeft, X } from "lucide-react";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ConsultationFormSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    budgetConfirmation: "",
    name: "",
    email: "",
    phone: "",
    brand: "",
    service: "",
    website: "",
    websiteLink: "",
    timeline: "",
  });

  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(window.location.hash === "#contact");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.getAttribute("href") === "#contact") {
        e.preventDefault();
        window.location.hash = "contact";
        setIsOpen(true);
      }
    };
    window.addEventListener("click", handleClick);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("click", handleClick);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setError("");
    setFieldErrors({});
    setStep(1);
    window.history.pushState(null, "", window.location.pathname + window.location.search);
  };

  const validateStep = (currentStep: number) => {
    setError("");
    setFieldErrors({});
    const errors: Record<string, boolean> = {};

    if (currentStep === 1) {
      if (!formData.budgetConfirmation) {
        setError("Please select a budget option to proceed.");
        return false;
      }
    } else if (currentStep === 2) {
      if (formData.name.trim().length < 2) {
        setError("Please enter a valid name (at least 2 characters).");
        errors.name = true;
        setFieldErrors(errors);
        return false;
      }
      
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email.trim())) {
        setError("Please enter a valid email address.");
        errors.email = true;
        setFieldErrors(errors);
        return false;
      }
      
      const digitsOnly = formData.phone.replace(/\D/g, "");
      if (digitsOnly.length < 10) {
        setError("Please enter a valid 10-digit phone number.");
        errors.phone = true;
        setFieldErrors(errors);
        return false;
      }

      if (!formData.brand.trim()) {
        setError("Please enter your brand or business name.");
        errors.brand = true;
        setFieldErrors(errors);
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.service) {
        setError("Please select a service.");
        errors.service = true;
        setFieldErrors(errors);
        return false;
      }
      if (!formData.website) {
        setError("Please answer the website question.");
        errors.website = true;
        setFieldErrors(errors);
        return false;
      }
      if (formData.website === "Yes" && !formData.websiteLink.trim()) {
        setError("Please provide your current website link.");
        errors.websiteLink = true;
        setFieldErrors(errors);
        return false;
      }
      if (!formData.timeline) {
        setError("Please select a timeframe.");
        errors.timeline = true;
        setFieldErrors(errors);
        return false;
      }
    }
    return true;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
    setFieldErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((s) => Math.min(s + 1, 3));
    }
  };

  const handlePrev = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    
    setIsSubmitting(true);
    setError("");
    try {
      await addDoc(collection(db, "consultation_leads"), {
        ...formData,
        submittedAt: serverTimestamp(),
        source: "Consultation Modal",
      });
      setIsSubmitted(true);
      setFormData({
        budgetConfirmation: "",
        name: "",
        email: "",
        phone: "",
        brand: "",
        service: "",
        website: "",
        websiteLink: "",
        timeline: "",
      });
    } catch (err: any) {
      console.error("Error submitting lead:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#1A2E22]/40 backdrop-blur-[2px]">
      <div className="absolute inset-0 cursor-pointer" onClick={closeModal}></div>

      <div className="relative w-full max-w-[900px] bg-white rounded-2xl md:rounded-[24px] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col md:flex-row h-[90vh] md:h-auto md:min-h-[550px] md:max-h-[85vh]">
        {/* Mobile Header Tabs */}
        <div className="md:hidden flex overflow-x-auto hide-scrollbar border-b border-gray-100 p-4 bg-gray-50/80 shrink-0">
          {[
            { id: 1, label: "Budget" },
            { id: 2, label: "Basic Info" },
            { id: 3, label: "Project Details" },
          ].map((s) => (
            <div
              key={s.id}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${step === s.id ? "bg-[#2E8B7A] text-white shadow-sm" : step > s.id ? "bg-[#2E8B7A]/10 text-[#2E8B7A]" : "text-gray-400"}`}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === s.id ? "bg-white/20" : step > s.id ? "bg-[#2E8B7A] text-white" : "bg-gray-200 font-bold"}`}>
                {step > s.id ? "✓" : s.id}
              </div>
              <span className="text-xs font-semibold">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Sidebar Desktop */}
        <div className="hidden md:flex flex-col w-[300px] shrink-0 bg-[#F4F9F8] p-10 border-r border-[#2E8B7A]/10 relative">
          <button onClick={closeModal} className="absolute top-4 left-4 p-2 text-gray-400 hover:text-gray-800 transition-colors">
            <X size={20} />
          </button>

          <div className="mt-8 mb-12 relative z-10">
            <h2 className="text-[26px] font-semibold text-[#1F2937] tracking-tight leading-tight">Create <br /> project inquiry</h2>
          </div>

          <div className="relative flex-1">
            <div className="absolute left-[15px] top-2 bottom-[60px] w-[2px] bg-gray-200 z-0"></div>
            <div className="flex flex-col gap-10 relative z-10">
              {[
                { id: 1, label: "Budget Check" },
                { id: 2, label: "Personal Details" },
                { id: 3, label: "Project Brief" },
              ].map((s) => (
                <div key={s.id} className="flex gap-4 group items-start">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors z-10 ring-8 ring-[#F4F9F8] ${step === s.id ? "bg-[#2E8B7A] text-white shadow-md" : step > s.id ? "bg-[#2E8B7A] text-white" : "bg-gray-200 text-gray-500 font-medium"}`}>
                    {step > s.id ? "✓" : s.id}
                  </div>
                  <div className="pt-1.5 flex-1 max-w-[150px]">
                    <span className={`text-[15px] block ${step === s.id ? "font-bold text-gray-900" : step > s.id ? "font-medium text-gray-500" : "font-medium text-gray-400"}`}>
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col relative bg-white">
          <button onClick={closeModal} className="md:hidden absolute top-4 right-4 z-50 p-2 text-gray-400 hover:text-gray-800 bg-white/80 rounded-full shadow-sm">
            <X size={20} />
          </button>

          <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12 hide-scrollbar">
            {isSubmitted ? (
              <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 rounded-full bg-[#2E8B7A]/10 flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[#2E8B7A]">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#1A2E22] mb-4">Inquiry Received!</h3>
                <p className="text-[#1A2E22]/60 max-w-sm mb-8">Thank you for reaching out. Our team will review your details and get back to you within 24 hours.</p>
                <button onClick={closeModal} className="bg-[#1A2E22] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-black transition-colors">Close Window</button>
              </div>
            ) : (
              <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()} className="max-w-md mx-auto h-full flex flex-col justify-center min-h-full">
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full justify-center">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-800 mb-6">Budget Confirmation</h3>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-sm">Our customized web development projects start at <strong>₹50,000</strong>. Are you comfortable with this investment range?</p>
                    <div className="flex flex-col gap-4">
                      {["Yes", "No"].map((choice) => (
                        <button
                          key={choice}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, budgetConfirmation: choice as any });
                            setError("");
                            setTimeout(() => setStep(2), 300);
                          }}
                          className={`w-full p-5 text-left border-2 rounded-xl transition-all duration-300 flex items-center gap-4 ${formData.budgetConfirmation === choice ? (choice === "Yes" ? "border-[#2E8B7A] bg-[#eef7f6]" : "border-red-400 bg-red-50") : "border-gray-100 hover:border-gray-200 bg-gray-50/50"}`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${formData.budgetConfirmation === choice ? (choice === "Yes" ? "bg-[#2E8B7A] border-[#2E8B7A] text-white" : "bg-red-400 border-red-400 text-white") : "border-gray-300 bg-white"}`}>
                            {choice === "Yes" ? "✓" : "×"}
                          </div>
                          <span className={`font-semibold text-sm ${formData.budgetConfirmation === choice ? (choice === "Yes" ? "text-[#2E8B7A]" : "text-red-600") : "text-gray-700"}`}>
                            {choice === "Yes" ? "Yes, I'm comfortable with this range" : "No, this exceeds my current budget"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full justify-center space-y-8">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A2E22] mb-1">Your Personal Details</h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "First Name", field: "name", type: "text" },
                          { label: "Email Address", field: "email", type: "email" },
                        ].map((input) => (
                          <div key={input.field} className="space-y-1.5 col-span-2 sm:col-span-1">
                            <label className="text-xs text-gray-500 font-medium">{input.label} <span className="text-red-400">*</span></label>
                            <input
                              type={input.type}
                              value={(formData as any)[input.field]}
                              onChange={(e) => handleInputChange(input.field, e.target.value)}
                              className={`w-full border rounded-md p-3 text-sm focus:outline-none transition-colors ${fieldErrors[input.field] ? "border-red-500 bg-red-50/30" : "border-gray-200 focus:border-[#2E8B7A]"}`}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "WhatsApp Number", field: "phone", type: "tel" },
                          { label: "Brand / Business Name", field: "brand", type: "text" },
                        ].map((input) => (
                          <div key={input.field} className="space-y-1.5 col-span-2 sm:col-span-1">
                            <label className="text-xs text-gray-500 font-medium">{input.label} {input.field === "phone" && <span className="text-red-400">*</span>}</label>
                            <input
                              type={input.type}
                              value={(formData as any)[input.field]}
                              onChange={(e) => handleInputChange(input.field, e.target.value)}
                              className={`w-full border rounded-md p-3 text-sm focus:outline-none transition-colors ${fieldErrors[input.field] ? "border-red-500 bg-red-50/30" : "border-gray-200 focus:border-[#2E8B7A]"}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full justify-center space-y-8">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A2E22] mb-1">Project Requirements</h3>
                    <div className="space-y-6">
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-500 font-medium">What service are you looking for? <span className="text-red-400">*</span></label>
                        <select
                          value={formData.service}
                          onChange={(e) => handleInputChange("service", e.target.value)}
                          className={`w-full border rounded-md p-3 text-sm text-gray-700 bg-white focus:outline-none appearance-none cursor-pointer ${fieldErrors.service ? "border-red-500 bg-red-50/30" : "border-gray-200"}`}
                        >
                          <option value="" disabled>Select a service</option>
                          <option value="New Shopify Store">New Shopify Store</option>
                          <option value="Shopify Store Redesign">Shopify Store Redesign</option>
                          <option value="Conversion Rate Optimization">Conversion Rate Optimization</option>
                          <option value="Custom Shopify Development">Custom Shopify Development</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 relative">
                        <label className="text-xs text-gray-500 font-medium">Do you currently have a website? <span className="text-red-400">*</span></label>
                        <select
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          className={`w-full border rounded-md p-3 text-sm text-gray-700 bg-white focus:outline-none appearance-none cursor-pointer ${fieldErrors.website ? "border-red-500 bg-red-50/30" : "border-gray-200"}`}
                        >
                          <option value="" disabled>Select an option</option>
                          <option value="No, starting from scratch">No, starting from scratch</option>
                          <option value="Yes">Yes</option>
                        </select>
                        {formData.website === "Yes" && (
                          <input
                            type="text"
                            placeholder="Paste link (e.g. example.com)"
                            value={formData.websiteLink}
                            onChange={(e) => handleInputChange("websiteLink", e.target.value)}
                            className={`w-full border-l-4 border-l-[#2E8B7A] border rounded-md p-3 text-sm focus:outline-none mt-2 ${fieldErrors.websiteLink ? "border-red-500 bg-red-50/30" : "border-gray-200"}`}
                          />
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-500 font-medium">When would you like to begin? <span className="text-red-400">*</span></label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange("timeline", e.target.value)}
                          className={`w-full border rounded-md p-3 text-sm text-gray-700 bg-white focus:outline-none appearance-none cursor-pointer ${fieldErrors.timeline ? "border-red-500 bg-red-50/30" : "border-gray-200"}`}
                        >
                          <option value="" disabled>Select a timeframe</option>
                          <option value="Immediately">Immediately</option>
                          <option value="Within 2 weeks">Within 2 weeks</option>
                          <option value="Within 1 month">Within 1 month</option>
                          <option value="Just exploring for now">Just exploring for now</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-6 flex flex-col border-t border-gray-100 mt-12 bg-white sticky bottom-0 z-20 pb-4">
                  {error && <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs font-medium animate-in slide-in-from-bottom-2">{error}</div>}
                  <div className="flex items-center justify-between">
                    {step > 1 ? (
                      <button type="button" onClick={handlePrev} disabled={isSubmitting} className="text-sm font-semibold text-gray-500 hover:text-gray-800 px-4 py-2 -ml-4">Back</button>
                    ) : <div />}
                    {step < 3 ? (
                      <button type="button" onClick={handleNext} className="bg-[#2E8B7A] hover:bg-[#236b5d] text-white px-10 py-3 rounded-full text-sm font-semibold shadow-md active:scale-95 ml-auto">Next</button>
                    ) : (
                      <button type="submit" disabled={isSubmitting} className="bg-[#1A2E22] hover:bg-black text-white px-10 py-3 rounded-full text-sm font-semibold shadow-md active:scale-95 ml-auto flex items-center gap-2">
                        {isSubmitting ? <><div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" /> Submitting...</> : "Submit inquiry"}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
