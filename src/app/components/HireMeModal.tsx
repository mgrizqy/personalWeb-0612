"use client";

import { X, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type FormStatus = "SUCCESS" | "FAILED" | "IDLE";

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const form = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<FormStatus>("IDLE");

  if (!isOpen) {
    return null;
  }

  const handleHireSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // safety check to ensure form ref exists
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2 || "",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      );

      setStatus("SUCCESS");
      form.current.reset();

      setTimeout(() => {
        setStatus("IDLE");
        onClose();
      }, 3500);
    } catch (error) {
      console.error("EmailJS :", error);
      setStatus("FAILED");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg m-4 bg-[#1d1c22] border border-white/10 rounded-2xl shadow-2xl p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-white mb-2">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-400 mb-6">
          I&apos;m excited to hear about your project. Fill out the form below
          to get in touch.
        </p>

        <form ref={form} onSubmit={handleHireSubmit}>
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email Address"
              className="form-input"
            />
            <input
              type="text"
              name="subject"
              required
              placeholder="Project Subject"
              className="form-input"
            />
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
              className="form-input"
            ></textarea>
          </div>
          <div className="text-right mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-[45px] inline-flex items-center justify-center gap-2 bg-[#adff30] text-black font-bold rounded-full px-6 hover:scale-105 transition-transform"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
              <Send size={16} />
            </button>
            {status == "SUCCESS" && (
              <p className="mt-4 text-[#adff30] font-medium ">
                Thanks! Inquiry received.
              </p>
            )}
            {status == "FAILED" && (
              <p className="mt-4 text-red-400 font-medium ">
                Failed to send inquiry. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
