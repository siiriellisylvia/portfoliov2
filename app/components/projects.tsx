import ProjectsList from "./project-list";

export default function ProjectsSection() {
  return (
    <section className="w-full relative z-6 flex flex-col h-screen px-[var(--spacing-page)]">
      <div className="pt-10">
        <h2 className="mt-0 text-4xl font-extrabold font-heading">
          Projects
        </h2>
        <ProjectsList />

      </div>
    </section>
  );
}
