export const metadata = { title: "About | HumanityFirst Global Relief" };

export default function AboutPage() {
  return (
    <div className="section-padding max-w-6xl mx-auto bg-white rounded-3xl shadow-card">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="section-title">About HumanityFirst Global Relief</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are a global humanitarian movement delivering food, education, healthcare, environment, and protection services with radical transparency. Our distributed teams partner with local responders so aid reaches people faster and with dignity.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card">
              <h3 className="font-semibold text-secondary mb-1">Mission</h3>
              <p className="text-sm text-gray-600">Serve every person with accountable, community-led aid.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-secondary mb-1">Vision</h3>
              <p className="text-sm text-gray-600">A world where generosity is traceable and every donor sees the impact.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-secondary mb-1">Values</h3>
              <p className="text-sm text-gray-600">Dignity, transparency, climate responsibility, and partnership.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-secondary mb-1">Model</h3>
              <p className="text-sm text-gray-600">Local-first response, open reporting, and published invoices.</p>
            </div>
          </div>
        </div>
        <div className="card bg-gradient-to-br from-primary/10 via-white to-accent/10">
          <h2 className="text-xl font-semibold text-secondary mb-3">Transparency commitments</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Independent audits and quarterly financial statements.</li>
            <li>Invoice-level reporting and receipt downloads.</li>
            <li>Admin login placeholders and audit log design.</li>
            <li>2FA-ready donor accounts and HTTPS-first deployment guidance.</li>
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div className="card"><p className="text-2xl font-bold text-secondary">42</p><p className="text-sm text-gray-600">Countries reached</p></div>
            <div className="card"><p className="text-2xl font-bold text-secondary">1,200</p><p className="text-sm text-gray-600">Local partners</p></div>
            <div className="card"><p className="text-2xl font-bold text-secondary">98%</p><p className="text-sm text-gray-600">Programs rating</p></div>
            <div className="card"><p className="text-2xl font-bold text-secondary">24/7</p><p className="text-sm text-gray-600">Impact updates</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
