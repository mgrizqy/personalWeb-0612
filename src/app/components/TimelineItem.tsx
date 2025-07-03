import { Footprints, GraduationCap, Briefcase } from 'lucide-react'; 

export default function MyJourney() {
    return (
        <>
            
            <div className="flex items-center justify-center mb-10 md:mb-14 gap-5">
                <Footprints className="text-[var(--greenYellowish)]" size={32} />
                <h3 className="text-2xl md:text-3xl font-bold">My Journey</h3>
            </div>

           
            <div className="relative w-full max-w-6xl mx-auto px-4">

                <div className="absolute top-0 h-full w-0.5 bg-[var(--greenYellowish)]/20 left-4 md:left-1/2 md:-translate-x-1/2"></div>

                <div className="relative mb-12">
                    <div className="absolute top-0 left-0 md:left-1/2 -translate-x-1/2 h-[37px] w-[37px] bg-[var(--darkColor)] border border-[var(--greenYellowish)]/80 rounded-full flex items-center justify-center">
                        <GraduationCap size={19} className="text-[var(--greenYellowish)]/90" />
                    </div>

                    <div className="ml-12 md:ml-[50%] md:pl-8">
                        <div className="bg-[var(--darkColor)]/20 hover:bg-[var(--darkColor)]/40 border hover:border-[var(--greenYellowish)]/30 transition-all duration-300 border-white/10 rounded-lg p-6">
                            <p className="mb-2"><span className="text-neutral-400">Current</span></p>
                            <p className="mb-2"><span className="text-xl font-bold text-[var(--greenYellowish)]">Transition to Tech: Full-Stack Bootcamp</span></p>
                            <p className="text-sm tracking-wide leading-6 ">Deeply engaged in an intensive, project-driven program focused on building modern, full-stack applications with React, Next.js, Node.js, and advanced database concepts.</p>
                        </div>
                    </div>
                </div>

                <div className="relative mb-12">
                    <div className="absolute bottom-0 left-0 md:left-1/2  -translate-x-1/2 h-[37px] w-[37px] bg-[var(--darkColor)] border border-[var(--greenYellowish)]/80 rounded-full flex items-center justify-center">
                        <Briefcase size={19} className="text-[var(--greenYellowish)]/90" />
                    </div>

                    <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                         <div className="bg-[var(--darkColor)]/20 hover:bg-[var(--darkColor)]/40 border hover:border-[var(--greenYellowish)]/30 transition-all duration-300 border-white/10 rounded-lg p-6">
                            <p className="mb-2 text-left md:text-right"><span className="text-neutral-400">Previous Experience</span></p>
                            <p className="mb-2 text-left md:text-right"><span className="text-xl font-bold text-[var(--greenYellowish)]">Creative & Technical Roots: FX Artist</span></p>
                            <p className="text-sm text-left md:text-right tracking-wide leading-6 ">Specialized in creating complex simulations like fire, water, and particle systems. This role demanded deep technical problem-solving, and procedural generation to build efficient, reusable effects within tight production deadlines.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}