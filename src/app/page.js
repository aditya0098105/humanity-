import Link from "next/link";
import ImpactCounter from "@/components/ImpactCounter";
import CategoryCard from "@/components/CategoryCard";
import ProjectCard from "@/components/ProjectCard";
import DonorCard from "@/components/DonorCard";
import projects from "@/data/projects.json";
import donors from "@/data/donors.json";
import updates from "@/data/updates.json";

const categories = [
  { title: "Food Support", icon: "🥗", description: "Emergency food baskets, nutrition and livelihood recovery." },
  { title: "Education Support", icon: "📚", description: "STEM labs, teacher training, and inclusive schooling." },
  { title: "Healthcare Support", icon: "🩺", description: "Mobile clinics, telehealth, vaccines and diagnostics." },
  { title: "Disaster Relief", icon: "🚑", description: "Shelter, cash assistance, water and hygiene kits." },
  { title: "Environment Protection", icon: "🌳", description: "Reforestation, community stewardship and carbon tracking." },
  { title: "Women & Child Welfare", icon: "🧡", description: "Safe homes, legal aid and accelerated learning pathways." },
  { title: "Animal Welfare", icon: "🐾", description: "Mobile veterinary care and humane education for youth." }
];

export default function HomePage() {
  return (
    <div>
      <section className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="badge mb-4">We work for the entire humanity</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary leading-tight mb-6">
            Food, education, health, environment & global welfare for every community.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Complete transparency, donor recognition, and real-time project tracking powered by HumanityFirst Global Relief.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/donate" className="button-primary">Donate now</Link>
            <Link href="/transparency" className="button-secondary">See transparency dashboard</Link>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <ImpactCounter label="Meals served" value="1.2M" icon="🍚" />
            <ImpactCounter label="Children educated" value="82k" icon="🎓" />
            <ImpactCounter label="Patients treated" value="410k" icon="❤️" />
            <ImpactCounter label="Trees planted" value="3.4M" icon="🌱" />
          </div>
        </div>
        <div className="card bg-gradient-to-br from-primary/10 via-white to-accent/10">
          <div className="bg-white rounded-xl p-6 shadow-card">
            <h3 className="text-2xl font-semibold text-secondary mb-3">Live transparency</h3>
            <p className="text-gray-600 mb-6">Track how every dollar is allocated across food, health, education, and climate programs.</p>
            <div className="grid grid-cols-2 gap-4">
              {updates.map((update) => (
                <div key={update.title} className="p-4 rounded-xl bg-muted border border-gray-100">
                  <p className="text-xs text-primary font-semibold">{update.timestamp}</p>
                  <p className="font-semibold text-secondary">{update.title}</p>
                  <p className="text-xs text-gray-600">{update.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center">2FA</div>
              <div>
                <p className="font-semibold text-secondary">Security placeholders</p>
                <p className="text-xs text-gray-600">HTTPS/SSL, admin login, audit logs, and two-factor authentication UI ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="section-title">Donation categories</h2>
              <p className="section-subtitle">Choose a focus area to explore live projects.</p>
            </div>
            <Link href="/categories" className="button-secondary text-sm">View all</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="section-title">Featured projects</h2>
              <p className="section-subtitle">Fully trackable, audit-friendly programs.</p>
            </div>
            <Link href="/projects" className="button-secondary text-sm">Browse all</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-2/3">
              <h2 className="section-title">Donors wall</h2>
              <p className="section-subtitle">Recognition for every contribution with optional anonymity.</p>
              <div className="grid gap-4">
                {donors.slice(0, 4).map((donor) => (
                  <DonorCard key={`${donor.name}-${donor.time}`} donor={donor} />
                ))}
              </div>
              <Link href="/donors" className="button-secondary text-sm mt-4 inline-flex">View full donors wall</Link>
            </div>
            <div className="lg:w-1/3 card bg-gradient-to-br from-primary/10 via-white to-accent/10">
              <h3 className="text-xl font-semibold text-secondary mb-2">Dashboard preview</h3>
              <p className="text-gray-600 mb-4">See receipts, invoices, and geo-tracked impact in your donor portal.</p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between"><span>Receipts downloaded</span><span className="font-semibold">148</span></div>
                <div className="flex justify-between"><span>Invoices published</span><span className="font-semibold">62</span></div>
                <div className="flex justify-between"><span>Countries covered</span><span className="font-semibold">27</span></div>
              </div>
              <Link href="/dashboard" className="button-primary mt-6 inline-flex">Open donor dashboard</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
