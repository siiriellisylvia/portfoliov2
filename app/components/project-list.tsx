import { type ProjectType } from "~/db/models/Project";
import { Link } from "react-router";

interface ProjectsListProps {
  projects: ProjectType[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="lg:w-full px-[var(--spacing-page)] py-10 sm:px-0">
      <div className="flex flex-row gap-6">
        {projects.map((project) => (
          <Link
            key={project.title || `project-${project._id}`}
            to={`/projects/${project.title}`}
            className=" p-4 bg-primary-green text-primary-pink rounded-lg"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title || "Project image"}
                className="rounded-lg mb-3"
              />
            )}
            <h3 className="text-xl font-bold">{project.title || "Untitled Project"}</h3>
            {project.description && <p>{project.description}</p>}
          </Link>
        ))}
      </div>
    </section>
  );
}
