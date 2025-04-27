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
  loaderData,
}: {
  loaderData: { project: ProjectType };
}) {
  const { project } = loaderData;

  return (
    <main className="w-full md:h-screen">
      <section className="h-2/3 flex flex-col md:flex-row items-center px-4 md:px-40 pt-20 pb-5">
        <div className="flex flex-col gap-4">
          <h2>
            {project.title}
          </h2>
          <h3 className="text-green-dark">{project.subtitle}</h3>
          <div className="flex flex-col gap-6 mt-4">
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
        </div>
        <video className="w-full md:w-4/5" autoPlay loop muted>
          <source
            src={project.video || "/placeholder-video.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="py-10 px-4 md:px-40 bg-light-pink h-1/3">
        <p className="mt-4 text-lg text-primary-green">{project.description}</p>
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
