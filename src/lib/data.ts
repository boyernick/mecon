export interface Section {
  id: string;
  heading: string;
  content: string;
  examTrap?: string;
}

export interface Topic {
  id: string;
  title: string;
  importance?: "Very Important" | "Important" | "Review";
  sections: Section[];
}

export interface Chapter {
  number: number;
  id: string;
  shortTitle: string;
  fullTitle: string;
  topics: Topic[];
}

export const chapters: Chapter[] = [
  {
    number: 1,
    id: "ch1",
    shortTitle: "Chapter One",
    fullTitle: "Introduction and Goals of the Firm",
    topics: [
      {
        id: "goals-of-firm",
        title: "Goals of the Firm",
        importance: "Very Important",
        sections: [
          {
            id: "swm",
            heading: "Shareholder Wealth Maximization (SWM)",
            content:
              "The primary goal of the firm is to maximize shareholder wealth — measured by the market value of the firm's common stock. This is equal to the present value of all expected future cash flows to equity owners, discounted at the shareholders' required rate of return, plus a value for the firm's embedded real options (strategic flexibility).",
          },
          {
            id: "value-of-firm",
            heading: "Value of the Firm",
            content:
              "Value = PV of Expected Future Cash Flows + Embedded Real Options. Real option value represents cost savings or revenue expansions that arise from preserving flexibility — follow-on growth options, abandonment options, and deferral options.",
          },
          {
            id: "why-not-profit-max",
            heading: "Why Not Just Maximize Current Profit?",
            content:
              "Profit maximization ignores the timing and risk of future cash flows. A firm could maximize short-run profits by cutting R&D, deferring maintenance, or slashing quality — all of which destroy long-term value. Shareholder wealth maximization accounts for the entire stream of future returns and their riskiness.",
            examTrap:
              "'Profit maximization' and 'wealth maximization' are NOT the same thing. Exam questions will try to trick you into conflating these two concepts. Wealth maximization considers timing, risk, and the full stream of future cash flows.",
          },
        ],
      },
      {
        id: "explicit-implicit-costs",
        title: "Explicit vs. Implicit Costs",
        importance: "Important",
        sections: [
          {
            id: "explicit",
            heading: "Explicit Costs",
            content:
              "Direct cash outlays — wages, rent, materials, income taxes. These appear on financial statements and are the costs most people think of when they think about business expenses.",
          },
          {
            id: "implicit",
            heading: "Implicit Costs",
            content:
              "Opportunity costs of owner-provided resources — the return the owner could have earned elsewhere. These do NOT appear on financial statements but are essential for economic decision-making.",
            examTrap:
              "Income taxes are an explicit cost (direct cash outlay to government), not an implicit cost. This is a common exam trap.",
          },
        ],
      },
      {
        id: "economic-accounting-profit",
        title: "Economic vs. Accounting Profit",
        sections: [
          {
            id: "accounting-profit",
            heading: "Accounting Profit",
            content:
              "Accounting Profit = Total Revenue − Explicit Costs Only. This is what appears on income statements and is the measure most commonly reported.",
          },
          {
            id: "economic-profit",
            heading: "Economic Profit",
            content:
              "Economic Profit = Total Revenue − (Explicit + Implicit Costs). When economic profit = 0, the firm earns a normal market return, which is perfectly acceptable. Accounting profit is always ≥ economic profit.",
          },
        ],
      },
      {
        id: "agency-problem",
        title: "The Agency Problem",
        importance: "Very Important",
        sections: [
          {
            id: "principal-agent",
            heading: "Principal-Agent Conflict",
            content:
              "As firms grow, owners (principals/shareholders) delegate decision-making to professional managers (agents). Because manager-agents usually have less to lose than owner-principals, agents often seek acceptable rather than maximum levels of profit and shareholder wealth while pursuing their own self-interests.",
          },
          {
            id: "governance",
            heading: "Governance Mechanisms",
            content:
              "Performance-based pay and stock options align manager incentives with shareholders. Board of directors monitoring, the market for corporate control (hostile takeovers), managerial labor market competition, and capital market scrutiny with auditing all serve to mitigate agency problems.",
          },
        ],
      },
      {
        id: "theories-of-profit",
        title: "5 Theories of Profit",
        importance: "Very Important",
        sections: [
          {
            id: "risk-bearing",
            heading: "1. Risk-Bearing Theory",
            content:
              "Profit is compensation for bearing uncertainty and risk. Shareholders are residual claimants — they are not entitled to a fixed rate of return, so they need to be compensated in the form of higher expected returns.",
          },
          {
            id: "disequilibrium",
            heading: "2. Temporary Disequilibrium (Frictional)",
            content:
              "Profits arise while markets adjust to shocks and disappear once equilibrium is reached. At any point in time, firms may find themselves earning above or below the long-run normal return due to temporary dislocations.",
          },
          {
            id: "monopoly",
            heading: "3. Monopoly Theory",
            content:
              "Profit from market power and barriers to entry. This ability may arise from economies of scale, control of essential natural resources, control of critical patents, or governmental restrictions that prohibit competition.",
          },
          {
            id: "innovation",
            heading: "4. Innovation Theory",
            content:
              "Reward for being first to market with a new product or process. Firms that develop high-quality products or successfully identify unique market opportunities are rewarded with above-normal profits.",
            examTrap:
              "The 5K QLED TVs example is a classic exam question on the innovation theory of profit. Know this example.",
          },
          {
            id: "managerial-efficiency",
            heading: "5. Managerial Efficiency Theory",
            content:
              "Above-normal profit from superior management. No single theory of profit explains all observed profit rates — profit performance is the result of differential risk, innovation, managerial skills, monopoly power, and chance.",
          },
        ],
      },
      {
        id: "nfp-goals",
        title: "Not-for-Profit Goals",
        sections: [
          {
            id: "legitimate",
            heading: "Legitimate NFP Objectives",
            content:
              "NFPs can legitimately pursue: (1) Maximize output subject to breakeven constraint, (2) Maximize contributor/donor utility, (3) Maximize administrator satisfaction. NFPs exist to supply goods/services desired by primary contributors.",
          },
          {
            id: "illegitimate",
            heading: "What NFPs Cannot Pursue",
            content:
              "NFPs cannot rationally pursue maximizing total costs.",
            examTrap:
              "'Maximize total costs' is the WRONG answer in every exam question about NFP objectives. This is a classic trap — it appears as an option designed to catch students who aren't paying attention.",
          },
        ],
      },
      {
        id: "marginal-principle",
        title: "The Marginal / Incremental Principle",
        sections: [
          {
            id: "marginal-rule",
            heading: "The Rule",
            content:
              "Continue any activity as long as Marginal Benefit > Marginal Cost. The optimal level is where MB = MC. This principle is applied universally: pricing, hiring, resource allocation, and any incremental decision.",
          },
        ],
      },
    ],
  },
  {
    number: 2,
    id: "ch2",
    shortTitle: "Chapter Two",
    fullTitle: "Fundamental Economic Concepts",
    topics: [
      {
        id: "supply-demand",
        title: "Supply & Demand",
        importance: "Very Important",
        sections: [
          {
            id: "demand-curve",
            heading: "Demand Curve: Movement vs. Shift",
            content:
              "A price change causes movement along the curve (change in quantity demanded). Any other factor — income, prices of substitutes/complements, advertising, expectations, number of buyers, taxes — causes a shift of the entire curve (change in demand).",
            examTrap:
              "Never say a price change 'shifts' the demand curve. Price changes cause movement along the curve only.",
          },
          {
            id: "equilibrium",
            heading: "Market Equilibrium",
            content:
              "Set Q_D = Q_S and solve for P*, then substitute back for Q*. Example: Q_D = 620 − 10P, Q_S = 100 + 3P → 620 − 10P = 100 + 3P → 13P = 520 → P* = $40, Q* = 220.",
          },
        ],
      },
      {
        id: "marginal-analysis",
        title: "Marginal Analysis",
        importance: "Important",
        sections: [
          {
            id: "mb-mc",
            heading: "The Decision Rule",
            content:
              "If MB > MC → do more. If MB < MC → do less. Optimal: MB = MC. Applied to any incremental decision — pricing, hiring, pollution control, pap-smear frequency, any resource allocation.",
          },
        ],
      },
      {
        id: "npv",
        title: "Net Present Value",
        sections: [
          {
            id: "npv-formula",
            heading: "NPV Formula",
            content:
              "NPV = PV of expected future cash flows − Initial outlay. Positive NPV projects increase shareholder wealth. The risk of investment increases the required discount rate, which lowers the PV of future cash flows.",
          },
        ],
      },
      {
        id: "risk-return",
        title: "Risk & Return",
        importance: "Important",
        sections: [
          {
            id: "risk-measures",
            heading: "Measuring Risk",
            content:
              "Standard deviation (σ) is an absolute measure of risk — the square root of the weighted average squared deviations from the mean. Coefficient of variation (CV = σ/r̄) is a relative measure, better for comparing alternatives of different sizes.",
          },
          {
            id: "risk-premium",
            heading: "Required Return",
            content:
              "Required return = Risk-free return + Risk premium. Higher expected returns require bearing higher risk. Investors are generally risk averse and demand compensation for uncertainty.",
          },
        ],
      },
    ],
  },
  {
    number: 3,
    id: "ch3",
    shortTitle: "Chapter Three",
    fullTitle: "Demand Analysis",
    topics: [
      {
        id: "price-elasticity",
        title: "Price Elasticity of Demand",
        importance: "Very Important",
        sections: [
          {
            id: "ep-formula",
            heading: "The Formula",
            content:
              "E_p = %ΔQ / %ΔP = (ΔQ/ΔP) × (P/Q). For linear demand Q = a − bP: E_p = (−b) × (P/Q). Example: Q = 900,000 − 2P at P = $300,000 → Q = 300,000 → Ep = (−2)(300,000/300,000) = −2.0 (elastic).",
          },
          {
            id: "ep-types",
            heading: "Elasticity Types",
            content:
              "|Ep| > 1: Elastic — price increase causes revenue to fall. |Ep| = 1: Unit elastic — revenue unchanged, MR = 0. |Ep| < 1: Inelastic — price increase causes revenue to rise.",
          },
        ],
      },
      {
        id: "revenue-rule",
        title: "The Revenue Rule",
        importance: "Very Important",
        sections: [
          {
            id: "rule",
            heading: "The Rule",
            content:
              "Always raise price when demand is inelastic — lower prices reduce revenue despite higher unit sales. Always cut price when demand is elastic to raise revenue. At unit elasticity, total revenue is maximized and MR = 0.",
            examTrap:
              "This is the most tested concept in Chapter 3. Firms should always seek to raise prices for products with inelastic demand. It is far better to approach unit elasticity from below, raising prices.",
          },
        ],
      },
      {
        id: "elasticity-determinants",
        title: "Elasticity Determinants",
        sections: [
          {
            id: "factors",
            heading: "Four Key Factors",
            content:
              "(1) Number and closeness of substitutes — more substitutes = more elastic. (2) Proportion of budget — small budget share = more inelastic. (3) Product positioning — luxury vs necessity. (4) Time period of adjustment — longer time = more elastic.",
            examTrap:
              "'Small proportion of budget spent on item' makes demand inelastic — consumers barely notice price changes. This is the most commonly tested factor.",
          },
        ],
      },
      {
        id: "income-elasticity",
        title: "Income Elasticity",
        importance: "Important",
        sections: [
          {
            id: "ey",
            heading: "Classifying Goods",
            content:
              "E_Y = %ΔQ / %ΔY. Positive = normal good. Negative = inferior good. Greater than 1 = luxury good. Knowledge of income elasticity is especially useful for forecasting unit sales across economic cycles.",
            examTrap:
              "Negative income elasticity = inferior good. This is a definition, not a value judgment. Classic exam trap.",
          },
        ],
      },
      {
        id: "cross-price",
        title: "Cross-Price Elasticity",
        sections: [
          {
            id: "exy",
            heading: "Substitutes and Complements",
            content:
              "E_xy = %ΔQx / %ΔPy. Positive = substitutes (price of B rises → demand for A rises). Negative = complements (price of B rises → demand for A falls). The fewer close substitutes, the greater the market power.",
          },
        ],
      },
      {
        id: "combined-formula",
        title: "Combined Elasticity Formula",
        importance: "Important",
        sections: [
          {
            id: "combined",
            heading: "Multi-Factor Demand Change",
            content:
              "%ΔQ = E_p(%ΔP) + E_Y(%ΔY). Example: E_p = −2, E_Y = +1.5, %ΔP = +2%, %ΔY = +3% → %ΔQ = (−2)(2%) + (1.5)(3%) = −4% + 4.5% = +0.5%. Sales rise slightly. Seiko variant: Q₂ = Q₁[1 + E_p(%ΔP) + E_Y(%ΔY)].",
          },
        ],
      },
    ],
  },
  {
    number: 4,
    id: "ch4",
    shortTitle: "Chapter Four",
    fullTitle: "Estimating Demand",
    topics: [
      {
        id: "regression-basics",
        title: "Regression Basics",
        importance: "Important",
        sections: [
          {
            id: "model",
            heading: "The General Model",
            content:
              "Y = a + b₁X₁ + b₂X₂ + ... + bₘXₘ. Y is the dependent variable (what we predict). Xᵢ are independent/explanatory variables. Each coefficient bᵢ means: for a 1-unit increase in Xᵢ, Y changes by bᵢ units, all else constant. Least-squares minimizes the sum of squared residuals.",
          },
        ],
      },
      {
        id: "statistical-significance",
        title: "Statistical Significance",
        importance: "Very Important",
        sections: [
          {
            id: "p-values",
            heading: "P-Values (Not T-Values)",
            content:
              "If p-value < 0.05 (at α = 0.05), the coefficient IS statistically significant — the variable matters. If p-value ≥ 0.05, not significant — could be zero. Example: Y = −204 + 0.34X₁ − 0.17X₂, p(X₁) = 0.047 → significant ✓, p(X₂) = 0.032 → significant ✓.",
            examTrap:
              "Use p-values, NOT t-values, to determine significance. If p < 0.05 → significant. Don't try to remember t-statistic thresholds.",
          },
        ],
      },
      {
        id: "r-squared",
        title: "R² and Adjusted R²",
        sections: [
          {
            id: "r2",
            heading: "Comparing Models",
            content:
              "R² measures the proportion of variance in Y explained by the model. Adjusted R² penalizes for adding extra variables. Adding ANY variable raises R² — even a useless one. Always use Adjusted R² to compare models with different numbers of predictors.",
            examTrap:
              "Adding any variable raises R² — even a useless one. Always use Adjusted R² to compare models of different sizes.",
          },
        ],
      },
      {
        id: "dummy-variables",
        title: "Dummy Variables",
        importance: "Important",
        sections: [
          {
            id: "dummy",
            heading: "Binary Categorical Effects",
            content:
              "Dummy variable = binary 0/1 capturing a categorical effect. Example: Sales = 2,800 + 200T − 350D, where D=1 if Q1, D=0 otherwise. Forecast Q1 2010 (T=17, D=1): Sales = 2,800 + 200(17) − 350(1) = 5,850.",
            examTrap:
              "Always verify whether the dummy = 0 or 1 for your specific forecast period before calculating.",
          },
        ],
      },
      {
        id: "log-log",
        title: "Log-Log Model",
        importance: "Very Important",
        sections: [
          {
            id: "log-log-model",
            heading: "Constant Elasticity Model",
            content:
              "For multiplicative power function: Y = a · X₁^b₁ · X₂^b₂. Apply log transformation: ln Y = ln a + b₁ ln X₁ + b₂ ln X₂. Key insight: each coefficient IS the elasticity — constant throughout the entire demand curve. Example: ln E = 0.693 ln Y + 0.224 ln N → a 1% increase in total expenditure increases food expenditures by 0.693%.",
            examTrap:
              "In a log-log model, coefficients are elasticities directly — no further calculation needed. In a linear model, elasticity varies across the demand curve.",
          },
        ],
      },
    ],
  },
  {
    number: 5,
    id: "ch5",
    shortTitle: "Chapter Five",
    fullTitle: "Business and Economic Forecasting",
    topics: [
      {
        id: "time-series",
        title: "Time Series Components",
        sections: [
          {
            id: "components",
            heading: "Four Components",
            content:
              "Trend (T): Long-run direction. Seasonal (S): Regular periodic fluctuations within a year. Cyclical (C): Medium-term business cycle swings. Irregular/Random (I): Unpredictable noise. Multiplicative model: Y = T × S × C × I.",
          },
        ],
      },
      {
        id: "exponential-smoothing",
        title: "Exponential Smoothing",
        importance: "Important",
        sections: [
          {
            id: "formula",
            heading: "The Formula",
            content:
              "F(t+1) = α · Y_t + (1−α) · F_t, where α is between 0 and 1. High α → weights recent data heavily, responds fast to changes. Low α → smoother forecast, slower to react. This is a time series method (not causal).",
          },
        ],
      },
      {
        id: "economic-indicators",
        title: "Economic Indicators",
        importance: "Very Important",
        sections: [
          {
            id: "types",
            heading: "Three Types",
            content:
              "Leading indicators change before the economy — best for forecasting. Examples: stock prices, building permits, new orders for durable goods, money supply. Coincident indicators change with the economy — confirming current state. Lagging indicators change after the economy — confirming past trends.",
            examTrap:
              "For any exam question asking which indicator is best for forecasting → Leading indicators. Always pick leading.",
          },
        ],
      },
      {
        id: "selecting-methods",
        title: "Selecting a Forecasting Method",
        sections: [
          {
            id: "criteria",
            heading: "Selection Criteria",
            content:
              "Consider: length of forecast horizon, data availability, pattern in the data (trend? seasonality?), cost, and required accuracy. Smoothing methods assume historical patterns repeat and extrapolate forward — appropriate when past patterns are expected to continue.",
          },
        ],
      },
    ],
  },
];
