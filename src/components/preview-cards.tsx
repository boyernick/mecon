"use client";

export function ProfitCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Economic Profit
        </h3>
        <p className="text-sm text-muted-foreground">
          Calculate economic vs. accounting profit.
        </p>
      </div>
      <div className="mt-4 space-y-3">
        <div className="space-y-1">
          <label className="text-sm font-medium leading-none">
            Total Revenue
          </label>
          <div className="flex h-9 w-full rounded-md border bg-background px-3 py-1 text-sm items-center text-muted-foreground">
            $500,000
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium leading-none">
            Explicit Costs
          </label>
          <div className="flex h-9 w-full rounded-md border bg-background px-3 py-1 text-sm items-center text-muted-foreground">
            $350,000
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium leading-none">
            Implicit Costs
          </label>
          <div className="flex h-9 w-full rounded-md border bg-background px-3 py-1 text-sm items-center text-muted-foreground">
            $80,000
          </div>
        </div>
        <div className="rounded-md border bg-muted/50 p-3 mt-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Accounting Profit</span>
            <span className="font-semibold text-foreground">$150,000</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-muted-foreground">Economic Profit</span>
            <span className="font-semibold text-foreground">$70,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TheoriesOfProfitCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Theories of Profit
        </h3>
        <p className="text-sm text-muted-foreground">
          Five explanations for above-normal returns.
        </p>
      </div>
      <div className="mt-4 space-y-2">
        {[
          { label: "Risk-Bearing", desc: "Compensation for uncertainty" },
          { label: "Disequilibrium", desc: "Temporary market shocks" },
          { label: "Monopoly", desc: "Barriers to entry" },
          { label: "Innovation", desc: "First-mover advantage" },
          { label: "Managerial Efficiency", desc: "Superior management" },
        ].map((theory, i) => (
          <div
            key={theory.label}
            className="flex items-center gap-3 rounded-md border p-3"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-muted text-xs font-semibold">
              {i + 1}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium">{theory.label}</div>
              <div className="text-xs text-muted-foreground">{theory.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AgencyProblemCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Agency Problem
        </h3>
        <p className="text-sm text-muted-foreground">
          Principal-agent conflict and governance.
        </p>
      </div>
      <div className="mt-4 space-y-3">
        <div className="flex gap-3">
          <div className="flex-1 rounded-md border p-3 text-center">
            <div className="text-xs text-muted-foreground">Principals</div>
            <div className="text-sm font-semibold mt-1">Shareholders</div>
          </div>
          <div className="flex items-center text-muted-foreground text-xs">
            vs.
          </div>
          <div className="flex-1 rounded-md border p-3 text-center">
            <div className="text-xs text-muted-foreground">Agents</div>
            <div className="text-sm font-semibold mt-1">Managers</div>
          </div>
        </div>
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-2">
          Governance Mechanisms
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Stock options",
            "Board monitoring",
            "Hostile takeovers",
            "Labor market",
            "Auditing",
          ].map((m) => (
            <span
              key={m}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ElasticityCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Price Elasticity
        </h3>
        <p className="text-sm text-muted-foreground">
          Demand responsiveness to price changes.
        </p>
      </div>
      <div className="mt-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left font-medium text-muted-foreground">
                |Ep|
              </th>
              <th className="py-2 text-left font-medium text-muted-foreground">
                Type
              </th>
              <th className="py-2 text-left font-medium text-muted-foreground">
                P↑ → Rev
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">&gt; 1</td>
              <td className="py-2">Elastic</td>
              <td className="py-2 text-red-600 font-medium">Falls ↓</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">= 1</td>
              <td className="py-2">Unit elastic</td>
              <td className="py-2 text-muted-foreground">No change</td>
            </tr>
            <tr>
              <td className="py-2">&lt; 1</td>
              <td className="py-2">Inelastic</td>
              <td className="py-2 text-emerald-600 font-medium">Rises ↑</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function EquilibriumCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Market Equilibrium
        </h3>
        <p className="text-sm text-muted-foreground">
          Set Q_D = Q_S and solve.
        </p>
      </div>
      <div className="mt-4 space-y-3">
        <div className="space-y-1">
          <label className="text-sm font-medium">Demand Function</label>
          <div className="flex h-9 w-full rounded-md border bg-background px-3 py-1 text-sm items-center font-mono text-muted-foreground">
            Q = 620 − 10P
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Supply Function</label>
          <div className="flex h-9 w-full rounded-md border bg-background px-3 py-1 text-sm items-center font-mono text-muted-foreground">
            Q = 100 + 3P
          </div>
        </div>
        <div className="rounded-md border bg-muted/50 p-3 space-y-1">
          <div className="text-xs font-mono text-muted-foreground">
            620 − 10P = 100 + 3P → 13P = 520
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-muted-foreground">P*</span>
            <span className="font-semibold">$40</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Q*</span>
            <span className="font-semibold">220 units</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MarginalAnalysisCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Marginal Analysis
        </h3>
        <p className="text-sm text-muted-foreground">
          Optimal decision rule.
        </p>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 rounded-md border p-3 bg-emerald-50">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-sm">
            MB &gt; MC → <span className="font-medium">Do more</span>
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-md border p-3 bg-red-50">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <span className="text-sm">
            MB &lt; MC → <span className="font-medium">Do less</span>
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-md border p-3 bg-blue-50">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
          <span className="text-sm">
            MB = MC → <span className="font-medium">Optimal</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function NPVCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Net Present Value
        </h3>
        <p className="text-sm text-muted-foreground">
          NPV = PV of future cash flows − initial outlay.
        </p>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between rounded-md border p-3">
          <span className="text-sm text-muted-foreground">Initial Outlay</span>
          <span className="text-sm font-mono font-medium">−$100,000</span>
        </div>
        <div className="flex items-center justify-between rounded-md border p-3">
          <span className="text-sm text-muted-foreground">Year 1 CF</span>
          <span className="text-sm font-mono font-medium">$40,000</span>
        </div>
        <div className="flex items-center justify-between rounded-md border p-3">
          <span className="text-sm text-muted-foreground">Year 2 CF</span>
          <span className="text-sm font-mono font-medium">$45,000</span>
        </div>
        <div className="flex items-center justify-between rounded-md border p-3">
          <span className="text-sm text-muted-foreground">Year 3 CF</span>
          <span className="text-sm font-mono font-medium">$50,000</span>
        </div>
        <div className="flex items-center justify-between rounded-md border bg-muted/50 p-3">
          <span className="text-sm font-medium">NPV (r=10%)</span>
          <span className="text-sm font-mono font-semibold text-emerald-600">
            +$12,434
          </span>
        </div>
      </div>
    </div>
  );
}

export function RevenueRuleCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          The Revenue Rule
        </h3>
        <p className="text-sm text-muted-foreground">
          Pricing strategy based on elasticity.
        </p>
      </div>
      <div className="mt-4 space-y-2">
        <div className="rounded-md border p-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-emerald-500" />
            <span className="text-sm font-medium">Inelastic demand (|Ep| &lt; 1)</span>
          </div>
          <p className="text-xs text-muted-foreground ml-5">
            Raise price → Revenue rises
          </p>
        </div>
        <div className="rounded-md border p-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-blue-500" />
            <span className="text-sm font-medium">Elastic demand (|Ep| &gt; 1)</span>
          </div>
          <p className="text-xs text-muted-foreground ml-5">
            Cut price → Revenue rises
          </p>
        </div>
        <div className="rounded-md border p-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-amber-500" />
            <span className="text-sm font-medium">Unit elastic (|Ep| = 1)</span>
          </div>
          <p className="text-xs text-muted-foreground ml-5">
            MR = 0, total revenue maximized
          </p>
        </div>
      </div>
    </div>
  );
}

export function IncomeElasticityCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Income Elasticity
        </h3>
        <p className="text-sm text-muted-foreground">
          Classifying goods by income response.
        </p>
      </div>
      <div className="mt-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left font-medium text-muted-foreground">
                E_Y
              </th>
              <th className="py-2 text-left font-medium text-muted-foreground">
                Good Type
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-mono">Positive</td>
              <td className="py-2">Normal good</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-mono text-red-600">Negative</td>
              <td className="py-2 font-medium">Inferior good</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">&gt; 1</td>
              <td className="py-2">Luxury good</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CrossPriceCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Cross-Price Elasticity
        </h3>
        <p className="text-sm text-muted-foreground">
          Relationship between goods.
        </p>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-3 rounded-md border p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
            +
          </div>
          <div>
            <div className="text-sm font-medium">Substitutes</div>
            <div className="text-xs text-muted-foreground">
              P_B ↑ → Q_A ↑
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-md border p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 text-xs font-bold">
            −
          </div>
          <div>
            <div className="text-sm font-medium">Complements</div>
            <div className="text-xs text-muted-foreground">
              P_B ↑ → Q_A ↓
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RegressionCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Regression Analysis
        </h3>
        <p className="text-sm text-muted-foreground">
          Estimating demand functions.
        </p>
      </div>
      <div className="mt-4 space-y-3">
        <div className="rounded-md border bg-muted/50 p-3">
          <div className="text-xs font-mono text-muted-foreground mb-1">
            Model
          </div>
          <div className="text-sm font-mono font-medium">
            Y = −204 + 0.34X₁ − 0.17X₂
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">p(X₁)</span>
            <div className="flex items-center gap-2">
              <span className="font-mono">0.047</span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                Sig.
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">p(X₂)</span>
            <div className="flex items-center gap-2">
              <span className="font-mono">0.032</span>
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                Sig.
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Adj. R²</span>
            <span className="font-mono font-medium">0.87</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LogLogCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Log-Log Model
        </h3>
        <p className="text-sm text-muted-foreground">
          Coefficients are elasticities directly.
        </p>
      </div>
      <div className="mt-4 space-y-3">
        <div className="rounded-md border bg-muted/50 p-3">
          <div className="text-sm font-mono font-medium">
            ln E = 0.693 ln Y + 0.224 ln N
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="rounded-md border p-3">
            <div className="text-xs text-muted-foreground">Coeff. on ln Y</div>
            <div className="text-sm mt-0.5">
              <span className="font-mono font-medium">0.693</span>
              <span className="text-muted-foreground">
                {" "}— 1% ↑ total expenditure → 0.693% ↑ food
              </span>
            </div>
          </div>
          <div className="rounded-md border p-3">
            <div className="text-xs text-muted-foreground">Coeff. on ln N</div>
            <div className="text-sm mt-0.5">
              <span className="font-mono font-medium">0.224</span>
              <span className="text-muted-foreground">
                {" "}— 1% ↑ family size → 0.224% ↑ food
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SmoothingCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Exponential Smoothing
        </h3>
        <p className="text-sm text-muted-foreground">
          Time series forecasting method.
        </p>
      </div>
      <div className="mt-4 space-y-3">
        <div className="rounded-md border bg-muted/50 p-3 text-center">
          <div className="text-sm font-mono font-medium">
            F(t+1) = α·Y_t + (1−α)·F_t
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between rounded-md border p-3">
            <span className="text-sm">High α (→ 1)</span>
            <span className="text-xs text-muted-foreground">
              Responds fast, volatile
            </span>
          </div>
          <div className="flex items-center justify-between rounded-md border p-3">
            <span className="text-sm">Low α (→ 0)</span>
            <span className="text-xs text-muted-foreground">
              Smooth forecast, slow
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndicatorsCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Economic Indicators
        </h3>
        <p className="text-sm text-muted-foreground">
          Leading, coincident, and lagging.
        </p>
      </div>
      <div className="mt-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left font-medium text-muted-foreground">
                Type
              </th>
              <th className="py-2 text-left font-medium text-muted-foreground">
                Timing
              </th>
              <th className="py-2 text-left font-medium text-muted-foreground">
                Best For
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-medium">Leading</td>
              <td className="py-2">Before</td>
              <td className="py-2 text-emerald-600 font-medium">Forecasting</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Coincident</td>
              <td className="py-2">During</td>
              <td className="py-2 text-muted-foreground">Confirming</td>
            </tr>
            <tr>
              <td className="py-2">Lagging</td>
              <td className="py-2">After</td>
              <td className="py-2 text-muted-foreground">Verifying</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CombinedElasticityCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Combined Elasticity
        </h3>
        <p className="text-sm text-muted-foreground">
          Multi-factor demand change formula.
        </p>
      </div>
      <div className="mt-4 space-y-3">
        <div className="rounded-md border bg-muted/50 p-3 text-center">
          <div className="text-sm font-mono font-medium">
            %ΔQ = Ep(%ΔP) + Ey(%ΔY)
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Example</label>
          <div className="rounded-md border p-3 space-y-1 text-sm font-mono">
            <div className="text-muted-foreground">
              Ep = −2, Ey = +1.5
            </div>
            <div className="text-muted-foreground">
              %ΔP = +2%, %ΔY = +3%
            </div>
            <div className="border-t pt-1 mt-1">
              %ΔQ = (−2)(2%) + (1.5)(3%)
            </div>
            <div className="pl-[3.5ch]">
              = −4% + 4.5% ={" "}
              <span className="font-semibold text-foreground">+0.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RiskReturnCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Risk & Return
        </h3>
        <p className="text-sm text-muted-foreground">
          Measuring and comparing risk.
        </p>
      </div>
      <div className="mt-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left font-medium text-muted-foreground">
                Measure
              </th>
              <th className="py-2 text-left font-medium text-muted-foreground">
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-mono">σ (Std Dev)</td>
              <td className="py-2">Absolute risk</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">CV = σ/r̄</td>
              <td className="py-2">Relative risk</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-3 rounded-md border bg-muted/50 p-3 text-xs text-muted-foreground">
          Required return = Risk-free rate + Risk premium
        </div>
      </div>
    </div>
  );
}

