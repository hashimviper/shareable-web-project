const failureModes = [
  { color: "bg-cy-red", text: "Subsystem A Integrity Breach — primary loop monitoring" },
  { color: "bg-cy-red", text: "Server Thermal Runaway — CDU outlet temperature exceedance" },
  { color: "bg-cy-amber", text: "Subsystem B Fouling — recovery rate degradation trigger" },
  { color: "bg-cy-amber", text: "Subsystem C Seal Failure — primary circuit integrity breach" },
  { color: "bg-cy-amber", text: "Subsystem A Overspeed — load spike response protocol" },
  { color: "bg-cy-blue", text: "Subsystem B Flow Failure — inlet restriction detection" },
  { color: "bg-cy-blue", text: "SCADA Network Loss — blind operation fallback protocol" },
  { color: "bg-cy-purple", text: "Cascade: Subsystem A + B simultaneous — full system thermal response" },
];

const severities = [
  { count: "2", label: "CRITICAL", sub: "Failure Modes", borderColor: "border-cy-red/20", color: "text-cy-red" },
  { count: "4", label: "HIGH", sub: "Failure Modes", borderColor: "border-cy-amber/20", color: "text-cy-amber" },
  { count: "2+", label: "MONITORED", sub: "Cascade Scenarios", borderColor: "border-cy-blue/20", color: "text-cy-blue" },
];

// Risk matrix data
const matrixRows = [
  { label: "ALMOST\nCERTAIN", cells: [
    { bg: "bg-cy-amber/35" }, { bg: "bg-cy-amber/50" }, { bg: "bg-cy-red/45" },
    { bg: "bg-cy-red/[0.65]", item: "SYS-A", tooltip: "Subsystem A Overspeed" },
    { bg: "bg-cy-red/80" },
  ]},
  { label: "LIKELY", cells: [
    { bg: "bg-cy-green/25" }, { bg: "bg-cy-amber/30" },
    { bg: "bg-cy-amber/50", item: "SYS-B", tooltip: "Subsystem B Flow Failure" },
    { bg: "bg-cy-red/50", item: "CDU", tooltip: "CDU Seal Failure" },
    { bg: "bg-cy-red/70" },
  ]},
  { label: "POSSIBLE", cells: [
    { bg: "bg-cy-green/20" },
    { bg: "bg-cy-green/30", item: "NET", tooltip: "SCADA Network Loss" },
    { bg: "bg-cy-amber/40", item: "SYS-B", tooltip: "Subsystem B Fouling" },
    { bg: "bg-cy-amber/[0.55]" },
    { bg: "bg-cy-red/60", item: "CAS", tooltip: "Cascade A+B" },
  ]},
  { label: "UNLIKELY", cells: [
    { bg: "bg-cy-green/[0.15]" }, { bg: "bg-cy-green/[0.22]" },
    { bg: "bg-cy-amber/30", item: "SYS-A", tooltip: "Subsystem A Integrity" },
    { bg: "bg-cy-amber/40" },
    { bg: "bg-cy-red/50", item: "SRV", tooltip: "Server Thermal Runaway" },
  ]},
  { label: "RARE", cells: [
    { bg: "bg-cy-green/[0.12]" }, { bg: "bg-cy-green/[0.18]" },
    { bg: "bg-cy-green/[0.22]" }, { bg: "bg-cy-amber/[0.28]" }, { bg: "bg-cy-amber/35" },
  ]},
];

