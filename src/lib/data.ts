export interface Topic {
  id: string;
  title: string;
  description: string;
  chapter: string;
}

export interface Chapter {
  id: string;
  title: string;
  topics: Topic[];
}

export const chapters: Chapter[] = [
  {
    id: "ch1",
    title: "Introduction & Goals of the Firm",
    topics: [
      {
        id: "explicit-implicit-costs",
        title: "Explicit vs. Implicit Costs",
        description:
          "Direct cash outlays versus opportunity costs of owner-provided resources",
        chapter: "Chapter 1",
      },
      {
        id: "economic-vs-accounting-profit",
        title: "Economic vs. Accounting Profit",
        description:
          "Total revenue minus explicit costs only vs. total economic costs",
        chapter: "Chapter 1",
      },
      {
        id: "theories-of-profit",
        title: "The 5 Theories of Profit",
        description:
          "Risk-bearing, disequilibrium, monopoly, innovation, and managerial efficiency",
        chapter: "Chapter 1",
      },
      {
        id: "agency-problem",
        title: "The Agency Problem",
        description:
          "Principal-agent conflict between shareholders and managers",
        chapter: "Chapter 1",
      },
      {
        id: "shareholder-wealth",
        title: "Shareholder Wealth Maximization",
        description:
          "PV of expected future cash flows plus embedded real options",
        chapter: "Chapter 1",
      },
      {
        id: "nfp-goals",
        title: "Not-for-Profit Goals",
        description:
          "Maximize output, contributor utility, or admin satisfaction — never total costs",
        chapter: "Chapter 1",
      },
    ],
  },
  {
    id: "ch2",
    title: "Fundamental Economic Concepts",
    topics: [
      {
        id: "supply-demand",
        title: "Supply & Demand",
        description:
          "Market equilibrium from the interaction of demanders and suppliers",
        chapter: "Chapter 2",
      },
      {
        id: "movement-vs-shift",
        title: "Movement vs. Shift",
        description:
          "Price changes move along the curve; other factors shift the entire curve",
        chapter: "Chapter 2",
      },
      {
        id: "marginal-analysis",
        title: "Marginal Analysis",
        description:
          "Continue any activity as long as marginal benefits exceed marginal costs",
        chapter: "Chapter 2",
      },
      {
        id: "npv-concept",
        title: "Net Present Value",
        description:
          "PV of expected future cash flows minus initial outlay",
        chapter: "Chapter 2",
      },
      {
        id: "risk-return",
        title: "Risk & Return",
        description:
          "Higher expected returns require bearing higher risk; standard deviation and CV",
        chapter: "Chapter 2",
      },
      {
        id: "market-equilibrium",
        title: "Market Equilibrium",
        description:
          "Set quantity demanded equal to quantity supplied and solve for price",
        chapter: "Chapter 2",
      },
    ],
  },
  {
    id: "ch3",
    title: "Demand Analysis",
    topics: [
      {
        id: "price-elasticity",
        title: "Price Elasticity of Demand",
        description:
          "Percentage change in quantity demanded over percentage change in price",
        chapter: "Chapter 3",
      },
      {
        id: "revenue-rule",
        title: "The Revenue Rule",
        description:
          "Raise price when inelastic; cut price when elastic to maximize revenue",
        chapter: "Chapter 3",
      },
      {
        id: "elasticity-factors",
        title: "Elasticity Determinants",
        description:
          "Substitutes, budget share, product positioning, and time horizon",
        chapter: "Chapter 3",
      },
      {
        id: "income-elasticity",
        title: "Income Elasticity",
        description:
          "Normal goods (positive), inferior goods (negative), luxury goods (>1)",
        chapter: "Chapter 3",
      },
      {
        id: "cross-price-elasticity",
        title: "Cross-Price Elasticity",
        description:
          "Positive for substitutes, negative for complements",
        chapter: "Chapter 3",
      },
      {
        id: "combined-elasticity",
        title: "Combined Elasticity Formula",
        description:
          "%ΔQ = Ep(%ΔP) + Ey(%ΔY) — the multi-factor demand change",
        chapter: "Chapter 3",
      },
    ],
  },
  {
    id: "ch4",
    title: "Estimating Demand",
    topics: [
      {
        id: "regression-basics",
        title: "Regression Basics",
        description:
          "Y = a + b₁X₁ + b₂X₂ — estimating demand function coefficients",
        chapter: "Chapter 4",
      },
      {
        id: "p-values",
        title: "Statistical Significance",
        description:
          "If p-value < 0.05, the coefficient is statistically significant",
        chapter: "Chapter 4",
      },
      {
        id: "r-squared",
        title: "R² and Adjusted R²",
        description:
          "Proportion of variance explained; use adjusted R² to compare models",
        chapter: "Chapter 4",
      },
      {
        id: "dummy-variables",
        title: "Dummy Variables",
        description:
          "Binary 0/1 variables capturing categorical or seasonal effects",
        chapter: "Chapter 4",
      },
      {
        id: "log-log-model",
        title: "Log-Log Model",
        description:
          "ln Y = ln a + b₁ ln X₁ — coefficients are elasticities directly",
        chapter: "Chapter 4",
      },
    ],
  },
  {
    id: "ch5",
    title: "Business & Economic Forecasting",
    topics: [
      {
        id: "time-series",
        title: "Time Series Components",
        description:
          "Trend, seasonal, cyclical, and irregular components: Y = T × S × C × I",
        chapter: "Chapter 5",
      },
      {
        id: "exponential-smoothing",
        title: "Exponential Smoothing",
        description:
          "F(t+1) = α·Yt + (1−α)·Ft — weighted average forecasting method",
        chapter: "Chapter 5",
      },
      {
        id: "economic-indicators",
        title: "Economic Indicators",
        description:
          "Leading (forecast), coincident (confirm), lagging (verify past trends)",
        chapter: "Chapter 5",
      },
      {
        id: "forecasting-methods",
        title: "Selecting Forecast Methods",
        description:
          "Consider horizon, data availability, pattern, cost, and accuracy",
        chapter: "Chapter 5",
      },
    ],
  },
];

export const allTopics = chapters.flatMap((ch) => ch.topics);
