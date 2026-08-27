import Placeholder from "./Placeholder";

const PRODUCTS = [
  { name: "eLockr", body: "Digital employment credentials that ex-employees can carry and share." },
  { name: "Gridlines APIs", body: "APIs for customer onboarding, KYC and fraud monitoring." },
  { name: "Reczee", body: "An AI-native hiring and applicant-tracking platform." },
  { name: "Veriffy", body: "Background checks for household and personal staff." },
  { name: "Ancora", body: "Channel-partner lifecycle management for financial institutions." },
];

export default function Products() {
  return (
    <section id="products" className="bg-brand-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          The OnGrid product family
        </h2>
        <p className="mt-2 max-w-xl text-slate-600">
          Tools that extend digital trust across hiring, onboarding and partnerships.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <Placeholder label={`${p.name} logo`} className="h-12 w-32" rounded="rounded-lg" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
