const visionPoints = [
  {
    num: "01",
    title: "Hyperscale IT Infrastructure",
    text: "100 MW GPU/TPU compute cluster operating at 18.4 kW per rack average density. Full direct-to-chip liquid cooling architecture deployed across the entire server estate, eliminating legacy air-cooling inefficiency.",
  },
  {
    num: "02",
    title: "Proprietary Energy Recovery",
    text: "A proprietary subsystem converts facility operational losses into internal electricity — permanently reducing grid dependency and carbon exposure. Output: 6.22 MW. Mechanism disclosed at interview only.",
  },
  {
    num: "03",
    title: "Proprietary Resource Efficiency",
    text: "A secondary proprietary subsystem achieves 98.68% resource recovery from the facility's operational circuit — 600× better than industry standard. Mechanism disclosed at interview only.",
  },
  {
    num: "04",
    title: "Integrated Digital Twin",
    text: "Full-fidelity operational model with live subsystem replay, predictive failure analysis, and real-time OPEX saving computation — demonstrated across a 720-hour validated dataset.",
  },
];

const VisionSection = () => {
  return (
    <section id="vision" className="px-6 md:px-12 py-[100px] relative z-[1]">
      <div className="font-mono text-[10px] tracking-[4px] text-primary uppercase mb-4 flex items-center gap-3.5">
        <span className="text-[9px] text-surface bg-primary px-[7px] py-0.5 rounded-sm font-medium">01</span>
        The Cyclosys Vision
      </div>
      <h2 className="font-head text-[clamp(36px,5vw,60px)] tracking-[4px] leading-none text-foreground mb-4">
        100 MW INFRASTRUCTURE<br />MODEL
      </h2>
      <p className="text-[15px] text-sub2 max-w-[580px] mb-14 font-light">
        A proprietary sustainability architecture engineered to convert data centre operational losses
        into quantifiable financial assets — subsystem design disclosed at technical interview only.
      </p>

      <div className="reveal flex flex-col gap-7">
        {visionPoints.map((vp) => (
          <div
            key={vp.num}
            className="flex gap-5 items-start p-6 bg-bg2 border border-border border-l-[3px] border-l-primary rounded-r hover:bg-bg3 transition-colors group"
          >
            <div className="font-head text-[32px] text-primary/20 leading-none flex-shrink-0 w-9">
              {vp.num}
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[2px] text-primary uppercase mb-1.5">
                {vp.title}
              </div>
              <p className="text-sm text-sub2 leading-relaxed">{vp.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionSection;
