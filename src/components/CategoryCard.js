import Link from "next/link";

export default function CategoryCard({ title, description, icon }) {
  return (
    <Link href={`/categories#${title.replace(/\s+/g, "-").toLowerCase()}`} className="card flex flex-col gap-3">
      <div className="badge w-max">{icon} {title}</div>
      <p className="text-gray-600 text-sm">{description}</p>
      <span className="text-primary font-semibold text-sm">View projects →</span>
    </Link>
  );
}
