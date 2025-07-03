
'use client';

import { useRef } from 'react';
import { MessageSquare } from 'lucide-react';
import { useDraggableMarquee } from '../hooks/useDraggableMarquee';
import { useMediaQuery } from '../hooks/useMediaQuery';
// import { div } from 'framer-motion/client';


const testimonials = [
    {
        id: 1,
        quote: "Eky is a proactive and highly skilled developer. Their ability to quickly grasp complex requirements and deliver clean, efficient code was instrumental to our project's success.",
        author: "Jane Doe",
        title: "Stranger 1"
        // title: "Project Manager, TechCorp"
    },
    {
        id: 2,
        quote: "Working with Eky was a fantastic experience. They have a keen eye for design and were able to translate our Figma mockups into a pixel-perfect, responsive reality.",
        author: "John Smith",
        title: "Sstranger 2"
        // title: "Lead Designer, Innovate LLC"
    },
    {
        id: 3,
        quote: "An incredibly fast learner and a great team player. Eky is always eager to tackle new challenges and contribute to a positive team environment. A true asset.",
        author: "Sam Wilson",
        title: "Stranger 3"
        // title: "Senior Engineer, DevTeam"
    }
];

const TestimonialCard = ({ quote, author, title }: { quote: string, author: string, title: string }) => (
    <div className="flex-shrink-0 w-[350px] md:w-[400px] border border-white/10 rounded-lg p-8 bg-[#1d1c22] mx-4 flex flex-col">
        <MessageSquare className="w-8 h-8 text-[#adff30] mb-4" />
        <p className="text-gray-300 italic flex-grow">{`"${quote}"`}</p>
        <div className="mt-6 border-t border-white/10 pt-4">
            <p className="font-bold text-white">{author}</p>
            <p className="text-sm text-gray-400">{title}</p>
        </div>
    </div>
);

export default function TestimonialsSection() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    const test: React.RefObject<HTMLDivElement> = marqueeRef as React.RefObject<HTMLDivElement>

    // marqueeRef.current!.focus();
    const isDragging = useDraggableMarquee(test);

    const isDesktop = useMediaQuery(`(min-width : 768px)`)

    const loopedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-24 w-full overflow-hidden">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-16">What <span className="text-[#adff30]">Others Say</span></h2>
            </div>

            {isDesktop ? (

                <div
                    ref={marqueeRef}
                    className={`marquee-container ${isDragging ? 'active-drag' : ''}`}
                >
                    <div className="marquee-content marquee-reverse">
                        {loopedTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={`${testimonial.id}-${index}`}
                                quote={testimonial.quote}
                                author={testimonial.author}
                                title={testimonial.title}
                            />
                        ))}
                    </div>
                </div>
            ) : (


                <div className='grid grid-rows-3 justify-center gap-7'>

                    {testimonials.map((testimonial, index) =>
                        <TestimonialCard

                            key={`${testimonial.id}-${index}`}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            title={testimonial.title}


                        />


                    )}

                </div>


            )}


        </section>
    );
}