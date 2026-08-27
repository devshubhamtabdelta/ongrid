import Placeholder from "./Placeholder";

export default function LogoMarquee() {
  const items = Array.from({ length: 8 });

  return (
    <section className="bg-white py-10">
      <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-400">
        Trusted by teams across industries
      </p>
      <div className="mt-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-6">
          {[...items, ...items].map((_, i) => (
            <Placeholder
              key={i}
              label="client logo"
              className="h-14 w-36 shrink-0"
              rounded="rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
