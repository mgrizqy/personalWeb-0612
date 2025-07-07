
import { ArrowRight, ChevronDown, Code, Github, MailIcon } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (

        

        <section id="home" className="h-[900px] md:h-[1000px] w-full flex items-center justify-center relative ">
            
            <div className="w-full grid grid-cols-1 mt-32 md:mt-0 md:grid-cols-2 gap-y-16 md:gap-x-8 items-center">

                <div className="w-full h-full flex flex-col justify-center text-center md:text-left">

                    <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-4" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                        <div className="w-[1px] h-12 bg-gray-700"></div>
                        <p className="text-sm text-[#adff30]">{"</>"}</p>
                        <div className="w-[1px] h-24 bg-gray-700"></div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Hello I&apos;m <br />
                        <span className="text-[#adff30]">Gashif Eky</span>
                    </h1>

                    <p className="text-lg md:text-xl mb-4">I&apos;m a passionate <span className="text-[#adff30] font-bold">Full-Stack Developer</span></p>
                    
                    <p className="max-w-md mx-auto md:mx-0 text-gray-400 leading-7 mb-10">An aspiring developer passionate about building high-performance, scalable, and beautiful web solutions.</p>

                    <div className="flex items-center justify-center md:justify-start gap-6 flex-wrap">
                        <button className="h-[50px] w-[200px] flex items-center justify-center gap-2 border-2 rounded-full border-[#adff30] hover:bg-[#adff30] hover:text-black transition-all font-bold">
                            Download CV <ArrowRight size={20} />
                        </button>
                        <div className="flex gap-4">
                            <a href="https://github.com/mgrizqy" className="w-[45px] h-[45px] rounded-full border-2 flex items-center justify-center border-[#adff30] hover:bg-[#adff30] hover:text-black transition-all"><Github size={22} /></a>
                            <a href="mailto:mgrizqy.work@gmail.com" className="w-[45px] h-[45px] rounded-full border-2 flex items-center justify-center border-[#adff30] hover:bg-[#adff30] hover:text-black transition-all"><MailIcon size={22} /></a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex items-center justify-center md:justify-end">
                    <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] ">
                        <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]  overflow-hidden">
                        <div className="absolute inset-0 border-2 border-dashed border-[#adff30]/50 rounded-full animate-[spin_60s_linear_infinite]"></div>
                        </div>
                        <Image src="/illustration-dark.png" width={10000} height={10000} alt="Developer Illustration" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-[#1d1c22] rounded-full object-cover"/>

                        
                        <div className="hidden md:flex absolute rounded-l-2xl rounded-t-2xl w-[80px] h-[45px] bg-[#adff30] top-20 -left-12 items-center justify-center">
                            <p className="text-black font-extrabold">Hi!</p>
                        </div>
                        <div className="hidden md:flex absolute -bottom-4 -right-4 w-[65px] h-[65px] border-[#adff30] border-2 rounded-full items-center justify-center">
                            <Code size={32} className="text-[#adff30]" />
                        </div>
                    </div>
                </div>

            </div>

            <a href="#about" className="absolute -bottom-17 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group">
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Scroll Down</span>
                <ChevronDown className="animate-bounce text-[#adff30]" />
            </a>
        </section>
    );
}