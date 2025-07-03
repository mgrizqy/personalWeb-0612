'use client';

import { X, Zap, ListChecks, Orbit, Rocket } from "lucide-react";

type Star = {
    situation: string;
    task: string;
    action: string;
    result: string
};

type Project = {
    title: string;
    tags: string[];
    star: Star;
}


interface ProjectDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
    
}


const StarDetailItem = ({ icon: Icon, title, text }
    : { icon: React.ElementType, title: string, text: string }) => (

    <div>
        <h4 className="font-bold text-[var(--greenYellowish)] flex items-center gap-2 mb-1">
            <Icon size={16} />
            {title}
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
    </div>

)


export const ProjectDetailModal = ({ isOpen, onClose, project }: ProjectDetailModalProps) => {

    if (!isOpen || !project) return null;

    return (

        <div className="relative w-full max-w-2xl m-4 bg-[var(--darkColor)]/20 border border-white/10 rounded-2xl shadow-2xl p-8 animate-scale-in hover:border-[var(--greenYellowish)]/50 transition-all"
            onClick={(e) => e.stopPropagation()}
        >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">

                <X size={24} />


            </button>

            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (


                    <span key={tag} className="text-xs bg-white/10 text-[var(--)] px-3 py-1 rounded-full">{tag}</span>

                ))}
            </div>


            <div>

                <StarDetailItem icon={Zap} title="Situation" text={project.star.situation} />
                <StarDetailItem icon={ListChecks} title="Task" text={project.star.task} />
                <StarDetailItem icon={Orbit} title="Action" text={project.star.action} />
                <StarDetailItem icon={Rocket} title="Result" text={project.star.result} />

            </div>


        </div>

    )

}

