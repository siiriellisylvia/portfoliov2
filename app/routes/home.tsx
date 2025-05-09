import type { Route } from "./+types/home";
import HeroSection from "~/components/hero";
import AboutSection from "~/components/about";
import ProjectsSection from "~/components/projects";
import ContactSection from "~/components/contact";
import Project, { type ProjectType } from "~/db/models/Project";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Siiri Lietu Portfolio" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export async function loader() {
  const projects = await Project.find().lean();
  if (!projects) {
    throw new Response("Not Found", { status: 404 });
  }
  return Response.json({ projects });
}

export default function Home({
  loaderData,
}: {
  loaderData: {
    projects: ProjectType[];
  };
}) {
  const { projects } = loaderData;

  return (
    <div className="overflow-y-auto snap-y snap-normal scroll-smooth">
      <section className="md:min-h-screen md:snap-start">
        <HeroSection />
      </section>
      <section className="md:min-h-screen md:snap-start">
        <AboutSection />
      </section>
      <section className="min-h-screen md:snap-start overflow-visible">
        <ProjectsSection projects={projects} />
      </section>
      <section className="md:h-screen md:snap-start">
        <ContactSection />
      </section>
    </div>
  );
}
