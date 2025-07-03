// components/ProjectsSection.tsx

// import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

// --- Placeholder Data ---
// In components/ProjectsSection.tsx

const projects = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "Developed a personal portfolio from scratch using Next.js and Tailwind CSS, focusing on responsive design, modern UI patterns, and meticulous attention to detail.",
        imageUrl: "/personalWeb.png", // Replace with your image
        link: "/personalWeb.png" // Link to the live site or repo
    },
    {
        id: 2,
        title: "Interactive To-Do List App",
        description: "Built a dynamic to-do list application with React, demonstrating core principles of state management with useState and useEffect for handling user interactions and data persistence.",
        imageUrl: "/todolist.png", // Replace with your image
        link: "#" // Link to the live site or repo
    },
    {
        id: 3,
        title: "E-commerce Perfume Page",
        description: "Designed and implemented a responsive product landing page for a luxury perfume brand. Focused on clean HTML, advanced CSS for styling, and ensuring a seamless user experience.",
        imageUrl: "Perfume.png", // Replace with your image
        link: "#" // Link to the live site or repo
    },
];
export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 w-full">
            <div className="text-center">
                <p className="text-lg text-[#adff30] font-semibold tracking-wider">MY WORK</p>
                <h2 className="text-5xl font-bold mt-2 mb-16">Featured Projects</h2>
            </div>
            
            {/* The Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}