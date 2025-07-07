

import ProjectCard from './ProjectCard';
import { useState } from 'react';
// import { ProjectDetailModal } from './ProjectDetailModal';

interface Project  {

    id:number,
    title:string,
    description:string,
    imageUrl:string,
    link:string,
    tags: string[],
    star: {situation: string, task: string, action: string, result: string}

}

const projects : Project [] = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "Developed a personal portfolio from scratch using Next.js and Tailwind CSS, focusing on responsive design and modern UI patterns",
        imageUrl: "/personalWeb.png",
        link: "#",
        tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        star : {

            situation : "A code challenge given by the lecturer to make a personal website, as well as to showcase skills and projects for potential employers and collaborators.",
            task : "Design and build a fully responsive portfolio website page from scratch, ensuring high performance and a polished use experience.",
            action : "Utilized Next.js for its servver-side rendering capabilities. Implemented a component-based architecture with React and styled with Tailwind CSS for rapid development.",
            result : "Successfully created a performant and visually appealing portfolio and effectively highlights my technical abilities and design sensibilities"


        }
    },
    {
        id: 2,
        title: "Interactive To-Do List App",
        description: "Built a dynamic to-do list application with React, demonstrating core principles of state management with useState and useEffect for handling user interactions and data persistence.",
        imageUrl: "/todolist.png", 
        link: "#",
        tags: ["React", "Javascript", "CSS", "HTML"],
        star: {

            situation: "A bootcamp project designed to master fundamental React concepts and client-side state management.",
            task: "Create an application that allows users to add, delete, and marks tasks as complete, with the state persisting through user interaction",
            action: "Used the `useState` hook to manage the list of tasks. Implemented functions to handle adding, updating new tasks and filtering, deleting tasks or array based on its completion state",
            result: "Finished the main features and gained practical understanding of React's state and props system."
        }
    },
    // {
    //     id: 3,
    //     title: "E-commerce Perfume Page",
    //     description: "Designed and implemented a responsive product landing page for a luxury perfume brand. Focused on clean HTML, advanced CSS for styling, and ensuring a seamless user experience.",
    //     imageUrl: "/Perfume.png",
    //     link: "#"
    // },
];
export default function ProjectsSection() {

    const [selectedProject, setSelectedProject] = useState<Project  | null>(null);

    return (
        <>
        <section id="projects" className="py-24 w-full">
            <div className="text-center">
                <p className="text-lg text-[#adff30] font-semibold tracking-wider">MY WORK</p>
                <h2 className="text-5xl font-bold mt-2 mb-16">Featured Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project,index) => (
                   
                    <ProjectCard key={project.id} id={project.id} project={project} onOpenModal={() => setSelectedProject(project)} onClose={() => setSelectedProject(null)} selectedProject={selectedProject}  />
                    
                ))}
                
            </div>
        </section>


                {/* <ProjectDetailModal isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}/> */}

        </>
    );
}