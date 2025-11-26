import projects from "@/data/projects.json";
import donors from "@/data/donors.json";
import invoices from "@/data/invoices.json";
import transactions from "@/data/transactions.json";
import updates from "@/data/updates.json";
import ProgressBar from "@/components/ProgressBar";
import DonorCard from "@/components/DonorCard";
import InvoiceItem from "@/components/InvoiceItem";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const projectDonors = donors.filter((d) => d.projectSlug === project.slug);
  const projectInvoices = invoices.filter((i) => i.projectSlug === project.slug);
  const projectTransactions = transactions.filter((t) => t.projectSlug === project.slug);
  const projectUpdates = updates.filter((u) => u.projectSlug === project.slug);

  const budgetBreakdown = [
    { label: "Program delivery", value: 55 },
    { label: "Operations", value: 18 },
    { label: "Monitoring & evaluation", value: 15 },
    { label: "Contingency", value: 12 },
  ];

  return (
    <div className="section-padding max-w-6xl mx-auto space-y-10">
      <div className="card overflow-hidden">
        <div
          className="h-64 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${project.banner})` }}
        />
        <div className="mt-6 grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="badge">{project.category}</span>
              <span>{project.location}</span>
              <span className="text-gray-400">•</span>
              <span>{project.country}</span>
            </div>
            <h1 className="text-3xl font-bold text-secondary">{project.title}</h1>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
            <ProgressBar value={project.progress} />
            <div className="flex gap-6 text-sm font-semibold text-secondary">
              <p>Raised ${project.raised.toLocaleString()}</p>
              <p className="text-gray-500">Goal ${project.goal.toLocaleString()}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {budgetBreakdown.map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-muted border border-gray-100 flex items-center justify-between">
                  <p className="font-semibold text-secondary">{item.label}</p>
                  <p className="text-primary font-bold">{item.value}%</p>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {projectUpdates.map((update) => (
                <div key={update.title} className="card">
                  <p className="text-xs text-primary font-semibold">{update.timestamp}</p>
                  <p className="font-semibold text-secondary">{update.title}</p>
                  <p className="text-sm text-gray-600">{update.detail}</p>
                </div>
              ))}
            </div>
            <div className="card bg-gradient-to-br from-primary/10 via-white to-accent/10">
              <h3 className="text-xl font-semibold text-secondary mb-2">Photo & gallery placeholders</h3>
              <p className="text-sm text-gray-600">Add high-resolution images and video stories from the field here.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-secondary mb-3">Donor comments</h3>
              <div className="space-y-3 text-sm text-gray-700">
                {projectDonors.slice(0, 3).map((donor) => (
                  <p key={`${donor.name}-${donor.time}`} className="p-3 rounded-lg bg-muted">“{donor.message}” — {donor.name}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-secondary">Donate to this project</h3>
            <div className="space-y-3">
              <input type="number" className="w-full rounded-lg border-gray-200" placeholder="Amount" />
              <button className="button-primary w-full">Donate now</button>
              <p className="text-xs text-gray-600">One-time and monthly donation toggles can be wired here. Redirect to donor dashboard after success.</p>
            </div>
            <div className="card bg-muted border border-dashed border-primary/40">
              <p className="text-sm font-semibold text-secondary mb-1">Invoices & receipts</p>
              <p className="text-xs text-gray-600">Published evidence of spend for full transparency.</p>
            </div>
            <div className="space-y-3">
              {projectInvoices.map((invoice) => (
                <InvoiceItem key={invoice.file} invoice={invoice} />
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">Transactions</h4>
              <div className="space-y-2 text-sm text-gray-700">
                {projectTransactions.map((txn) => (
                  <div key={txn.id} className="p-3 rounded-lg bg-muted flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-secondary">{txn.type}</p>
                      <p className="text-xs text-gray-500">{txn.date}</p>
                    </div>
                    <p className="text-primary font-bold">${txn.amount.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">Donors</h4>
              <div className="space-y-2">
                {projectDonors.map((donor) => (
                  <DonorCard key={`${donor.name}-${donor.time}`} donor={donor} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
