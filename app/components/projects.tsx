import ProjectsList from "./project-list";
import type { ProjectType } from "~/db/models/Project";

interface ProjectsSectionProps {
  projects: ProjectType[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="w-full relative z-6 flex flex-col md:h-screen px-[var(--spacing-page-mobile)] md:px-[var(--spacing-page)] bg-light-pink">
      <div className="pt-10">
        <h2>
          Projects
        </h2>
        <ProjectsList projects={projects} />
      </div>
    </section>
  );
}
