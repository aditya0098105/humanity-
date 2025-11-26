import donors from "@/data/donors.json";

export const metadata = { title: "Donors Wall | HumanityFirst" };

const filters = ["Latest donors", "Top donors", "Monthly donors"];

export default function DonorsPage() {
  return (
    <div className="section-padding max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mb-8">
        <div>
          <h1 className="section-title">Donors wall</h1>
          <p className="section-subtitle">A beautiful scrolling wall recognizing every supporter.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <span key={filter} className="badge">{filter}</span>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        {donors.map((donor) => (
          <div key={`${donor.name}-${donor.time}`} className="card flex items-center justify-between">
            <div>
              <p className="font-semibold text-secondary">{donor.name}</p>
              <p className="text-xs text-gray-500">{donor.time}</p>
              <p className="text-sm text-gray-600">{donor.message}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">${donor.amount.toLocaleString()}</p>
              <p className="text-xs text-gray-500">{donor.projectSlug}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6 text-sm text-gray-600">Infinite scroll placeholder — load more donors as the user scrolls.</div>
    </div>
  );
}
