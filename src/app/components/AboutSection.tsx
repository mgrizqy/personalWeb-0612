import { ArrowRight, Briefcase,GraduationCap, Code, Eye, Footprints, Map, Target } from "lucide-react"

import { SiGit, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import TechStackCard from "./TechStackCard";
import ValueCard from "./ValueCard";

import SectionDivider from "./SectionDivider";
import { MdLabelImportant } from "react-icons/md";
import TimelineItem from "./TimelineItem";
import AnimatedSection from "./AnimationSection";



const journeyData = [
    {
        icon: GraduationCap,
        subtitle: "Current",
        title: "Transition to Tech: Full-Stack Bootcamp",
        description: "Deeply engaged in an intensive, project-driven program focused on modern full-stack applications with React, Next.js, and Node.js."
    },
    {
        icon: Briefcase,
        title: "Creative & Technical Roots: FX Artist",
        subtitle: "Previous Experience",
        description: "Specialized in creating complex simulations like fire, water, and particles, demanding deep technical problem-solving and procedural generation."
    }
];

const techSkills = [

    { icon: SiTypescript, title: "Typescript" },
    { icon: SiReact, title: "React" },
    { icon: SiNextdotjs, title: "Next.js" },
    { icon: SiTailwindcss, title: "Tailwind\nCSS" },
    { icon: SiNodedotjs, title: "Node.js" },
    { icon: SiGit, title: "Git" },

]

const AboutSection = () => {



    return (

        <section id="about" className=" py-24" >

        <AnimatedSection>

            <div className="w-full max-w-5xl mx-auto   " >

                <h2 className="mb-2 text-center">
                    <span className="text-[var(--greenYellowish)] font-bold ">
                        INTRODUCTION
                    </span>
                </h2>
                <h3 className="text-5xl font-bold text-center mb-20">
                    About Me
                </h3>



                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center ">

                    <div className="md:col-span-2 relative w-full  h-80 md:h-[225px] group flex items-center justify-center ">

                        <div className="absolute w-[85%] h-[85%] rounded-lg border-2 border-dashed border-[var(--greenYellowish)]/25 transition-all duration-300 rotate-3 group-hover:rotate-6 z-10"></div>
                       
                        <div className="absolute w-[85%] h-[85%] rounded-lg  bg-cover bg-center bg-gray-900 shadow-2xl transition-all duration-300 -rotate-3 group-hover:-rotate-1 z-0"
                            style={{ backgroundImage: "url('/illustration-dark.png')" }}>

                        </div>

                    </div>




                    <div className="md:col-span-3 ">

                        <h3 className="text-3xl font-bold text-white mb-4" >A Developer Focused on Impact & User Experience</h3>
                        <p className="text-gray-300 leading-8 mb-6">
                            {`I'm full-stack developer driven by a passion for solving complex problems. My journey into tech started with a deep curiosity for programming,
                            computer science and videogame, and it has evolved into a drive to build beautiful, intuitive applications that provide real-world value.`}
                        </p>
                        <a href="#contact" className="font-bold text-[var(--greenYellowish)] hover:underline flex items-center gap-2 transition-all hover:gap-4">
                            Let&apos;s Connect <ArrowRight size={16} />
                        </a>

                    </div>

                </div>

            </div>
            </AnimatedSection>
            <AnimatedSection>

            <div className='flex flex-col items-center mb-15 mt-30 md:mb-0'>
                <h3 className='mb-14 text-3xl font-bold flex items-center gap-5'> <Code className="text-[var(--greenYellowish)] " /> My Tech Stack</h3>
                <div className='grid grid-rows-2 grid-cols-3 gap-5 md:grid-cols-6 md:gap-5'>
                    {techSkills.map((stack) =>


                        <TechStackCard key={stack.title} title={stack.title} icon={stack.icon}></TechStackCard>

                    )}
                </div>
            </div>

            </AnimatedSection>

            <AnimatedSection>
            <div className='flex flex-col items-center '>
                <div className="flex items-center justify-center gap-5 mb-14">
                    <MdLabelImportant size={30} className="text-[var(--greenYellowish)] "></MdLabelImportant>
                    <h3 className=' text-3xl font-bold flex items-center gap-5'>  My Key Values</h3>
                </div>

                <div className='w-[67%]  md:min-w-[800px] grid grid-cols-1 md:grid-cols-2 mb-20 ' >

                    <div className='col-span-1  flex items-center justify-center p-2'>



                        <ValueCard icon={Eye} title='Attention to detail'/>



                    </div>

                    <div className='col-span-1  flex items-center justify-center p-2'>


                        <ValueCard icon={Target} title='Dedicated Problem Solver' />


                    </div>

                </div>

            </div>

            </AnimatedSection>

            <SectionDivider></SectionDivider>

            {/* <div className="flex items-center justify-center mb-14 gap-5">
                <Footprints className="text-[var(--greenYellowish)]"></Footprints>
                <h3 className="text-3xl font-bold  ">My Journey</h3>
            </div>

            <div className="w-full max-w-6xl     mx-auto flex flex-col gap-8 relative">

                <div className="relative grid grid-cols-2" >

                    <div></div>
                    <div className=" pl- mx-5 bg-[var(--darkColor)]/20 hover:bg-[var(--darkColor)]/40 border hover:border-[var(--greenYellowish)]/30 transition-all duration-300 border-white/10 rounded-lg p-6">

                        <p className=" mb-2"><span className="text-neutral-400  ">Current</span> </p>
                        <p className=" mb-2"><span className="text-xl font-bold  text-[var(--greenYellowish)]">Transition to Tech: Full-Stack Bootcamp</span> </p>
                        <p className="  text-sm">Deeply engaged in an intensive, project-driven program focused on building modern, full-stack applications <br /> with React, Next.js, Node.js, and advanced database <br /> concepts.</p>


                    </div>

                </div>

                <div className="absolute h-full left-1/2   top-0">

                    <div className="h-full w-1  bg-[var(--greenYellowish)]/20 "></div>

                    <div className="  absolute top-0 left-1/2 -translate-1/2 h-[37px] w-[37px] bg-[var(--darkColor)] border border-[var(--greenYellowish)]/80 rounded-full flex items-center justify-center  ">
                        <GraduationCap size={19} className="text-[var(--greenYellowish)]/90"></GraduationCap>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-6xl     mx-auto flex flex-col gap-8 relative">

                <div className="relative grid grid-cols-2" >

                    <div className="pl-8 mx-5 bg-[var(--darkColor)]/20 hover:bg-[var(--darkColor)]/40 border hover:border-[var(--greenYellowish)]/30 transition-all duration-300 border-white/10 rounded-lg  p-6">

                        <p className="text-right mb-2"><span className="text-neutral-400  ">Previous Experience</span> </p>
                        <p className="text-right mb-2"><span className="text-xl font-bold  text-[var(--greenYellowish)]">Creative & Technical Roots: FX Artist</span> </p>
                        <p className="text-right  text-sm">Specialized in creating complex simulations like fire, water, and particle systems. This role demanded deep technical problem-solving, and procedural generation to build efficient, reusable effects within tight production deadlines.</p>
                        <div></div>


                    </div>

                </div>

                <div className="absolute h-full left-1/2   top-0">

                    <div className="h-full w-1  bg-[var(--greenYellowish)]/20 "></div>

                    <div className="  absolute -bottom-10 left-1/2 -translate-1/2 h-[37px] w-[37px] bg-[var(--darkColor)] border border-[var(--greenYellowish)]/80 rounded-full flex items-center justify-center  ">
                        <Briefcase size={19} className="text-[var(--greenYellowish)]/90"></Briefcase>
                    </div>
                </div>

            </div> */}
<AnimatedSection>

            <TimelineItem></TimelineItem>

            </AnimatedSection>



            {/* <div className="flex flex-col items-center mt-0 relative">

                <h3 className="text-3xl font-bold mb-14">My Journey</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] h-150 bg-fuchsia-700/0 ">

                    <div className=" bg-amber-700/0 relative">

                        <div className=" absolute right-7 h-fit   bg-[var(--darkColor)]/20 border border-white/10 rounded-lg p-6">
                            <p className="text-right mb-2"><span className="text-neutral-400  ">Current</span> </p>
                            <p className="text-right mb-2"><span className="text-xl font-bold  text-[var(--greenYellowish)]">Transition to Tech: Full-Stack Bootcamp</span> </p>
                            <p className="text-right  text-sm">Deeply engaged in an intensive, project-driven program focused on building modern, full-stack applications with React, Next.js, Node.js, and advanced database concepts.</p>
                            
                           
                        </div>

                    </div>
                    <div className=" bg-blue-800/0 relative ">
                    
                    
                    
                    </div>


                </div>
                    <div className="  absolute top-20 left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[var(--greenYellowish)]/90 to-transparent rounded-2xl">                
                    <div className="  absolute top-0 left-1/2 -translate-1/2 h-[37px] w-[37px] bg-[var(--darkColor)] border border-[var(--greenYellowish)]/80 rounded-full flex items-center justify-center  ">
                       <GraduationCap size={19} className="text-[var(--greenYellowish)]/90"></GraduationCap> 
                    </div>
                    <div className="  absolute bottom-50 left-1/2 -translate-1/2 h-[10px] w-[10px] bg-[var(--darkColor)] border border-[var(--greenYellowish)]  rounded-full "></div>
                    </div>

            </div> */}




        </section>

    )

}

export default AboutSection