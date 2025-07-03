'use client';

import { useState, useEffect } from 'react';
import { Sun} from 'lucide-react';
import HireMeModal from './HireMeModal';

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
     const [isHireMeModalOpen, setIsHireMeModalOpen] = useState(false); 

    
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
            const scrollPosition = window.scrollY + 150; 

            for (const section of sections) {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const NavLink = ({ href, label }: { href: string, label: string }) => (
        <li>
            <a 
                href={href}
                onClick={() => setIsMenuOpen(false)} 
                className="relative block font-bold transition-colors text-gray-300 hover:text-white"
            >
                {label}
                
                <span className={`
                    absolute bottom-[-4px] left-0 h-[3px] bg-[#adff30] w-full
                    transition-transform duration-300 ease-out
                    ${activeSection === label.toLowerCase() ? 'scale-x-100' : 'scale-x-0'}
                    group-hover:scale-x-100
                `}></span>
            </a>
        </li>
    );

    return (
        <>
        <nav className="fixed w-full h-[85px] bg-[#111015]/80 backdrop-blur-sm flex items-center justify-center z-50 border-b border-white/5">
            
            <div className="flex items-center justify-between w-full max-w-[1700px] px-4 md:px-8">
                
                <a href="#home" className="h-[40px] px-3 rounded-lg flex items-center justify-center 
                    border-2 border-dashed border-[#adff30]/20 text-[#adff30] 
                    hover:bg-[#adff30] hover:text-black hover:scale-110  
                    transition-all duration-300 cursor-pointer group">
                    <p className='tracking-wide font-extrabold drop-shadow-[0_0_8px_rgba(173,255,48,0.17)]'>{"<e/>"}</p>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-9">
                        {navLinks.map(link => <NavLink key={link.href} {...link} />)}
                    </ul>
                    <div className="w-[40px] h-[40px] border border-white/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10 transition-colors">
                        <Sun size={20} />
                    </div>
                    <button  onClick={() => setIsHireMeModalOpen(true)} className="relative h-[44px] w-[116px] bg-[#e7e7e7] rounded-[5px] text-black flex items-center justify-center font-bold hover:scale-105 transition-transform">
                        <strong>Hire Me</strong>
                        <span className="w-[10px] h-[10px] bg-[#adff30] rounded-full absolute z-10" style={{top: "-4px", right: "-4px"}}></span>
                        <span className="w-[10px] h-[10px] bg-[#adff30] rounded-full absolute" style={{top: "-4px", right: "-4px", animation: 'scale 2s ease-out infinite, fade-out 2s ease-out infinite'}}></span>
                    </button>
                </div>
                
                <div className="md:hidden flex items-center gap-4">
                    <div className="w-[40px] h-[40px] border border-white/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10 transition-colors">
                        <Sun size={20} />
                    </div>
<button 
    onClick={() => setIsMenuOpen(!isMenuOpen)} 
    className="z-50 w-8 h-8 flex flex-col items-end justify-center gap-[6px] group"
>
    {isMenuOpen ? (
        <div className="relative w-full h-full">
            <span className="block w-full h-0.5 bg-[#adff30] absolute top-1/2 transition-transform duration-300 rotate-45"></span>
            <span className="block w-full h-0.5 bg-[#adff30] absolute top-1/2 transition-transform duration-300 -rotate-45"></span>
        </div>
    ) : (
        <>
            <span className="block w-full h-0.5 bg-white transition-all duration-300 group-hover:bg-[#adff30]"></span>
            <span className="block w-1/2 h-0.5 bg-white transition-all duration-300 group-hover:bg-[#adff30] group-hover:w-full"></span>
            <span className="block w-full h-0.5 bg-white transition-all duration-300 group-hover:bg-[#adff30]"></span>
        </>
    )}
</button>
                </div>

            </div>

<div className={`
    md:hidden fixed top-0 right-0 h-screen w-1/2 max-w-[150px] 
    bg-[#111015]/90 backdrop-blur-lg 
    border-l border-white/10 
    transform transition-transform duration-300 ease-in-out z-40
    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
`}>
    <ul className="flex flex-col items-center justify-center h-full gap-8 text-lg pt-[85px] pb-8"> {/* Smaller text/gap */}
        {navLinks.map(link => <NavLink key={link.href} {...link} />)}
    </ul>
</div>

        </nav>

                   <HireMeModal 
                isOpen={isHireMeModalOpen} 
                onClose={() => setIsHireMeModalOpen(false)} 
            />
        </>
    );
}