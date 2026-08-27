const COLUMNS = [
  {
    title: "Services",
    links: ["Background verification", "Employee onboarding", "Vendor checks", "API access"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case studies", "Help center", "Compliance guides"],
  },
  {
    title: "Partners",
    links: ["Become a partner", "Integrations", "Referral program"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-white text-sm font-bold text-brand-dark">
              OG
            </span>
            <span className="text-lg font-semibold text-white">OnGrid</span>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            A digital trust platform for background verification and compliant
            hiring.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} OnGrid clone. For educational use only.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
