// components/HireMeModal.tsx

'use client';

import { X, Send } from 'lucide-react';

// Define the props for the component
interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  // If the modal is not open, render nothing.
  if (!isOpen) {
    return null;
  }

  return (
    // Main overlay: fixed position, covers the screen, has a backdrop blur effect.
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose} // Close the modal if the overlay is clicked
    >
      {/* Modal content container: Prevents closing when clicking inside the modal */}
      <div 
        className="relative w-full max-w-lg m-4 bg-[#1d1c22] border border-white/10 rounded-2xl shadow-2xl p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()} // Stop click from bubbling up to the overlay
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-3xl font-bold text-white mb-2">Let&apos;s Work Together</h2>
        <p className="text-gray-400 mb-6">I&apos;m excited to hear about your project. Fill out the form below to get in touch.</p>

        {/* --- Formspree Form --- */}
        {/* --- IMPORTANT: Replace with your own Formspree endpoint --- */}
        <form action="https://formspree.io/f/YOUR_UNIQUE_ID" method="POST">
          <div className="space-y-4">
            <input type="email" name="email" required placeholder="Your Email Address" className="form-input"/>
            <input type="text" name="subject" required placeholder="Project Subject" className="form-input"/>
            <textarea name="message" rows={5} required placeholder="Tell me about your project..." className="form-input"></textarea>
          </div>
          <div className="text-right mt-6">
            <button 
              type="submit" 
              className="h-[45px] inline-flex items-center justify-center gap-2 bg-[#adff30] text-black font-bold rounded-full px-6 hover:scale-105 transition-transform"
            >
              Send Inquiry
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}