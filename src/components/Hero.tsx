import Placeholder from "./Placeholder";

export default function Hero() {
  return (
    <section className="bg-brand-light">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand ring-1 ring-brand/20">
            Digital Trust Platform
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Build trust with faster, compliant background verification
          </h1>
          <p className="mt-5 max-w-lg text-lg text-slate-600">
            Help HR teams and service providers run background checks (BGV) at
            scale — supporting accountability and HR/ISO compliance across the
            hiring lifecycle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Talk to Sales
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-300 transition-colors hover:ring-brand"
            >
              Sign In
            </a>
          </div>
        </div>

        <Placeholder label="hero visual" className="aspect-[4/3] w-full" rounded="rounded-2xl" />
      </div>
    </section>
  );
}
