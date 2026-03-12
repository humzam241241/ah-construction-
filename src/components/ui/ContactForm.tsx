"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Thank you! We'll get back to you within 24 hours." });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setMessage({ type: "error", text: "Something went wrong. Please call us at 042-35299722 or 0314-5500113." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Muhammad Ahmed"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30 focus:border-[#1a3c5e] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            placeholder="+92 300 0000000"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30 focus:border-[#1a3c5e] transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30 focus:border-[#1a3c5e] transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30 focus:border-[#1a3c5e] transition-colors bg-white"
          >
            <option value="">Select a service</option>
            <option value="new-home-construction">New Home Construction</option>
            <option value="renovation">Renovation & Remodeling</option>
            <option value="infrastructure-civil">Infrastructure & Civil Work</option>
            <option value="maintenance-repair">Maintenance & Repair</option>
            <option value="general-contracting">General Contracting & Management</option>
            <option value="commercial-construction">Commercial Construction</option>
            <option value="industrial-construction">Industrial Construction</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1.5">
            Project Location
          </label>
          <input
            type="text"
            id="area"
            name="area"
            placeholder="DHA Phase 6, Lahore"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30 focus:border-[#1a3c5e] transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Describe your construction project — plot size, number of floors, current stage, timeline requirements..."
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]/30 focus:border-[#1a3c5e] transition-colors resize-none"
        />
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          {message.text}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-10 py-4 bg-[#e8a020] text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors text-sm inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
        {!isSubmitting && (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </button>
    </form>
  );
}
