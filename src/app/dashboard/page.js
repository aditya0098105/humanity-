"use client";

import donors from "@/data/donors.json";
import transactions from "@/data/transactions.json";
import { PieChart, LineChart } from "@/components/ChartCard";

export const metadata = { title: "Donor Dashboard | HumanityFirst" };

export default function DashboardPage() {
  const allocationData = {
    labels: ["Food", "Education", "Health", "Disaster", "Environment"],
    datasets: [
      {
        data: [32, 22, 18, 15, 13],
        backgroundColor: ["#1D70A2", "#00A8E8", "#0B3C5D", "#58A4B0", "#90EE90"],
      },
    ],
  };

  const timelineData = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Donations",
        data: [8, 12, 14, 18, 21, 24],
        borderColor: "#1D70A2",
        backgroundColor: "rgba(29,112,162,0.2)",
        tension: 0.35,
        fill: true,
      },
    ],
  };

  return (
    <div className="section-padding max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="section-title">Donor dashboard</h1>
          <p className="section-subtitle">Track where your money goes, download receipts, and follow projects on the map.</p>
        </div>
        <div className="badge">2FA login placeholder</div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="card">
          <p className="text-sm text-gray-500">My total giving</p>
          <p className="text-3xl font-bold text-secondary">$14,250</p>
          <p className="text-sm text-primary font-semibold">+12% vs last quarter</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Receipts ready</p>
          <p className="text-3xl font-bold text-secondary">18</p>
          <p className="text-sm text-primary font-semibold">Download as PDF</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Badges earned</p>
          <p className="text-3xl font-bold text-secondary">Gold</p>
          <p className="text-sm text-primary font-semibold">Bronze • Silver • Gold</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="card lg:col-span-2">
          <h3 className="text-lg font-semibold text-secondary mb-4">Donation timeline</h3>
          <LineChart
            data={timelineData}
            options={{
              plugins: { legend: { display: false } },
              scales: { y: { beginAtZero: true } },
            }}
          />
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-secondary mb-4">Fund allocation</h3>
          <PieChart data={allocationData} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="card">
          <h3 className="text-lg font-semibold text-secondary mb-3">Where my money was used</h3>
          <div className="space-y-3 text-sm text-gray-700">
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
        <div className="card">
          <h3 className="text-lg font-semibold text-secondary mb-3">Map & project locations</h3>
          <div className="h-64 rounded-2xl bg-gradient-to-br from-secondary via-primary to-accent flex items-center justify-center text-white font-semibold">
            Interactive map placeholder
          </div>
          <p className="text-xs text-gray-600 mt-2">Pin projects here via Google Maps or Mapbox.</p>
        </div>
      </div>
      <div className="card mt-10">
        <h3 className="text-lg font-semibold text-secondary mb-3">Donor profile</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="p-3 rounded-lg bg-muted">
            <p className="font-semibold text-secondary">Name</p>
            <p>Alex Morgan</p>
          </div>
          <div className="p-3 rounded-lg bg-muted">
            <p className="font-semibold text-secondary">Email</p>
            <p>alex.morgan@example.com</p>
          </div>
          <div className="p-3 rounded-lg bg-muted">
            <p className="font-semibold text-secondary">Preferred cause</p>
            <p>Education & Climate</p>
          </div>
          <div className="p-3 rounded-lg bg-muted">
            <p className="font-semibold text-secondary">2FA status</p>
            <p>Enabled (UI placeholder)</p>
          </div>
        </div>
      </div>
      <div className="card mt-6">
        <h3 className="text-lg font-semibold text-secondary mb-3">Recent donors</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {donors.slice(0, 4).map((donor) => (
            <div key={`${donor.name}-${donor.time}`} className="p-4 rounded-xl bg-muted flex items-center justify-between">
              <div>
                <p className="font-semibold text-secondary">{donor.name}</p>
                <p className="text-xs text-gray-500">{donor.time}</p>
              </div>
              <p className="text-primary font-bold">${donor.amount.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
