import { type ProjectType } from "~/db/models/Project";
import { Link } from "react-router";

interface ProjectsListProps {
  projects: ProjectType[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="md:w-full px-[var(--spacing-page-mobile)] md:px-[var--spacing-page] py-10">
      <div className="flex flex-col md:flex-row gap-6">
        {projects.map((project) => (
          <Link
            key={project.title || `project-${project._id}`}
            to={`/projects/${project.slug}`}
            className=" p-4 bg-primary-green text-primary-pink rounded-lg"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title || "Project image"}
                className="rounded-lg mb-3"
              />
            )}
            <h3>{project.title || "Untitled Project"}</h3>
            {project.description && <p>{project.description}</p>}
          </Link>
        ))}
      </div>
    </section>
  );
}
