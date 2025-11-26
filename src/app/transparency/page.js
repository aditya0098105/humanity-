import transactions from "@/data/transactions.json";
import invoices from "@/data/invoices.json";
import updates from "@/data/updates.json";

export const metadata = { title: "Transparency Dashboard | HumanityFirst" };

export default function TransparencyPage() {
  const expenses = [
    { label: "Food", value: 42 },
    { label: "Education", value: 18 },
    { label: "Health", value: 16 },
    { label: "Disaster", value: 14 },
    { label: "Environment", value: 10 },
  ];

  const countries = [
    { name: "Kenya", value: 28 },
    { name: "India", value: 22 },
    { name: "Peru", value: 18 },
    { name: "Nepal", value: 17 },
    { name: "Indonesia", value: 15 },
  ];

  return (
    <div className="section-padding max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-4 items-start lg:items-center mb-8">
        <div>
          <h1 className="section-title">Transparency dashboard</h1>
          <p className="section-subtitle">Global view of funds raised, spent, and evidence published.</p>
        </div>
        <div className="badge">Admin login placeholder</div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="card">
          <p className="text-sm text-gray-500">Total funds raised</p>
          <p className="text-3xl font-bold text-secondary">$2.8M</p>
          <p className="text-sm text-primary font-semibold">Updated weekly</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Funds spent so far</p>
          <p className="text-3xl font-bold text-secondary">$1.96M</p>
          <p className="text-sm text-primary font-semibold">Invoices published below</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Audit-ready entries</p>
          <p className="text-3xl font-bold text-secondary">312</p>
          <p className="text-sm text-primary font-semibold">Export CSV</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-secondary mb-3">Category-wise expenses</h3>
          <div className="space-y-3">
            {expenses.map((expense) => (
              <div key={expense.label} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                <p className="font-semibold text-secondary">{expense.label}</p>
                <p className="text-primary font-bold">{expense.value}%</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-secondary mb-3">Country distribution</h3>
          <div className="space-y-3">
            {countries.map((country) => (
              <div key={country.name} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                <p className="font-semibold text-secondary">{country.name}</p>
                <p className="text-primary font-bold">{country.value}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card mt-8">
        <h3 className="text-lg font-semibold text-secondary mb-3">Recent invoices</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {invoices.map((invoice) => (
            <div key={invoice.file} className="p-4 rounded-xl bg-muted flex items-center justify-between">
              <div>
                <p className="font-semibold text-secondary">{invoice.vendor}</p>
                <p className="text-xs text-gray-500">{invoice.date}</p>
              </div>
              <p className="text-primary font-bold">${invoice.amount.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="card mt-6">
        <h3 className="text-lg font-semibold text-secondary mb-3">Weekly updates</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {updates.map((update) => (
            <div key={update.title} className="p-4 rounded-xl bg-muted">
              <p className="text-xs text-primary font-semibold">{update.timestamp}</p>
              <p className="font-semibold text-secondary">{update.title}</p>
              <p className="text-sm text-gray-600">{update.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="card mt-6">
        <h3 className="text-lg font-semibold text-secondary mb-3">Recent transactions</h3>
        <div className="space-y-3">
          {transactions.map((txn) => (
            <div key={txn.id} className="flex items-center justify-between p-3 rounded-lg bg-muted">
              <div>
                <p className="font-semibold text-secondary">{txn.type}</p>
                <p className="text-xs text-gray-500">{txn.date}</p>
              </div>
              <p className="text-primary font-bold">${txn.amount.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
