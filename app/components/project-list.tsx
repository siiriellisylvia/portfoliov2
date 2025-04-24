
import Project, { type ProjectType } from "~/db/models/Project";
import type { Route } from "../types/root";
import { Link } from "react-router";

export async function loader() {
  const projects = await Project.find({}).sort({ createdAt: -1 });
  if (!projects) {
    throw new Response("Not Found", { status: 404 });
  }
  console.log("projects", projects);
  return projects || [];

}
export default function ProjectsList({ loaderData }: Route.ComponentProps) {
  const projects = (loaderData || []) as ProjectType[];

  return (
    <section className="lg:w-full px-[var(--spacing-page)] py-10 sm:px-0">
      <div className="flex flex-row gap-6">
        {projects.map((project) => (
          <Link
            key={project.title}
            to={`/projects/${project.title}`}
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