export function DummyVariableCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Dummy Variables
        </h3>
        <p className="text-sm text-muted-foreground">
          Binary 0/1 categorical effects.
        </p>
      </div>
      <div className="mt-4 space-y-3">
        <div className="rounded-md border bg-muted/50 p-3">
          <div className="text-sm font-mono font-medium">
            Sales = 2,800 + 200T − 350D
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            D = 1 if Q1, D = 0 otherwise
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">
            Forecast Q1 2010 (T=17, D=1)
          </label>
          <div className="rounded-md border p-3 text-sm font-mono space-y-0.5">
            <div className="text-muted-foreground">= 2,800 + 200(17) − 350(1)</div>
            <div className="text-muted-foreground">= 2,800 + 3,400 − 350</div>
            <div className="font-semibold text-foreground">= 5,850</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NFPCard() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          Not-for-Profit Goals
        </h3>
        <p className="text-sm text-muted-foreground">
          Legitimate vs. illegitimate objectives.
        </p>
      </div>
      <div className="mt-4 space-y-2">
        {[
          { label: "Maximize output (breakeven)", ok: true },
          { label: "Maximize contributor utility", ok: true },
          { label: "Maximize admin satisfaction", ok: true },
          { label: "Maximize total costs", ok: false },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 rounded-md border p-3"
          >
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                item.ok
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.ok ? "✓" : "✗"}
            </div>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
