"use client";

import { ArrowRight, ArrowLeft, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function ConsultationFormSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
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

    // Initial check on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    // Intercept clicks on links that go to #contact to ensure it opens smoothly
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

    // Prevent body scrolling when modal is open
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
    // Remove hash without scrolling
    window.history.pushState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  };

  const handleNext = () => {
    if (step === 1 && !formData.budgetConfirmation) {
      alert("Please confirm your budget to proceed.");
      return;
    }
    setStep((s) => Math.min(s + 1, 3));
  };

  const handlePrev = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been submitted successfully.");
    closeModal();
    setTimeout(() => {
      setStep(1);
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
    }, 500); // reset after taking it out of view
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#1A2E22]/40 backdrop-blur-[2px]">
      {/* Click outside to close */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={closeModal}
      ></div>

      <div className="relative w-full max-w-[900px] bg-white rounded-2xl md:rounded-[24px] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col md:flex-row h-[90vh] md:h-auto md:min-h-[550px] md:max-h-[85vh]">
        {/* Mobile Header Tabs (visible only on small screens) */}
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
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === s.id ? "bg-white/20" : step > s.id ? "bg-[#2E8B7A] text-white" : "bg-gray-200 font-bold"}`}
              >
                {step > s.id ? "✓" : s.id}
              </div>
              <span className="text-xs font-semibold">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Sidebar for Desktop */}
        <div className="hidden md:flex flex-col w-[300px] shrink-0 bg-[#F4F9F8] p-10 border-r border-[#2E8B7A]/10 relative">
          <button
            onClick={closeModal}
            className="absolute top-4 left-4 p-2 text-gray-400 hover:text-gray-800 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="mt-8 mb-12 relative z-10">
            <h2 className="text-[26px] font-semibold text-[#1F2937] tracking-tight leading-tight">
              Create <br />
              project inquiry
            </h2>
          </div>

          <div className="relative flex-1">
            {/* Vertical line connecting steps */}
            <div className="absolute left-[15px] top-2 bottom-[60px] w-[2px] bg-gray-200 z-0"></div>

            <div className="flex flex-col gap-10 relative z-10">
              {[
                { id: 1, label: "Budget Check" },
                { id: 2, label: "Personal Details" },
                { id: 3, label: "Project Brief" },
              ].map((s) => (
                <div key={s.id} className="flex gap-4 group items-start">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors z-10 ring-8 ring-[#F4F9F8] ${step === s.id ? "bg-[#2E8B7A] text-white shadow-md" : step > s.id ? "bg-[#2E8B7A] text-white" : "bg-gray-200 text-gray-500 font-medium"}`}
                  >
                    {step > s.id ? "✓" : s.id}
                  </div>
                  <div className="pt-1.5 flex-1 max-w-[150px]">
                    <span
                      className={`text-[15px] block ${step === s.id ? "font-bold text-gray-900" : step > s.id ? "font-medium text-gray-500" : "font-medium text-gray-400"}`}
                    >
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
          <button
            onClick={closeModal}
            className="md:hidden absolute top-4 right-4 z-50 p-2 text-gray-400 hover:text-gray-800 bg-white/80 rounded-full shadow-sm"
          >
            <X size={20} />
          </button>

          <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12 hide-scrollbar">
            <form
              onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}
              className="max-w-md mx-auto h-full flex flex-col justify-center min-h-full"
            >
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full justify-center">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-800 mb-6">
                    Budget Confirmation
                  </h3>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-sm">
                    Our customized web development projects start at{" "}
                    <strong>₹50,000</strong>.Are you comfortable with this
                    investment range?
                  </p>

                  <div className="flex flex-col gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, budgetConfirmation: "Yes" });
                        setTimeout(() => setStep(2), 300);
                      }}
                      className={`w-full p-5 text-left border-2 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                        formData.budgetConfirmation === "Yes"
                          ? "border-[#2E8B7A] bg-[#eef7f6]"
                          : "border-gray-100 hover:border-gray-200 bg-gray-50/50"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${formData.budgetConfirmation === "Yes" ? "bg-[#2E8B7A] border-[#2E8B7A] text-white" : "border-gray-300 bg-white text-transparent"}`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span
                        className={`font-semibold text-sm ${formData.budgetConfirmation === "Yes" ? "text-[#2E8B7A]" : "text-gray-700"}`}
                      >
                        Yes, I'm comfortable with this range
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, budgetConfirmation: "No" });
                        setTimeout(() => setStep(2), 300);
                      }}
                      className={`w-full p-5 text-left border-2 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                        formData.budgetConfirmation === "No"
                          ? "border-red-400 bg-red-50"
                          : "border-gray-100 hover:border-gray-200 bg-gray-50/50"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${formData.budgetConfirmation === "No" ? "bg-red-400 border-red-400 text-white" : "border-gray-300 bg-white text-transparent"}`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 3L3 9M3 3L9 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span
                        className={`font-semibold text-sm ${formData.budgetConfirmation === "No" ? "text-red-600" : "text-gray-700"}`}
                      >
                        No, this exceeds my current budget
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full justify-center space-y-8">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A2E22] mb-1">
                    Your Personal Details
                  </h3>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5 col-span-2 sm:col-span-1">
                        <label className="text-xs text-gray-500 font-medium">
                          First Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#2E8B7A] focus:border-[#2E8B7A] transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5 col-span-2 sm:col-span-1">
                        <label className="text-xs text-gray-500 font-medium">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#2E8B7A] focus:border-[#2E8B7A] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5 col-span-2 sm:col-span-1">
                        <label className="text-xs text-gray-500 font-medium flex items-center gap-1">
                          WhatsApp Number{" "}
                          <span className="text-red-400">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#2E8B7A] focus:border-[#2E8B7A] transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5 col-span-2 sm:col-span-1">
                        <label className="text-xs text-gray-500 font-medium">
                          Brand / Business Name
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.brand}
                          onChange={(e) =>
                            setFormData({ ...formData, brand: e.target.value })
                          }
                          className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#2E8B7A] focus:border-[#2E8B7A] transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full justify-center space-y-8">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1A2E22] mb-1">
                    Project Requirements
                  </h3>

                  <div className="space-y-6">
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-500 font-medium">
                        What service are you looking for?{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-md p-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#2E8B7A] focus:border-[#2E8B7A] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="New Shopify Store">
                          New Shopify Store
                        </option>
                        <option value="Shopify Store Redesign">
                          Shopify Store Redesign
                        </option>
                        <option value="Conversion Rate Optimization">
                          Conversion Rate Optimization
                        </option>
                        <option value="Custom Shopify Development">
                          Custom Shopify Development
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1.5 relative">
                      <label className="text-xs text-gray-500 font-medium">
                        Do you currently have a website?{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <select
                        required
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-md p-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#2E8B7A] focus:border-[#2E8B7A] transition-colors appearance-none cursor-pointer mb-2"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="No, starting from scratch">
                          No, starting from scratch
                        </option>
                        <option value="Yes">Yes</option>
                      </select>

                      {formData.website === "Yes" && (
                        <input
                          type="url"
                          placeholder="Paste link (e.g. https://...)"
                          value={formData.websiteLink}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              websiteLink: e.target.value,
                            })
                          }
                          className="w-full border border-gray-200 border-l-4 border-l-[#2E8B7A] rounded-md p-3 text-sm focus:outline-none focus:border-[#2E8B7A] transition-colors mt-2"
                          required
                        />
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-500 font-medium">
                        When would you like to begin?{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <select
                        required
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-md p-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#2E8B7A] focus:border-[#2E8B7A] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a timeframe
                        </option>
                        <option value="Immediately">Immediately</option>
                        <option value="Within 2 weeks">Within 2 weeks</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="Just exploring for now">
                          Just exploring for now
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-auto pt-8 flex items-center justify-between border-t border-gray-100 mt-12 bg-white sticky bottom-0 z-20 pb-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors bg-white px-4 py-2 -ml-4"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#2E8B7A] hover:bg-[#236b5d] text-white px-8 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-[#1A2E22] hover:bg-black text-white px-8 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm ml-auto"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
