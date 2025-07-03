// components/ContactSection.tsx

import { Send } from 'lucide-react';
// import SectionDivider from './SectionDivider';

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 mb-20 w-full">
            <div className="text-center">
                <p className="text-lg text-[#adff30] font-semibold tracking-wider">GET IN TOUCH</p>
                <h2 className="text-5xl font-bold mt-2">Contact Me</h2>
                <p className="max-w-xl mx-auto text-gray-400 mt-6 mb-12">
                    {`I'm currently available for freelance work and open to discussing new projects. If you have an idea or just want to say hello, feel free to reach out.`}
                </p>
            </div>

            {/* The Form Container */}
            <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                
                {/* --- IMPORTANT: Replace the action URL with your Formspree endpoint --- */}
                <form action="https://formspree.io/f/YOUR_UNIQUE_ID" method="POST">

                    {/* Grid for Name and Email fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                required 
                                className="form-input"
                            />
                        </div>
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                required 
                                className="form-input"
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            rows={6} 
                            required 
                            className="form-input"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="w-full md:w-auto h-[50px] inline-flex items-center justify-center gap-3 bg-[#adff30] text-black font-bold rounded-full px-8 hover:scale-105 transition-transform"
                        >
                            Send Message
                            <Send size={18} />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}