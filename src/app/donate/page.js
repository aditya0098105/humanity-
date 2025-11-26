export const metadata = { title: "Donate | HumanityFirst" };

const projects = [
  { label: "General emergency fund", value: "emergency" },
  { label: "Food Security Kits for Northern Kenya", value: "food-security-kenya" },
  { label: "Digital Learning Labs for Rural India", value: "education-digital-labs-india" },
  { label: "Mobile Health Clinics for the Andes", value: "mobile-health-clinics-peru" },
  { label: "Rapid Response for Monsoon Emergencies", value: "rapid-response-nepal" }
];

export default function DonatePage() {
  return (
    <div className="section-padding max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-card p-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="section-title">Donate to HumanityFirst</h1>
            <p className="section-subtitle">One-time or monthly gifts with optional anonymity.</p>
          </div>
          <div className="badge">🔒 HTTPS/SSL placeholder</div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-secondary">Donation type</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="button-primary w-full">One-time</button>
              <button className="button-secondary w-full">Monthly</button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-secondary">Select project</label>
              <select className="w-full rounded-lg border-gray-200">
                {projects.map((project) => (
                  <option key={project.value} value={project.value}>{project.label}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-secondary">Amount</label>
              <input type="number" className="w-full rounded-lg border-gray-200" placeholder="$100" />
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="public" className="rounded border-gray-300" />
              <label htmlFor="public" className="text-sm text-gray-700">Show my name publicly</label>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="anonymous" className="rounded border-gray-300" />
              <label htmlFor="anonymous" className="text-sm text-gray-700">Anonymous donation</label>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-secondary">Donor information</h3>
            <input className="w-full rounded-lg border-gray-200" placeholder="Full name" />
            <input className="w-full rounded-lg border-gray-200" placeholder="Email" />
            <input className="w-full rounded-lg border-gray-200" placeholder="Country" />
            <textarea className="w-full rounded-lg border-gray-200" rows="3" placeholder="Message to project team" />
            <div className="bg-muted border border-dashed border-primary/40 rounded-xl p-4 text-sm text-gray-700">
              <p className="font-semibold text-secondary">Payment placeholder</p>
              <p>Simulated success → redirect to donor dashboard.</p>
            </div>
            <button className="button-primary w-full">Complete donation</button>
          </div>
        </div>
      </div>
    </div>
  );
}
