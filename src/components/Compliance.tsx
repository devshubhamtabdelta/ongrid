import Placeholder from "./Placeholder";

export default function Compliance() {
  return (
    <section id="compliance" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Security & compliance by design
          </h2>
          <p className="mt-4 text-slate-600">
            Data is handled under recognised information-security standards, with
            audited controls, encryption in transit and at rest, and role-based
            access. Certifications such as ISO 27001 and SOC 2 Type II reflect
            that commitment.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• Encrypted storage and transfer of candidate data</li>
            <li>• Consent-first data collection</li>
            <li>• Regular third-party audits</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Placeholder label="ISO 27001" className="aspect-square w-1/2" />
          <Placeholder label="SOC 2" className="aspect-square w-1/2" />
        </div>
      </div>
    </section>
  );
}
