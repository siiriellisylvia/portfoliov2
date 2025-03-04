import type { Route } from "./+types/home";
import HeroSection from "~/components/hero";
import AboutSection from "~/components/about";
import ProjectsSection from "~/components/projects";
import ContactSection from "~/components/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Siiri Lietu Portfolio" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-normal scroll-smooth">
      <section className="h-screen snap-start ">
        <HeroSection />
      </section>
      <section className="h-screen snap-start">
        <AboutSection />
      </section>
      <section className="h-screen snap-start">
        <ProjectsSection />
      </section>
      <section className="h-screen snap-start">
        <ContactSection />
      </section>
    </div>
  );
}
