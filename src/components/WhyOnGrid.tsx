const REASONS = [
  {
    icon: "🔒",
    title: "Compliance & data security",
    body: "ISO-certified processes with encryption and strict access controls for candidate data.",
  },
  {
    icon: "🧩",
    title: "Customised solutions",
    body: "Choose from 50+ background checks and build a package that fits each role.",
  },
  {
    icon: "⚡",
    title: "Fast turnaround",
    body: "Around 90% of checks close within five working days through automation.",
  },
  {
    icon: "🎯",
    title: "Precision & accuracy",
    body: "Verified sources and multi-step review keep results dependable at scale.",
  },
];

export default function WhyOnGrid() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Why OnGrid
        </h2>
        <p className="mt-2 max-w-xl text-slate-600">
          A verification partner built for compliance-heavy hiring.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="text-2xl">{r.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
