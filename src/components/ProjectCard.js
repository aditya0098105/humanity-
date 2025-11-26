import Link from "next/link";
import ProgressBar from "./ProgressBar";

export default function ProjectCard({ project }) {
  return (
    <div className="card flex flex-col gap-4">
      <div className="h-44 rounded-xl bg-gradient-to-br from-primary/10 via-white to-accent/10 flex items-end p-4" style={{ backgroundImage: `url(${project.banner})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="bg-white/90 backdrop-blur rounded-lg px-3 py-2 text-xs font-semibold text-secondary w-max">{project.location}</div>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-600">
        <span className="badge">{project.category}</span>
        <span className="text-gray-400">•</span>
        <span>{project.country}</span>
      </div>
      <h3 className="text-xl font-semibold text-secondary">{project.title}</h3>
      <p className="text-sm text-gray-600">{project.summary}</p>
      <ProgressBar value={project.progress} />
      <div className="flex items-center justify-between text-sm font-semibold text-secondary">
        <p>Raised ${project.raised.toLocaleString()}</p>
        <p className="text-gray-500">Goal ${project.goal.toLocaleString()}</p>
      </div>
      <div className="flex gap-3 mt-auto">
        <Link href={`/projects/${project.slug}`} className="button-secondary text-sm w-full text-center">Track usage</Link>
        <Link href={`/donate?project=${project.slug}`} className="button-primary text-sm w-full text-center">Donate now</Link>
      </div>
    </div>
  );
}
