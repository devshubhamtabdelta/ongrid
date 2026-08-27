const STATS = [
  { value: "1 Billion+", label: "Verifications completed" },
  { value: "4000+", label: "Customers served" },
  { value: "50+", label: "Types of checks" },
  { value: "90%", label: "Closed within 5 working days" },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold text-brand md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
