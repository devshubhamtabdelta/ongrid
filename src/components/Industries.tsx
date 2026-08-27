const INDUSTRIES = [
  "IT / ITeS",
  "Banking & Financial Services",
  "Staffing",
  "EdTech",
  "Retail & Hospitality",
  "Transportation & Logistics",
  "Manufacturing",
  "Healthcare",
  "Internet Platforms",
];

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Solutions by industry
        </h2>
        <p className="mt-2 max-w-xl text-slate-600">
          Verification packages tuned to the roles and risks of each sector.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {INDUSTRIES.map((name) => (
            <span
              key={name}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
