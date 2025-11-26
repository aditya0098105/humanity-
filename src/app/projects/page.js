import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";

export const metadata = { title: "Projects | HumanityFirst" };

export default function ProjectsPage() {
  return (
    <div className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="section-title">Active projects across the globe</h1>
        <p className="section-subtitle max-w-3xl mx-auto">Real-time progress, transparent budgets, and open invoices for every project.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
