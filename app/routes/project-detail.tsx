import { useParams, Navigate } from "react-router-dom";
import { Calendar, Hourglass, Swords, UserRound } from "lucide-react"; 
import Project, { type ProjectType } from "~/db/models/Project";
// Import your icons here

export async function loader({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = await Project.findOne({ slug }).lean();
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }

  return Response.json({ project });
}

export default function ProjectDetail({
  loaderData
}: {
  loaderData: { project: ProjectType }})
{
  const {project} = loaderData;

  return (
    <main className="w-full">
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold text-primary-green">
          {project.title}
        </h1>
        <h2 className="text-xl text-primary-pink">{project.subtitle}</h2>
        <img src={project.image || "/placeholder-image.jpg"} alt={project.title || "Project Image"} className="mt-6 w-2/3" />
        <div className="flex gap-6 mt-4">
          <div className="flex flex-row gap-2">
            <Calendar />
            <p>{project.date}</p>
          </div>
          <div className="flex flex-row gap-2">
            <Hourglass />
            <p>{project.duration}</p>
          </div>
          <div className="flex flex-row gap-2">
            <UserRound />
            <p> {project.type}</p>
          </div>
          <div className="flex flex-row gap-2">
            <Swords />
            <p>{project.tech}</p>
          </div>
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
