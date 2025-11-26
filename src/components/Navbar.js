import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/categories", label: "Categories" },
  { href: "/projects", label: "Projects" },
  { href: "/donors", label: "Donors" },
  { href: "/transparency", label: "Transparency" },
  { href: "/dashboard", label: "Dashboard" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">HF</div>
          <div>
            <p className="text-sm text-gray-500">HumanityFirst</p>
            <p className="text-lg font-semibold text-secondary">Global Relief</p>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/donate" className="button-primary text-sm">Donate</Link>
          <div className="hidden sm:block text-xs text-gray-500 text-right">
            <p className="font-semibold text-secondary">Global helpline</p>
            <p>+1 (202) 555-0198</p>
          </div>
        </div>
      </div>
    </header>
  );
}
