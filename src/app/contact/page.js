export const metadata = { title: "Contact | HumanityFirst" };

export default function ContactPage() {
  return (
    <div className="section-padding max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-card p-8 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="section-title">Contact our team</h1>
          <p className="section-subtitle">Support, partnerships, and media inquiries are welcome.</p>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>Email:</strong> support@humanityfirst.org</p>
            <p><strong>WhatsApp:</strong> +44 7700 900123</p>
            <p><strong>Phone:</strong> +1 (202) 555-0198</p>
            <p><strong>Location:</strong> Global HQ, Geneva & Washington D.C.</p>
          </div>
          <div className="card mt-6 bg-gradient-to-br from-primary/10 via-white to-accent/10">
            <h3 className="text-lg font-semibold text-secondary">Media & storytelling</h3>
            <p className="text-sm text-gray-600">Reach out for field footage, interviews, and data-driven impact stories.</p>
          </div>
        </div>
        <div className="space-y-4">
          <input className="w-full rounded-lg border-gray-200" placeholder="Full name" />
          <input className="w-full rounded-lg border-gray-200" placeholder="Email" />
          <input className="w-full rounded-lg border-gray-200" placeholder="Subject" />
          <textarea className="w-full rounded-lg border-gray-200" rows="4" placeholder="How can we help?" />
          <button className="button-primary w-full">Send message</button>
          <p className="text-xs text-gray-500">We respond within 24 hours.</p>
        </div>
      </div>
    </div>
  );
}
