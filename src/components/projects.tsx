import ProjectCard from "./project-card";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col gap-14 items-center justify-center p-10 mt-10 h-screen">
            <h2 className="title">Projects</h2>
            <div className="w-full flex flex-wrap gap-5 items-center justify-around p-3">
                <ProjectCard />
            </div>
        </section>

    );
}
