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
            className="p-4 bg-primary-pink text-primary-green hover:text-green-dark rounded-lg flex flex-col md:flex-row gap-10 w-full transition-all duration-300 group relative"
          >
            {project.image && (
              <div className="w-full md:w-1/3 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title || "Project image"}
                  className="rounded-lg w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            )}
            <div className="flex flex-col justify-center w-full md:w-2/3 md:pr-10">
              <h3 className="text-xl font-bold mb-2">
                {project.title || "Untitled Project"}
              </h3>
              {project.description && (
                <p className="text-sm">{project.description}</p>
              )}
            </div>
            
            {project.liveLink && (
              <div className="hidden md:block absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={(e) => e.stopPropagation()}>
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
