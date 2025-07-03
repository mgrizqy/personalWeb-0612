
'use client';


import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import SectionDivider from './components/SectionDivider';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import AnimatedSection from './components/AnimationSection';






export default function Home() {

  return (
    <main className="flex flex-col items-center px-4 md:px-8 ">

      <div className='w-full md:max-w-[1300px] '>
        <AnimatedSection>
        <HeroSection></HeroSection>
        </AnimatedSection>

         <AnimatedSection>
        <SectionDivider />
          
        </AnimatedSection>

        {/* <AnimatedSection> */}
        <AboutSection></AboutSection>
        {/* </AnimatedSection> */}

        <AnimatedSection>
        <SectionDivider />

        </AnimatedSection>

        <AnimatedSection>
        <ProjectsSection></ProjectsSection>
        </AnimatedSection>

        <AnimatedSection>
        <SectionDivider></SectionDivider>
          
        </AnimatedSection>

        <AnimatedSection>
        <TestimonialsSection></TestimonialsSection>
        </AnimatedSection>

        <AnimatedSection>
        <SectionDivider></SectionDivider>
          
        </AnimatedSection>

        <AnimatedSection>
        <ContactSection></ContactSection>
        </AnimatedSection>
        

    



      </div>





    </main>
  );
}
