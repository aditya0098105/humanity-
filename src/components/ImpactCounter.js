export default function ImpactCounter({ label, value, icon }) {
  return (
    <div className="card text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-3xl font-bold text-secondary">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
