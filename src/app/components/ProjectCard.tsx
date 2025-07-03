import { ArrowRight } from 'lucide-react';
import Image from 'next/image';


type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        
        <a href={project.link} className="group block bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#adff30]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#adff30]/10">
           
            <div className="w-full h-48 overflow-hidden">
                <Image 
                    src={project.imageUrl} 
                    width={1000}
                    height={1000}
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-6 h-fit mb-4">{project.description}</p>
                
                
                <div className="flex items-center gap-2 font-semibold text-[#adff30] transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    View Project
                    <ArrowRight size={16} />
                </div>
            </div>
        </a>
    );
}