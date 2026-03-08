const kpis = [
  { val: "1.090", label: "Power Usage Effectiveness (PUE)", sub: "Industry average: 1.58 · Cyclosys target: ≤1.10 · Achieved", color: "text-primary", borderColor: "bg-primary" },
  { val: "98.68%", label: "Resource Recovery Rate", sub: "0.003 units/kWh vs industry 1.8 · 600× better than benchmark", color: "text-cy-green", borderColor: "bg-cy-green" },
  { val: "6.22 MW", label: "Internal Electricity Recovery", sub: "54.6 GWh/year · 14,742 tCO₂ avoided annually · Mechanism: confidential", color: "text-cy-amber", borderColor: "bg-cy-amber" },
  { val: "$2,431", label: "Saving Per Hour (Average)", sub: "$58,343/day · $21.3M/year net · 75% operating margin", color: "text-cy-red", borderColor: "bg-cy-red" },
  { val: "98.5%", label: "NOMINAL Protocol Hours", sub: "709/720 hours at full specification · 11 MONITOR events · 0 critical failures", color: "text-cy-blue", borderColor: "bg-cy-blue" },
  { val: "€89M", label: "Phase 3 Capital Requirement", sub: "4.2-year payback · NPV $124M at 8% discount · Conservative case $93M", color: "text-cy-purple", borderColor: "bg-cy-purple" },
];

const tableRows = [
  { metric: "Power Usage Effectiveness (PUE)", result: "1.090 avg", benchmark: "1.58 (global avg)", delta: "−31% improvement", status: "EXCEEDED", statusType: "green" },
  { metric: "Resource Usage Effectiveness", result: "0.003 units/kWh", benchmark: "1.8 (industry avg)", delta: "600× better", status: "EXCEEDED", statusType: "green" },
  { metric: "Recovery System Efficiency", result: "7.49%", benchmark: "[Disclosed at interview]", delta: "Within upper range", status: "ON TARGET", statusType: "green" },
  { metric: "Internal Electrical Recovery (avg)", result: "6.22 MW", benchmark: "—", delta: "Range: 5.74–6.65 MW", status: "STABLE", statusType: "teal" },
  { metric: "Operational Loss Captured", result: "83 MW equivalent", benchmark: "~0 MW (legacy systems)", delta: "100% recovery deployed", status: "EXCEEDED", statusType: "green" },
  { metric: "Resource Recovery Rate", result: "98.68%", benchmark: "0% (open loop)", delta: "Closed loop achieved", status: "EXCEEDED", statusType: "green" },
  { metric: "OPEX Saving (annual)", result: "$21.3M / year", benchmark: "$0 (no system)", delta: "Net margin: 75%", status: "VALIDATED", statusType: "green" },
  { metric: "Carbon Avoidance", result: "14,742 tCO₂/yr", benchmark: "—", delta: "EU Taxonomy aligned", status: "COMPLIANT", statusType: "green" },
  { metric: "Protocol NOMINAL Rate", result: "709 / 720 hrs", benchmark: "—", delta: "98.5% uptime equivalent", status: "NOMINAL", statusType: "teal" },
  { metric: "10-Year NPV (base case)", result: "$124 million", benchmark: "—", delta: "Conservative: $93M", status: "MODELLED", statusType: "teal" },
];

const badgeClass = (type: string) => {
  if (type === "green") return "bg-cy-green/10 text-cy-green";
  if (type === "teal") return "bg-primary/10 text-primary";
  return "bg-cy-amber/10 text-cy-amber";
};

const PerformanceSection = () => {
  return (
    <section id="performance" className="px-6 md:px-12 py-[100px] relative z-[1] bg-bg2">
      <div className="font-mono text-[10px] tracking-[4px] text-primary uppercase mb-4 flex items-center gap-3.5">
        <span className="text-[9px] text-surface bg-primary px-[7px] py-0.5 rounded-sm font-medium">02</span>
        The Performance Data
      </div>
      <h2 className="font-head text-[clamp(36px,5vw,60px)] tracking-[4px] leading-none text-foreground mb-4">
        720-HOUR STRESS TEST<br />SIMULATION RESULTS
      </h2>
      <p className="text-[15px] text-sub2 max-w-[580px] mb-14 font-light">
        30-day continuous operational simulation across 720 validated data points.
        Results below reflect observed outcomes from the Digital Twin under full load conditions.
      </p>

      {/* KPI Grid */}
      <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded overflow-hidden mb-12">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-background p-7 relative overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-0.5 ${kpi.borderColor}`} />
            <span className={`font-head text-5xl tracking-[2px] ${kpi.color} block leading-none mb-1.5`}>
              {kpi.val}
            </span>
            <div className="font-mono text-[10px] tracking-[2px] text-sub uppercase">{kpi.label}</div>
            <p className="text-xs text-sub2 mt-2.5">{kpi.sub}</p>
          </div>
        ))}
      </div>

      {/* Results Table */}
      <div className="reveal border border-border rounded overflow-hidden">
        <div className="px-5 py-4 bg-bg3 border-b border-border">
          <span className="font-mono text-[10px] tracking-[3px] text-sub uppercase">
            30-Day Simulation Outcomes — Key Metric Summary
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full font-mono text-[13px] border-collapse">
            <thead>
              <tr className="bg-bg3 border-b border-border">
                {["Metric", "Simulation Result", "Industry Benchmark", "Delta", "Status"].map((h) => (
                  <th key={h} className="px-5 py-3.5 text-left text-[9px] tracking-[2px] uppercase text-sub font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.metric} className="hover:bg-foreground/[0.02] transition-colors">
                  <td className="px-5 py-3.5 border-b border-foreground/[0.04] text-sub2 text-[11px]">{row.metric}</td>
                  <td className="px-5 py-3.5 border-b border-foreground/[0.04] text-primary font-medium text-xs">{row.result}</td>
                  <td className="px-5 py-3.5 border-b border-foreground/[0.04] text-sub2 text-xs">{row.benchmark}</td>
                  <td className="px-5 py-3.5 border-b border-foreground/[0.04] text-cy-green font-medium text-xs">{row.delta}</td>
                  <td className="px-5 py-3.5 border-b border-foreground/[0.04]">
                    <span className={`inline-block px-2.5 py-0.5 rounded-sm text-[9px] tracking-[1px] font-medium ${badgeClass(row.statusType)}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Simulation proof bar */}
      <div className="reveal mt-8 px-7 py-6 bg-bg2 border border-border rounded flex items-center justify-between gap-6 flex-wrap">
        <div>
          <div className="font-mono text-[10px] tracking-[2px] text-sub uppercase">Simulation Completeness</div>
          <div className="font-head text-2xl text-primary tracking-[2px]">720 hrs</div>
        </div>
        <div className="flex-1 min-w-[120px]">
          <div className="flex justify-between font-mono text-[9px] text-sub mb-1">
            <span>0 hrs</span>
            <span className="text-primary">100% complete</span>
            <span>720 hrs</span>
          </div>
          <div className="h-[3px] bg-border rounded overflow-hidden">
            <div className="h-[3px] bg-gradient-to-r from-primary to-cy-green rounded w-full" />
          </div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[2px] text-sub uppercase">Data Points</div>
          <div className="font-head text-2xl text-primary tracking-[2px]">12 cols</div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[2px] text-sub uppercase">Protocol NOMINAL</div>
          <div className="font-head text-2xl text-primary tracking-[2px]">98.5%</div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
