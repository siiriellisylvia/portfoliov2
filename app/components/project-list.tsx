import { type ProjectType } from "~/db/models/Project";
import { Link } from "react-router";
import Button from "./button";

interface ProjectsListProps {
  projects: ProjectType[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug || `project-${project._id}`}
            to={`/projects/${project.slug}`}
            className="bg-primary-pink text-primary-green hover:text-green-dark group relative flex w-full flex-col gap-10 rounded-lg p-4 transition-all duration-300 md:flex-row"
          >
            {project.image && (
              <div className="w-full overflow-hidden rounded-lg md:w-1/3">
                <img
                  src={project.image}
                  alt={project.title || "Project image"}
                  className="h-auto w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            )}
            <div className="flex w-full flex-col justify-center md:w-2/3 md:pr-10">
              <h3 className="mb-2 text-xl font-bold">
                {project.title || "Untitled Project"}
              </h3>
              {project.description && (
                <p className="text-sm">{project.description}</p>
              )}
            </div>

            {project.liveLink && (
              <div
                className="absolute right-4 bottom-4 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  label="See live solution"
                  link={project.liveLink}
                  isExternal={true}
                  className="bg-primary-green text-primary-pink"
                />
              </div>
            )}
          </Link>
        ))}
      </div>
      <div className="h-16 md:h-24"></div> {/* Spacer at the bottom */}
    </div>
  );
}
