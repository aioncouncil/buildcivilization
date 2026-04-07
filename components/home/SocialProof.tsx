export function SocialProof() {
  const precedents = [
    {
      name: "Walt Disney",
      stat: "25,000 acres",
      result: "Most visited destination on Earth",
    },
    {
      name: "The Villages",
      stat: "$9.9B revenue",
      result: "Same financing model we\u2019re using",
    },
    {
      name: "William Penn",
      stat: "45,000 acres",
      result: "Philadelphia is still standing",
    },
    {
      name: "Mondrag\u00F3n",
      stat: "80,000 worker-owners",
      result: "$12.9B/yr in cooperative revenue",
    },
  ];

  return (
    <section className="border-y border-stone-200 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-stone-400">
          This has been done before
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {precedents.map((p) => (
            <div key={p.name} className="text-center">
              <p className="text-base font-semibold text-stone-900">{p.name}</p>
              <p className="mt-1 text-sm font-medium text-stone-700">{p.stat}</p>
              <p className="mt-1 text-xs text-stone-500">{p.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
