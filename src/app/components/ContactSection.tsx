"use client";

import { Send } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type FormStatus = "SUCCESS" | "FAILED" | "IDLE";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<FormStatus>("IDLE");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // safety check to ensure form ref exists
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      );

      setStatus("SUCCESS");
      form.current.reset();

      setTimeout(() => {
        setStatus("IDLE");
      }, 5000);
    } catch (error) {
      console.error("EmailJS :", error);
      setStatus("FAILED");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 mb-20 w-full">
      <div className="text-center">
        <p className="text-lg text-[#adff30] font-semibold tracking-wider">
          GET IN TOUCH
        </p>
        <h2 className="text-5xl font-bold mt-2">Contact Me</h2>
        <p className="max-w-xl mx-auto text-gray-400 mt-6 mb-12">
          {`I'm currently available for freelance work and open to discussing new projects. If you have an idea or just want to say hello, feel free to reach out.`}
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-input"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              required
              className="form-input"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto h-[50px] inline-flex items-center justify-center gap-3 bg-[#adff30] text-black font-bold rounded-full px-8 hover:scale-105 transition-transform"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>
            {status == "SUCCESS" && (
              <p className="mt-4 text-[#adff30] font-medium ">
                Thanks! Message received.
              </p>
            )}
            {status == "FAILED" && (
              <p className="mt-4 text-red-400 font-medium ">
                Failed to send message. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
