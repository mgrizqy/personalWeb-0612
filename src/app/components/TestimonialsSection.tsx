
'use client';

import { TestimonialCard } from "./TestimonialCard";


const testimonials = [
    {
        id: 1,
        quote: "Eky is a proactive and highly skilled developer. Their ability to quickly grasp complex requirements and deliver clean, efficient code was instrumental to our project's success.",
        author: "Jane Doe",
        title: "Stranger 1"
       
    },
    {
        id: 2,
        quote: "Working with Eky was a fantastic experience. They have a keen eye for design and were able to translate our Figma mockups into a pixel-perfect, responsive reality.",
        author: "John Wick",
        title: "Sstranger 2"
        
    },
    {
        id: 3,
        quote: "An incredibly fast learner and a great team player. Eky is always eager to tackle new challenges and contribute to a positive team environment. A true asset.",
        author: "Sam Wilson",
        title: "Stranger 3"
        
    }
];



export default function TestimonialsSection() {

    

    const loopedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-24 w-full overflow-hidden">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-16">What <span className="text-[#adff30]">Others Say</span></h2>
            </div>


                <div

                    className={`marquee-container hidden md:block`}
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
   


                <div className='grid grid-rows-3 justify-center gap-7 md:hidden'>

                    {testimonials.map((testimonial, index) =>
                        <TestimonialCard

                            key={`${testimonial.id}-${index}`}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            title={testimonial.title}


                        />


                    )}

                </div>




        </section>
    );
}