const RiskSection = () => {
  return (
    <section id="risk" className="px-6 md:px-12 py-[100px] relative z-[1]">
      <div className="font-mono text-[10px] tracking-[4px] text-primary uppercase mb-4 flex items-center gap-3.5">
        <span className="text-[9px] text-surface bg-primary px-[7px] py-0.5 rounded-sm font-medium">03</span>
        Risk &amp; Resilience Analysis
      </div>
      <h2 className="font-head text-[clamp(36px,5vw,60px)] tracking-[4px] leading-none text-foreground mb-4">
        INTEGRATED RISK<br />ENGINE
      </h2>
      <p className="text-[15px] text-sub2 max-w-[580px] mb-14 font-light">
        Failure mode modelling across mechanical, thermal, and hydraulic subsystems —
        including multi-system cascade scenario analysis.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[52px] items-start">
        {/* Left */}
        <div>
          <div className="reveal bg-bg2 border border-border border-l-[3px] border-l-cy-red p-7 rounded-r mb-8">
            <p className="text-[15px] text-sub2 leading-relaxed">
              The system features an <strong className="text-foreground font-medium">integrated Risk Engine capable of modelling
              8+ failure modes and cascading thermal scenarios.</strong> Each failure mode
              is assigned real-time probability based on live operational telemetry,
              triggering automated alert escalation through three severity tiers.
            </p>
          </div>

          <div className="reveal flex flex-col gap-2.5">
            {failureModes.map((fm, i) => (
              <div key={i} className="flex items-center gap-3.5 px-4 py-3 bg-bg2 border border-border rounded-sm font-mono text-[11px] text-sub2 hover:bg-bg3 transition-colors">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${fm.color}`} />
                {fm.text}
              </div>
            ))}
          </div>

          <div className="reveal grid grid-cols-3 gap-2.5 mt-7">
            {severities.map((s) => (
              <div key={s.label} className={`p-4 bg-bg2 border ${s.borderColor} rounded-sm text-center`}>
                <div className={`font-head text-[28px] ${s.color} tracking-[2px]`}>{s.count}</div>
                <div className="font-mono text-[9px] text-sub tracking-[1px] mt-1">{s.label}</div>
                <div className="font-mono text-[9px] text-sub2 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Risk Matrix */}
        <div className="reveal bg-bg2 border border-border rounded-md p-7">
          <div className="font-mono text-[10px] tracking-[3px] text-sub uppercase mb-5">
            Risk Matrix — Likelihood vs. Impact
          </div>

          <div className="grid gap-[3px]" style={{ gridTemplateColumns: "auto repeat(5, 1fr)" }}>
            {/* Header row */}
            <div />
            {["NEGLIGIBLE", "MINOR", "MODERATE", "MAJOR", "CRITICAL"].map((h) => (
              <div key={h} className="flex items-center justify-center text-sub font-mono text-[8px] tracking-[1px] p-1 text-center">
                {h}
              </div>
            ))}

            {/* Matrix rows */}
            {matrixRows.map((row) => (
              <>
                <div key={row.label + "-label"} className="flex items-center justify-end pr-1.5 font-mono text-[7px] text-sub text-right whitespace-pre-line leading-tight">
                  {row.label}
                </div>
                {row.cells.map((cell, ci) => (
                  <div
                    key={row.label + ci}
                    className={`aspect-square rounded-sm flex items-center justify-center text-[8px] text-foreground/60 cursor-default hover:scale-110 transition-transform relative group ${cell.bg}`}
                  >
                    {cell.item && (
                      <>
                        {cell.item}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-bg3 border border-border px-2 py-1 rounded-sm whitespace-nowrap text-[8px] text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          {cell.tooltip}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </>
            ))}
          </div>

          <div className="text-center font-mono text-[8px] text-sub mt-2 tracking-[2px] uppercase">
            ← IMPACT SEVERITY →
          </div>

          <div className="flex gap-4 mt-3.5 font-mono text-[9px] text-sub flex-wrap">
            {[
              { label: "Low", color: "bg-cy-green/40" },
              { label: "Medium", color: "bg-cy-amber/50" },
              { label: "High", color: "bg-cy-red/[0.65]" },
              { label: "Critical", color: "bg-cy-red/[0.85]" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-sm ${l.color}`} />
                {l.label}
              </div>
            ))}
            <span className="ml-auto text-foreground/30 text-[9px]">Hover cells for detail</span>
          </div>

          <div className="mt-5 p-3.5 bg-primary/[0.04] border border-primary/[0.12] rounded-sm">
            <p className="font-mono text-[10px] text-sub2 leading-relaxed tracking-[0.3px]">
              Risk probabilities are computed in real time from operational telemetry during simulation replay.
              The engine monitors 12 sensor streams simultaneously and recalculates failure probability
              at each 1-hour data interval across the 720-point dataset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
