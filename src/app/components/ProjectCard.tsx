import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ProjectDetailModal } from './ProjectDetailModal';




export default function ProjectCard({ project, onOpenModal, id, onClose, selectedProject }: { project: any, onOpenModal: () => void, id: number, onClose: () => void, selectedProject: any}  ) {


    const showDetails = () => {



        return <ProjectDetailModal  isOpen={!!selectedProject} onClose={onClose} project={selectedProject}></ProjectDetailModal>



    }

    return (
        <div className={selectedProject && selectedProject.id == id ? ("") : ("flex flex-row h-fit w-full") }>

        <div className='group bg-white/5 border border-white/10 rounded-xl 
           overflow-hidden transition-all duration-300 
           hover:border-[var(--greenYellowish)]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--greenYellowish)]/10 '>


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

                <button onClick={onOpenModal}
                    className='flex items-center gap-2 font-semibold text-[var(--greenYellowish)] transition-opacity duration-300 opacity-0 group-hover:opacity-100'>

                    View Details <ArrowRight size={16} />

                </button>


                {/* <div className="flex items-center gap-2 font-semibold text-[#adff30] transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    View Project
                    <ArrowRight size={16} />
                </div> */}
            </div>


        </div>

<div className=' flex items-center '>
{selectedProject?.id == id ? (showDetails()) : (null) }
</div>


</div>

    );
}