import { ProjectLists } from "@/lib/ProjectLists";
import ProjectCard from "../common/ProjectCard";

export default function Projects() {

    return (
        <div className="mt-12">
            <h1 className="text-2xl font-bold">Projects</h1>

            <h2 className="text-center text-xl font-semibold mt-4 dark:text-gray-200 text-gray-800">
                Check out my latest work
            </h2>
            <p className="text-center max-w-md mx-auto mt-2 text-gray-700 dark:text-gray-400 text-sm md:text-lg ">I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
                {
                    ProjectLists.map(project => (
                        <ProjectCard
                            key={project.id}
                            data={project}
                        />
                    ))
                }
            </div>
        </div>
    )
}