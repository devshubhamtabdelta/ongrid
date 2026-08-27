const CHECKS = [
  { icon: "🪪", title: "Identity", body: "Government ID validation and identity match." },
  { icon: "⚖️", title: "Criminal", body: "Court record and criminal history searches." },
  { icon: "🏠", title: "Address", body: "Current and permanent address confirmation." },
  { icon: "📋", title: "Field Audit", body: "On-ground checks by trained field agents." },
  { icon: "💼", title: "Employment", body: "Past employer, tenure and role verification." },
  { icon: "🎓", title: "Education", body: "Degree, institute and credential checks." },
  { icon: "💳", title: "Credit", body: "Financial and credit-bureau history review." },
  { icon: "➕", title: "Other Checks", body: "Reference, drug test, database and more." },
];

export default function Verifications() {
  return (
    <section id="verifications" className="bg-brand-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Verifications
        </h2>
        <p className="mt-2 max-w-xl text-slate-600">
          Mix and match checks to build the right screening package.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CHECKS.map((c) => (
            <div
              key={c.title}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="text-2xl">{c.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.body}</p>
              <a
                href="#contact"
                className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
              >
                View products →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
