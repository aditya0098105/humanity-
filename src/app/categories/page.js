const categories = [
  { title: "Food Support", icon: "🥗", description: "Nutritious food baskets, kitchen kits, and livelihoods." },
  { title: "Education Support", icon: "📚", description: "Digital labs, teacher training, and scholarship support." },
  { title: "Healthcare Support", icon: "🩺", description: "Mobile clinics, telehealth, and essential medicines." },
  { title: "Disaster Relief", icon: "🚑", description: "Shelter, hygiene kits, cash for work, and WASH services." },
  { title: "Environment Protection", icon: "🌳", description: "Reforestation, clean energy, and carbon monitoring." },
  { title: "Women & Child Welfare", icon: "🧡", description: "Safe homes, psychosocial care, and accelerated learning." },
  { title: "Animal Welfare", icon: "🐾", description: "Community vet clinics, rescue, and humane education." }
];

export const metadata = { title: "Donation Categories | HumanityFirst" };

export default function CategoriesPage() {
  return (
    <div className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="section-title">Support across every need</h1>
        <p className="section-subtitle max-w-3xl mx-auto">Select a category to view all active projects and track how funds are used for each program.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.title} id={category.title.replace(/\s+/g, "-").toLowerCase()} className="card flex flex-col gap-3">
            <div className="badge w-max">{category.icon} {category.title}</div>
            <p className="text-gray-600 text-sm">{category.description}</p>
            <p className="text-sm font-semibold text-primary">Projects available • tracked usage</p>
          </div>
        ))}
      </div>
    </div>
  );
}
