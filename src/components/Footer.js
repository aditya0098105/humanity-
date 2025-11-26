export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">HumanityFirst Global Relief</h3>
          <p className="text-sm text-gray-100">We work for the entire humanity – food, education, health, environment & global welfare.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-100">support@humanityfirst.org</p>
          <p className="text-sm text-gray-100">+1 (202) 555-0198</p>
          <p className="text-sm text-gray-100">WhatsApp +44 7700 900123</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Transparency</h4>
          <p className="text-sm text-gray-100">Audit-ready reporting</p>
          <p className="text-sm text-gray-100">2FA-secured donor access</p>
          <p className="text-sm text-gray-100">Admin login placeholder</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Get involved</h4>
          <p className="text-sm text-gray-100">Volunteer with global teams</p>
          <p className="text-sm text-gray-100">Corporate & foundation giving</p>
          <p className="text-sm text-gray-100">Media & storytelling</p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-sm py-4 text-gray-100">© 2025 HumanityFirst Global Relief</div>
    </footer>
  );
}
