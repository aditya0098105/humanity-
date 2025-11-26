export default function DonorCard({ donor }) {
  return (
    <div className="card flex items-center justify-between gap-4">
      <div>
        <p className="font-semibold text-secondary">{donor.name}</p>
        <p className="text-sm text-gray-600">{donor.time}</p>
        <p className="text-sm text-gray-500 italic">“{donor.message}”</p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-primary">${donor.amount.toLocaleString()}</p>
        <p className="text-xs text-gray-500">{donor.projectSlug.replace(/-/g, " ")}</p>
      </div>
    </div>
  );
}
