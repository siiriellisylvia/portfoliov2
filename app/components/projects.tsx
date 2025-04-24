import ProjectsList from "./project-list";
import type { ProjectType } from "~/db/models/Project";

interface ProjectsSectionProps {
  projects: ProjectType[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="w-full relative z-6 flex flex-col h-screen px-[var(--spacing-page)]">
      <div className="pt-10">
        <h2 className="mt-0 text-4xl font-extrabold font-heading">
          Projects
        </h2>
        <ProjectsList projects={projects} />
      </div>
    </section>
  );
}
