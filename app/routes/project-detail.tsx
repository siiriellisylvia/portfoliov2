import { useParams, Navigate } from "react-router-dom";
import { projects } from "../data/projects"; // Import your mock data

export default function ProjectDetail() {
  const { id } = useParams();
console.log(id);
  // Find the project that matches the URL param
  const project = projects.find((p) => p.id === id);

  // Redirect if project not found
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="w-full">
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold text-primary-green">
          {project.title}
        </h1>
        <h2 className="text-xl text-primary-pink">{project.subtitle}</h2>
        <img src={project.image} alt={project.title} className="mt-6 w-2/3" />
        <div className="flex gap-6 mt-4">
          <p>📅 {project.date}</p>
          <p>⏳ {project.duration}</p>
          <p>👤 {project.type}</p>
          <p>🛠️ {project.tech}</p>
        </div>
      </section>

      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold text-primary-green">
          {project.subtitle}
        </h2>
        <p className="mt-4 text-lg text-gray-600">{project.description}</p>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-primary-green text-white px-4 py-2 rounded-lg"
          >
            Live Site
          </a>
        )}
      </section>
    </main>
  );
}
