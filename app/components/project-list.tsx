// src/components/ProjectsList.tsx
import { Link } from "react-router";
import { projects } from "~/data/projects";

export default function ProjectsList() {
  return (
    <section className="lg:w-full px-[var(--spacing-page)] py-10 sm:px-0">
      <div className="flex flex-row gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className=" p-4 bg-primary-green text-primary-pink rounded-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-3"
            />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
