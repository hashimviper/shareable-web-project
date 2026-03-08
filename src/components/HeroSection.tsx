const HeroSection = () => {
  const stats = [
    { val: "$21.3M", lbl: "Annual Net Saving" },
    { val: "75%", lbl: "Net Profit Margin" },
    { val: "$124M", lbl: "10-Year NPV @ 8%" },
    { val: "4.2yr", lbl: "Capital Payback" },
  ];

  const tags = [
    { text: "100 MW Hyperscale", highlight: true },
    { text: "Proprietary Recovery System", highlight: true },
    { text: "Closed-Loop Infrastructure", highlight: true },
    { text: "30-Day Stress Test", highlight: false },
    { text: "720-Hour Dataset", highlight: false },
    { text: "Digital Twin", highlight: false },
    { text: "Predictive Risk Engine", highlight: false },
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-[120px] pb-20 relative overflow-hidden">
      {/* Background geometric element */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[min(600px,45vw)] h-[min(600px,45vw)] border border-primary/[0.06] rounded-full pointer-events-none hidden md:block">
        <div className="absolute inset-10 border border-primary/[0.04] rounded-full" />
        <div className="absolute inset-[110px] border border-primary/[0.08] rounded-full animate-[slow-spin_40s_linear_infinite]" />
      </div>

      <div className="font-mono text-[11px] tracking-[4px] text-primary uppercase mb-6 flex items-center gap-4">
        <span className="inline-block w-10 h-px bg-primary" />
        Independent Engineering Analysis · March 2026
      </div>

      <h1 className="font-head text-[clamp(64px,9vw,128px)] tracking-[6px] leading-[0.9] text-foreground mb-8">
        PROJECT
        <span className="text-primary block">CYCLOSYS</span>
      </h1>

      <p className="text-lg text-sub2 max-w-[560px] mb-[52px] font-light leading-relaxed">
        A 100 MW hyperscale data centre sustainability model demonstrating
        measurable financial returns through a proprietary multi-subsystem
        infrastructure design — details available under NDA or at technical interview.
      </p>

      <div className="flex flex-wrap gap-2.5 mb-[52px]">
        {tags.map((tag) => (
          <span
            key={tag.text}
            className={`px-4 py-1.5 border rounded-sm font-mono text-[10px] tracking-[2px] uppercase ${
              tag.highlight
                ? "border-primary/30 text-primary bg-primary/5"
                : "border-border text-sub2 bg-bg2"
            }`}
          >
            {tag.text}
          </span>
        ))}
      </div>

      <div className="reveal grid grid-cols-2 md:grid-cols-4 w-fit border border-border rounded overflow-hidden">
        {stats.map((stat) => (
          <div key={stat.lbl} className="px-8 py-5 border-r border-border last:border-r-0 bg-bg2">
            <span className="font-head text-4xl tracking-[2px] text-primary block leading-none">
              {stat.val}
            </span>
            <span className="font-mono text-[9px] tracking-[2px] text-sub uppercase mt-1.5 block">
              {stat.lbl}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
