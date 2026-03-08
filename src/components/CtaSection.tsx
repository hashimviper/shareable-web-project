const ctaItems = [
  { icon: "→", color: "text-primary", title: "Live System Demo", desc: "Complete 720-hour replay with all subsystem flows, mechanical animations, and real-time OPEX counters — demonstrated in a 30-minute session." },
  { icon: "→", color: "text-cy-green", title: "Risk Engine Walkthrough", desc: "Live cascade failure modelling, real-time probability recalculation, and protocol escalation — explained with full technical depth." },
  { icon: "→", color: "text-cy-amber", title: "Financial Model Review", desc: "NPV sensitivity analysis, scenario modelling (conservative / base / optimistic), and OPEX breakdown — all unlocked and reproducible." },
];

const CtaSection = () => {
  return (
    <section id="cta" className="px-6 md:px-12 py-[100px] bg-bg2 min-h-[60vh] flex items-center">
      <div className="max-w-[860px] mx-auto text-center">
        <div className="inline-block px-[18px] py-1.5 border border-primary/30 rounded-sm font-mono text-[10px] tracking-[3px] text-primary uppercase mb-7 bg-primary/[0.04]">
          Available for Technical Demonstration
        </div>

        <h2 className="reveal font-head text-[clamp(32px,5vw,62px)] tracking-[4px] leading-[1.05] mb-7 text-foreground">
          THE FULL OPERATIONAL<br />DIGITAL TWIN IS READY
        </h2>

        <p className="reveal text-base text-sub2 leading-relaxed mb-12 max-w-[640px] mx-auto">
          The full operational Digital Twin, including live subsystem replay
          and predictive failure analysis, is available for technical demonstration
          and validation.
        </p>

        <div className="reveal max-w-[560px] mx-auto mb-12 text-left flex flex-col gap-3">
          {ctaItems.map((item) => (
            <div key={item.title} className="flex items-start gap-3.5 p-4 bg-background border border-border rounded-sm">
              <span className={`${item.color} text-lg mt-0.5`}>{item.icon}</span>
              <div>
                <div className={`font-mono text-[10px] tracking-[2px] ${item.color} uppercase mb-1`}>{item.title}</div>
                <p className="text-[13px] text-sub2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal flex gap-3.5 justify-center flex-wrap mb-[52px]">
          <a
            href="mailto:hashimcomcod@gmail.com?subject=Cyclosys%20Digital%20Twin%20Demo%20Request&body=I%20would%20like%20to%20request%20a%20technical%20demonstration%20of%20the%20Cyclosys%20Digital%20Twin."
            className="px-10 py-[15px] bg-primary text-primary-foreground font-mono text-[11px] tracking-[3px] uppercase no-underline rounded-sm hover:brightness-110 hover:-translate-y-px transition-all inline-flex items-center gap-2.5"
          >
            ✉ Request Technical Demo
          </a>
          <a
            href="https://hashimviper.github.io/myportfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-[14px] border border-border text-sub2 font-mono text-[11px] tracking-[3px] uppercase no-underline rounded-sm hover:border-sub2 hover:text-foreground transition-all inline-flex items-center gap-2.5"
          >
            View Portfolio ↗
          </a>
        </div>

        <div className="reveal p-[18px] border border-cy-amber/20 rounded-sm bg-cy-amber/[0.04] font-mono text-[11px] text-cy-amber/60 leading-relaxed tracking-[0.5px]">
          <strong className="text-cy-amber">Intellectual Property Notice:</strong> This summary is a marketing overview of a proprietary
          engineering model. The underlying simulation engine, operational architecture, and financial model
          constitute original intellectual property. Source code and system logic are not publicly distributed.
          A live demonstration can be arranged during a formal technical interview upon request.
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
