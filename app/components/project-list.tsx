import { type ProjectType } from "~/db/models/Project";
import { Link } from "react-router";

interface ProjectsListProps {
  projects: ProjectType[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <Link
            key={project.slug || `project-${project._id}`}
            to={`/projects/${project.slug}`}
            className="p-4 bg-primary-pink text-primary-green rounded-lg flex flex-col md:flex-row gap-4 w-full"
          >
            {project.image && (
              <div className="w-full md:w-1/3">
                <img
                  src={project.image}
                  alt={project.title || "Project image"}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            )}
            <div className="flex flex-col justify-center w-full md:w-2/3">
              <h3 className="text-xl font-bold mb-2">
                {project.title || "Untitled Project"}
              </h3>
              {project.description && (
                <p className="text-sm">{project.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className="h-16 md:h-24"></div> {/* Spacer at the bottom */}
    </div>
  );
}
