import { ChapterContent } from '@/types'

export const guideContent: ChapterContent[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 1
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'chapter-1',
    number: 1,
    title: 'Introduction and Goals of the Firm',
    sections: [
      {
        id: 'goals-of-the-firm',
        heading: 'Goals of the Firm',
        examWeight: 'high',
        concepts: [
          {
            term: 'Shareholder Wealth Maximization (SWM)',
            explanation:
              'The dominant goal of for-profit firms: maximize the present value of expected future cash flows to shareholders. This is equivalent to maximizing stock price. SWM is forward-looking (uses expected future values) and accounts for the time value of money and risk.',
          },
          {
            term: 'Value of the Firm',
            explanation:
              'V = Σ [πt / (1 + ke)^t] where πt = expected profit in period t, ke = required rate of return (discount rate reflecting risk). Maximizing V means choosing output, price, and investment to maximize this present-value sum.',
          },
          {
            term: 'Why Not Just Maximize Current Profit?',
            explanation:
              'Short-run profit maximization ignores: (1) timing of cash flows — a dollar today is worth more than a dollar tomorrow, (2) risk — higher-risk cash flows deserve a higher discount rate, (3) reinvestment opportunities. SWM captures all three.',
            examTrap: 'Exam trap: "Profit maximization" and "wealth maximization" are NOT the same. A firm could boost current profit by cutting R&D (short-sighted) while destroying long-run value.',
          },
        ],
      },
      {
        id: 'explicit-vs-implicit-costs',
        heading: 'Explicit vs. Implicit Costs',
        examWeight: 'high',
        concepts: [
          {
            term: 'Explicit Costs',
            explanation:
              'Direct, out-of-pocket cash payments: wages, rent, raw materials, utilities, interest on debt. These appear on accounting income statements.',
          },
          {
            term: 'Implicit Costs',
            explanation:
              'Opportunity costs of owner-supplied inputs — what those resources could earn in their next best use. Two key examples: (1) Forgone salary the owner-manager could earn elsewhere. (2) Forgone return on owner-invested capital (opportunity cost of equity capital).',
            examTrap: 'Exam trap: Implicit costs are real economic costs even though no cash changes hands. Always include them when computing economic profit.',
          },
          {
            term: 'Implicit Cost of Capital',
            explanation: 'If the owner invests $200,000 of equity and could earn 8% elsewhere, the implicit cost = 0.08 × $200,000 = $16,000/year. This must be subtracted to find true economic profit.',
          },
        ],
        formulas: [
          {
            label: 'Total Economic Cost',
            expression: 'Total Economic Cost = Explicit Costs + Implicit Costs',
          },
          {
            label: 'Implicit Cost of Capital',
            expression: 'Implicit Cost of Capital = Equity Capital × Required Rate of Return',
            example: '$200,000 × 8% = $16,000',
          },
        ],
      },
      {
        id: 'economic-vs-accounting-profit',
        heading: 'Economic vs. Accounting Profit',
        examWeight: 'high',
        concepts: [
          {
            term: 'Accounting Profit',
            explanation: 'Total Revenue − Explicit Costs. What shows up on the income statement. Does NOT subtract implicit costs.',
          },
          {
            term: 'Economic Profit',
            explanation:
              'Total Revenue − Total Economic Cost (explicit + implicit). Measures true profitability above and beyond what all resources could earn in their next best use.',
            examTrap: 'Exam trap: A firm earning positive accounting profit can have zero or negative economic profit if implicit costs are large. Zero economic profit (normal profit) means the firm is earning exactly its opportunity cost — it should stay in business.',
          },
          {
            term: 'Normal Profit',
            explanation: 'Economic profit = 0. The firm earns exactly what all its resources (including owner time and capital) could earn elsewhere. This is the long-run equilibrium in competitive markets.',
          },
        ],
        formulas: [
          {
            label: 'Accounting Profit',
            expression: 'Accounting Profit = TR − Explicit Costs',
          },
          {
            label: 'Economic Profit',
            expression: 'Economic Profit = TR − Explicit Costs − Implicit Costs',
            example: 'TR = $650K, Explicit = $500K, Implicit = $106K → Economic Profit = $44K',
          },
        ],
      },
      {
        id: 'agency-problem',
        heading: 'The Agency Problem',
        examWeight: 'high',
        concepts: [
          {
            term: 'Principal-Agent Relationship',
            explanation:
              'Shareholders (principals) hire managers (agents) to run the firm. Agents are supposed to act in principals\' interests, but they may pursue their own goals (higher salaries, job security, perks, empire-building).',
          },
          {
            term: 'Agency Problem',
            explanation:
              'The conflict of interest that arises when agents do not maximize shareholder wealth. Caused by: (1) Information asymmetry — managers know more than shareholders about day-to-day operations. (2) Divergent objectives — managers may prioritize security or prestige over profits.',
          },
          {
            term: 'Agency Costs',
            explanation:
              'Costs borne to mitigate the agency problem: (1) Monitoring costs — audits, board oversight, reporting requirements. (2) Bonding costs — e.g. performance bonds, non-compete agreements. (3) Residual loss — the remaining value lost even after monitoring/bonding.',
          },
          {
            term: 'Incentive Alignment Mechanisms',
            explanation:
              'Solutions to the agency problem: performance-based pay (stock options, bonuses tied to ROE), threat of takeover, board of directors oversight, managerial labor market competition.',
            examTrap: 'Exam trap: Stock options align manager and shareholder incentives because managers benefit only when stock price rises — directly linking pay to SWM.',
          },
        ],
      },
      {
        id: 'five-theories-of-profit',
        heading: '5 Theories of Profit',
        examWeight: 'high',
        concepts: [
          {
            term: '1. Risk-Bearing Theory',
            explanation:
              'Firms earn profit as compensation for bearing risk. Greater uncertainty (demand fluctuations, technological change) → higher required profit. Related to the risk premium in finance.',
          },
          {
            term: '2. Frictional (Disequilibrium) Theory',
            explanation:
              'Profits arise in the short run as markets adjust to changing conditions (new demand, new technology). In equilibrium, competitive entry drives profits to zero. Profits are a temporary signal.',
          },
          {
            term: '3. Monopoly Theory',
            explanation:
              'Firms with market power (barriers to entry: patents, economies of scale, brand loyalty, government licenses) can earn persistent above-normal profits by restricting output and raising price.',
          },
          {
            term: '4. Innovation Theory (Schumpeter)',
            explanation:
              'Entrepreneurs earn profit as a reward for successful innovation — new products, new processes, new markets. These profits are temporary as competitors imitate the innovation ("creative destruction").',
            examTrap: 'Exam trap: Innovation theory = reward for successful innovation, not just for bearing risk. The Schumpeter connection is commonly tested.',
          },
          {
            term: '5. Managerial Efficiency Theory',
            explanation:
              'Firms whose managers are more productive or skillful than average earn above-normal profits. This is a reward for superior management, not luck or market power.',
          },
        ],
        tables: [
          {
            headers: ['Theory', 'Source of Profit', 'Persistence'],
            rows: [
              ['Risk-Bearing', 'Compensation for uncertainty', 'Ongoing (while risk exists)'],
              ['Frictional', 'Market disequilibrium', 'Temporary — erodes as markets clear'],
              ['Monopoly', 'Market power / barriers to entry', 'Persistent until entry occurs'],
              ['Innovation', 'Successful new products/processes', 'Temporary — erodes as others copy'],
              ['Managerial Efficiency', 'Superior management skill', 'Ongoing (while advantage holds)'],
            ],
          },
        ],
      },
      {
        id: 'nfp-goals',
        heading: 'Not-for-Profit Goals',
        examWeight: 'medium',
        concepts: [
          {
            term: 'NFP Objective',
            explanation:
              'Not-for-profit organizations (hospitals, universities, charities) maximize output quantity and/or quality subject to a budget-balance constraint: Total Revenue ≥ Total Costs. They do not have shareholders and do not maximize profit.',
            examTrap: 'Classic exam trap: NFP does NOT mean the organization ignores costs or can run deficits indefinitely. They must break even (TR ≥ TC) — they just don\'t maximize the surplus above break-even.',
          },
          {
            term: 'Revenue Sources for NFPs',
            explanation:
              'Donations, grants, government funding, fees for services. Unlike for-profit firms, NFPs may intentionally charge below-market prices to serve their mission.',
          },
          {
            term: 'Constraint vs. Objective',
            explanation:
              'Break-even is the constraint, not the goal. The goal is maximum service delivery (output maximization) given that constraint. This is a constrained optimization problem.',
          },
        ],
      },
      {
        id: 'marginal-principle',
        heading: 'The Marginal / Incremental Principle',
        examWeight: 'medium',
        concepts: [
          {
            term: 'Marginal Principle',
            explanation:
              'A decision should be taken if and only if the marginal (additional) benefit exceeds the marginal (additional) cost. Continue any activity until MB = MC. This applies to output decisions, pricing, advertising, R&D, and hiring.',
          },
          {
            term: 'Sunk Costs',
            explanation:
              'Costs already incurred that cannot be recovered. Sunk costs are irrelevant to current decisions — only future (marginal) costs and benefits matter.',
            examTrap: 'Exam trap: Never include sunk costs in a marginal analysis. If a firm spent $1M on a machine that is now worthless, that $1M should not influence future production decisions.',
          },
          {
            term: 'Incremental vs. Marginal',
            explanation:
              'Incremental analysis looks at the total change in revenue/cost from a discrete decision (e.g., taking a contract). Marginal analysis is the calculus-based version for continuous variables. Same logic: proceed if ΔTR > ΔTC.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 2
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'chapter-2',
    number: 2,
    title: 'Fundamental Economic Concepts',
    sections: [
      {
        id: 'opportunity-cost',
        heading: 'Opportunity Cost',
        examWeight: 'medium',
        concepts: [
          {
            term: 'Opportunity Cost',
            explanation:
              'The value of the next best alternative foregone when a choice is made. This is the foundation of economic thinking: every resource use has an opportunity cost, even if no money is paid.',
          },
          {
            term: 'Relevant Costs in Decision-Making',
            explanation:
              'Only incremental, future costs are relevant. Past (sunk) costs are irrelevant. Opportunity costs ARE relevant even if they involve no cash outflow.',
          },
        ],
      },
      {
        id: 'risk-and-return',
        heading: 'Risk and Return',
        examWeight: 'high',
        concepts: [
          {
            term: 'Expected Value',
            explanation:
              'E(X) = Σ [Pi × Xi], where Pi is the probability of outcome i and Xi is the value. Weighted average of all possible outcomes.',
          },
          {
            term: 'Standard Deviation (σ)',
            explanation:
              'Measure of dispersion around the expected value. σ = √[Σ Pi(Xi − E(X))²]. A higher σ means more risk.',
          },
          {
            term: 'Coefficient of Variation (CV)',
            explanation:
              'CV = σ / E(X). Normalizes risk per unit of expected return. Used to compare risk across projects with different expected returns. Higher CV = more risk per unit of return.',
            examTrap: 'Exam trap: Use CV (not just σ) to compare projects with different scales. A project with a larger σ but also a much larger expected return may have a lower CV and thus be less risky on a per-unit basis.',
          },
          {
            term: 'Risk Attitudes',
            explanation:
              'Risk-averse: prefers lower CV for same return (requires risk premium). Risk-neutral: indifferent to risk, chooses highest expected value. Risk-seeking: prefers more risk for same return.',
          },
        ],
        formulas: [
          {
            label: 'Expected Value',
            expression: 'E(X) = Σ [Pi × Xi]',
            example: 'P(boom) = 0.4, profit = $200K; P(bust) = 0.6, profit = $50K → E = 0.4(200) + 0.6(50) = $110K',
          },
          {
            label: 'Coefficient of Variation',
            expression: 'CV = σ / E(X)',
            example: 'Project A: σ=4%, E=12% → CV=0.33. Project B: σ=9%, E=18% → CV=0.50. B is riskier per unit of return.',
          },
        ],
      },
      {
        id: 'time-value-of-money',
        heading: 'Time Value of Money',
        examWeight: 'medium',
        concepts: [
          {
            term: 'Present Value',
            explanation:
              'PV = FV / (1 + r)^t. A dollar today is worth more than a dollar in the future because it can be invested to earn a return. The discount rate r reflects both time preference and risk.',
          },
          {
            term: 'Net Present Value (NPV)',
            explanation:
              'NPV = Σ [CFt / (1 + r)^t] − Initial Investment. Accept a project if NPV > 0 (it adds value). Reject if NPV < 0.',
          },
        ],
        formulas: [
          {
            label: 'Present Value',
            expression: 'PV = FV / (1 + r)^t',
          },
          {
            label: 'Net Present Value',
            expression: 'NPV = Σ [CFt / (1 + r)^t] − I₀',
          },
        ],
      },
      {
        id: 'marginal-analysis',
        heading: 'Marginal Analysis',
        examWeight: 'medium',
        concepts: [
          {
            term: 'Optimization Condition',
            explanation:
              'Maximize profit by producing where MR = MC (marginal revenue = marginal cost). If MR > MC, increase output. If MR < MC, decrease output.',
          },
          {
            term: 'Constrained Optimization',
            explanation:
              'Maximize (or minimize) an objective function subject to one or more constraints. Examples: minimize cost subject to a production target; maximize output subject to a budget limit.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 3
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'chapter-3',
    number: 3,
    title: 'Demand Analysis',
    sections: [
      {
        id: 'demand-function',
        heading: 'Demand Function',
        examWeight: 'medium',
        concepts: [
          {
            term: 'Demand Function',
            explanation:
              'Qd = f(P, Y, Px, T, A, …) — quantity demanded as a function of own price (P), income (Y), prices of related goods (Px), tastes (T), advertising (A), etc. The demand curve holds all other variables constant and shows Qd vs. P.',
          },
          {
            term: 'Law of Demand',
            explanation:
              'Ceteris paribus (all else equal), as price rises, quantity demanded falls. The demand curve slopes downward (negative relationship between P and Qd).',
          },
          {
            term: 'Linear Demand Example',
            explanation:
              'Q = a − bP → a is the intercept (quantity when P = 0), b is the slope (ΔQ/ΔP < 0). Example: Q = 900,000 − 2P means for every $1 increase in price, quantity falls by 2 units.',
          },
        ],
      },
      {
        id: 'price-elasticity',
        heading: 'Price Elasticity of Demand',
        examWeight: 'high',
        concepts: [
          {
            term: 'Price Elasticity (Ep)',
            explanation:
              'Ep = (ΔQ/ΔP) × (P/Q) = %ΔQ / %ΔP. Measures the sensitivity of quantity demanded to price changes. Always negative for normal goods (law of demand).',
          },
          {
            term: 'Elastic Demand (|Ep| > 1)',
            explanation:
              'A 1% price change causes more than a 1% change in quantity. Consumers are very sensitive to price. Examples: luxury goods, goods with many substitutes.',
          },
          {
            term: 'Inelastic Demand (|Ep| < 1)',
            explanation:
              'A 1% price change causes less than a 1% change in quantity. Consumers are relatively insensitive to price. Examples: necessities, addictive goods, goods with few substitutes.',
            examTrap: 'Exam trap: |Ep| < 1 does NOT mean consumers do not respond to price — they do, just less than proportionally. "Inelastic" is relative, not absolute.',
          },
          {
            term: 'Unit Elastic (|Ep| = 1)',
            explanation:
              'A 1% price change causes exactly a 1% change in quantity. Total revenue is maximized at this point. MR = 0 when |Ep| = 1.',
          },
          {
            term: 'Point Elasticity on a Linear Curve',
            explanation:
              'For Q = a − bP: Ep = −b(P/Q). Elasticity varies along the curve — elastic at high prices/low Q, inelastic at low prices/high Q. The midpoint is unit elastic.',
          },
        ],
        formulas: [
          {
            label: 'Price Elasticity',
            expression: 'Ep = (ΔQ/ΔP) × (P/Q)',
            example: 'Q = 900,000 − 2P; P = 300,000 → Q = 300,000; Ep = (−2)(300,000/300,000) = −2.0',
          },
          {
            label: 'Ep from a Linear Demand',
            expression: 'Ep = −b × (P / Q)  where Q = a − bP',
          },
        ],
        tables: [
          {
            headers: ['|Ep|', 'Classification', 'Price ↑ effect on TR', 'Price ↓ effect on TR'],
            rows: [
              ['> 1', 'Elastic', 'TR decreases', 'TR increases'],
              ['= 1', 'Unit Elastic', 'TR unchanged', 'TR unchanged'],
              ['< 1', 'Inelastic', 'TR increases', 'TR decreases'],
            ],
          },
        ],
      },
      {
        id: 'revenue-rule',
        heading: 'Revenue Rule',
        examWeight: 'high',
        concepts: [
          {
            term: 'Revenue Rule',
            explanation:
              'When demand is elastic (|Ep| > 1): lower price → TR increases. When demand is inelastic (|Ep| < 1): raise price → TR increases. TR is maximized where |Ep| = 1.',
            examTrap: 'Exam trap: A profit-maximizing firm should NEVER operate in the inelastic range (MR < 0 when |Ep| < 1). It can always raise revenue AND reduce output/costs by increasing price.',
          },
          {
            term: 'Relationship Between MR and Ep',
            explanation: 'MR = P × (1 + 1/Ep). When |Ep| = 1 → MR = 0 (TR at max). When |Ep| > 1 → MR > 0. When |Ep| < 1 → MR < 0.',
          },
          {
            term: 'Total Revenue Function',
            explanation:
              'TR = P × Q. For Q = a − bP: TR = aP − bP². The TR-maximizing price is found by dTR/dP = 0 → a − 2bP = 0 → P* = a/(2b). At this price |Ep| = 1.',
          },
        ],
        formulas: [
          {
            label: 'MR–Elasticity Relationship',
            expression: 'MR = P × (1 + 1/Ep)',
            example: 'P = $100, Ep = −2 → MR = 100(1 + 1/−2) = 100(0.5) = $50',
          },
        ],
      },
      {
        id: 'income-elasticity',
        heading: 'Income Elasticity of Demand',
        examWeight: 'medium',
        concepts: [
          {
            term: 'Income Elasticity (Ey)',
            explanation: 'Ey = %ΔQ / %ΔY. Measures how quantity demanded responds to changes in consumer income.',
          },
          {
            term: 'Normal Good (Ey > 0)',
            explanation:
              'Demand rises as income rises. Subcategories: necessity (0 < Ey < 1) and luxury (Ey > 1). Most goods are normal goods.',
          },
          {
            term: 'Inferior Good (Ey < 0)',
            explanation:
              'Demand falls as income rises — consumers substitute toward preferred alternatives. Examples: generic brands, bus travel, instant ramen.',
            examTrap: 'Exam trap: Ey < 0 → inferior good. Ey > 1 → luxury (income-elastic). Do not confuse income elasticity with price elasticity.',
          },
        ],
        formulas: [
          {
            label: 'Income Elasticity',
            expression: 'Ey = (ΔQ/ΔY) × (Y/Q) = %ΔQ / %ΔY',
          },
        ],
        tables: [
          {
            headers: ['Ey Value', 'Good Type', 'Example'],
            rows: [
              ['Ey < 0', 'Inferior good', 'Store-brand goods, bus rides'],
              ['0 < Ey < 1', 'Normal necessity', 'Food, utilities'],
              ['Ey > 1', 'Luxury good', 'Designer goods, vacations'],
            ],
          },
        ],
      },
      {
        id: 'cross-price-elasticity',
        heading: 'Cross-Price Elasticity of Demand',
        examWeight: 'medium',
        concepts: [
          {
            term: 'Cross-Price Elasticity (Exy)',
            explanation:
              'Exy = %ΔQx / %ΔPy. Measures how the demand for good X responds to a price change in good Y.',
          },
          {
            term: 'Substitutes (Exy > 0)',
            explanation:
              'When the price of Y rises, consumers substitute toward X → demand for X increases. Example: Coke and Pepsi. If PepsiPrice↑ → Qcoke↑ → Exy > 0.',
          },
          {
            term: 'Complements (Exy < 0)',
            explanation:
              'When the price of Y rises, demand for the complement X falls (they are used together). Example: hot dogs and buns. If Photdogs↑ → Qbuns↓ → Exy < 0.',
            examTrap: 'Exam trap: Positive Exy = substitutes, negative Exy = complements. The sign is everything.',
          },
        ],
        formulas: [
          {
            label: 'Cross-Price Elasticity',
            expression: 'Exy = (ΔQx/ΔPy) × (Py/Qx)',
          },
        ],
      },
      {
        id: 'combined-elasticity-formula',
        heading: 'Combined Elasticity Formula',
        examWeight: 'high',
        concepts: [
          {
            term: 'Combined Demand Change Formula',
            explanation:
              'When multiple variables change simultaneously, the total percentage change in quantity demanded is approximately the sum of each elasticity multiplied by its respective percentage change.',
            examTrap: 'Exam trap: Always use the correct sign for each elasticity. Ep is negative. Ey is positive for normal goods. Exy depends on substitute/complement relationship. Sum them carefully.',
          },
        ],
        formulas: [
          {
            label: 'Combined Elasticity Formula',
            expression: '%ΔQ ≈ Ep(%ΔP) + Ey(%ΔY) + Exy(%ΔPx) + ...',
            example:
              'Ep = −1.5, Ey = 0.8, Exy = 0.6; %ΔP = +5%, %ΔY = +4%, %ΔPx = +3%\n→ %ΔQ = (−1.5)(5) + (0.8)(4) + (0.6)(3) = −7.5 + 3.2 + 1.8 = −2.5%',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 4
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'chapter-4',
    number: 4,
    title: 'Estimating Demand',
    sections: [
      {
        id: 'regression-analysis',
        heading: 'Regression Analysis',
        examWeight: 'high',
        concepts: [
          {
            term: 'Ordinary Least Squares (OLS)',
            explanation:
              'Finds the line (or plane, in multiple regression) that minimizes the sum of squared residuals (SSR = Σ(Yi − Ŷi)²). Produces Best Linear Unbiased Estimators (BLUE) under classical assumptions.',
          },
          {
            term: 'Linear Regression Model',
            explanation:
              'Q = a + b₁P + b₂Y + … + ε where a = intercept, b₁, b₂, … = slope coefficients, ε = random error term. Each slope coefficient measures the marginal effect of that variable on Q, holding all others constant (ceteris paribus).',
          },
          {
            term: 'Interpreting Coefficients',
            explanation:
              'b₁ = ΔQ/ΔP: for a one-unit increase in P, Q changes by b₁ units. In demand estimation b₁ < 0 (law of demand). The intercept a has no meaningful economic interpretation if P = 0 is outside the data range.',
          },
        ],
        formulas: [
          {
            label: 'Predicted Value',
            expression: 'Q̂ = â + b̂₁P + b̂₂Y',
            example: 'Q = 12,000 − 8P + 150I; P = 400, I = 50 → Q = 12,000 − 3,200 + 7,500 = 16,300',
          },
        ],
      },
      {
        id: 'statistical-significance',
        heading: 'Statistical Significance',
        examWeight: 'high',
        concepts: [
          {
            term: 't-Statistic',
            explanation:
              't = b̂ / SE(b̂). Tests whether the coefficient is significantly different from zero. Rule of thumb: |t| > 2.0 → significant at roughly the 5% level (with adequate sample size).',
          },
          {
            term: 'p-value',
            explanation:
              'Probability of observing a t-statistic this large (or larger) if the true coefficient were zero. p < α → reject H₀ → coefficient is statistically significant. p > α → fail to reject H₀.',
            examTrap: 'Exam trap: p = 0.08 is NOT significant at α = 0.05 (p > 0.05), but IS significant at α = 0.10 (p < 0.10). Always compare p to the stated significance level.',
          },
          {
            term: 'F-Statistic',
            explanation:
              'Tests the overall significance of the regression: H₀ is that ALL slope coefficients are zero. A significant F-statistic means the model as a whole explains a significant portion of variation in Y.',
          },
          {
            term: 'Multicollinearity',
            explanation:
              'High correlation among independent variables. Symptom: significant F-statistic but insignificant individual t-statistics. Inflates standard errors, making individual coefficients unreliable even though the model fits well overall.',
            examTrap: 'Exam trap: Significant F + insignificant t-stats → multicollinearity. The variables together matter, but you can\'t isolate which one drives the effect.',
          },
        ],
        formulas: [
          {
            label: 't-Statistic',
            expression: 't = b̂ / SE(b̂)',
            example: 'b̂ = −3.2, SE = 1.1 → t = −3.2/1.1 = −2.91. |t| = 2.91 > 2.0 → significant at 5%',
          },
        ],
      },
      {
        id: 'r-squared',
        heading: 'R² and Goodness of Fit',
        examWeight: 'medium',
        concepts: [
          {
            term: 'R² (Coefficient of Determination)',
            explanation:
              'R² = 1 − (SSR/SST) = SSE/SST. Proportion of total variation in Y explained by the regression. Ranges from 0 to 1. R² = 0.87 means 87% of variation in Q is explained.',
            examTrap: 'Exam trap: R² does NOT indicate that individual coefficients are significant. A model can have high R² with multicollinearity (insignificant individual t-stats). Always check both R² and t-stats.',
          },
          {
            term: 'Adjusted R²',
            explanation:
              'Penalizes for adding irrelevant variables (R² always increases when you add variables, even irrelevant ones). Adjusted R² = 1 − [(1−R²)(n−1)/(n−k−1)]. Use this to compare models with different numbers of predictors.',
          },
        ],
      },
      {
        id: 'log-log-model',
        heading: 'Log-Log (Double-Log) Model',
        examWeight: 'high',
        concepts: [
          {
            term: 'Log-Log Specification',
            explanation:
              'ln Q = a + b ln P + c ln Y + ε. Takes the natural log of both the dependent and independent variables. Useful when the relationship is multiplicative (constant elasticities) rather than additive.',
          },
          {
            term: 'Elasticity Interpretation',
            explanation:
              'In a log-log model, each slope coefficient IS the corresponding elasticity, directly and constantly. b = Ep, c = Ey. This is constant throughout the demand curve, unlike the linear model where elasticity varies with P and Q.',
            examTrap: 'Exam trap: In a LINEAR model, elasticity = coefficient × (P/Q) and varies along the curve. In a LOG-LOG model, the coefficient IS the elasticity — constant everywhere. Know which model you\'re using.',
          },
          {
            term: 'Forecasting with Log-Log',
            explanation:
              '%ΔQ ≈ b(%ΔP) + c(%ΔY). Directly multiply coefficients by percentage changes in the independent variables to forecast %ΔQ.',
          },
        ],
        formulas: [
          {
            label: 'Log-Log Model',
            expression: 'ln Q = a + b ln P + c ln Y',
          },
          {
            label: 'Log-Log Forecast',
            expression: '%ΔQ ≈ Ep(%ΔP) + Ey(%ΔY)',
            example: 'ln Q = 8.2 − 1.4 ln P + 0.9 ln Y; P↑10%, Y↑5% → %ΔQ = (−1.4)(10) + (0.9)(5) = −14 + 4.5 = −9.5%',
          },
        ],
      },
      {
        id: 'dummy-variables',
        heading: 'Dummy Variables',
        examWeight: 'medium',
        concepts: [
          {
            term: 'Dummy Variable',
            explanation:
              'A binary (0/1) variable that captures qualitative effects: seasonal shifts, regional differences, structural breaks. Equals 1 if the condition is true, 0 otherwise.',
          },
          {
            term: 'Interpretation',
            explanation:
              'The coefficient on a dummy variable measures the vertical shift in the regression intercept associated with the dummy = 1 condition, holding all other variables constant. It is NOT a slope — it is an intercept shifter.',
            examTrap: 'Exam trap: Dummy coefficient = units difference in Q between the two conditions (when dummy = 1 vs. dummy = 0). Summer dummy = +450 → summer has 450 more units on average, ceteris paribus.',
          },
          {
            term: 'Dummy Variable Trap',
            explanation:
              'With n seasonal categories, include only n−1 dummies. The omitted category is the base/reference. Including all n creates perfect multicollinearity (dummy trap).',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CHAPTER 5
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'chapter-5',
    number: 5,
    title: 'Business and Economic Forecasting',
    sections: [
      {
        id: 'forecasting-methods',
        heading: 'Forecasting Methods Overview',
        examWeight: 'medium',
        concepts: [
          {
            term: 'Qualitative Methods',
            explanation:
              'Based on expert judgment, surveys, or market research rather than historical data. Examples: Delphi method (expert consensus), consumer intentions surveys, sales force estimates. Used when historical data are unavailable or when forecasting new products.',
          },
          {
            term: 'Time Series Methods',
            explanation:
              'Use historical patterns in the variable itself to forecast future values. Key components: trend (long-run direction), cycle (business cycle), seasonal (regular within-year patterns), irregular (random variation). Examples: moving averages, exponential smoothing.',
          },
          {
            term: 'Econometric (Causal) Methods',
            explanation:
              'Use regression models relating the forecast variable to causal factors (income, prices, etc.). More theoretically grounded but require data on independent variables.',
          },
          {
            term: 'Forecast Error',
            explanation:
              'Error = Actual − Forecast. Key metrics: MAE (Mean Absolute Error), RMSE (Root Mean Square Error), MAPE (Mean Absolute Percentage Error). Smaller error → better model.',
          },
        ],
      },
      {
        id: 'exponential-smoothing',
        heading: 'Exponential Smoothing',
        examWeight: 'high',
        concepts: [
          {
            term: 'Simple Exponential Smoothing',
            explanation:
              'F(t+1) = α·A(t) + (1−α)·F(t), where α = smoothing constant (0 < α < 1), A(t) = actual value in period t, F(t) = forecast for period t.',
          },
          {
            term: 'Role of α',
            explanation:
              'High α (closer to 1): more weight on recent observations → forecast tracks recent changes quickly but is more volatile. Low α (closer to 0): more weight on past forecasts → smoother, slower to adapt.',
            examTrap: 'Exam trap: α = 1 → F(t+1) = A(t) (pure naïve forecast). α = 0 → F(t+1) = F(t) (forecast never changes). In practice 0.1 ≤ α ≤ 0.5.',
          },
          {
            term: 'Why "Exponential"?',
            explanation:
              'The weights on past observations decline exponentially: the most recent observation gets weight α, the one before gets α(1−α), the next α(1−α)², and so on. All weights sum to 1.',
          },
        ],
        formulas: [
          {
            label: 'Exponential Smoothing',
            expression: 'F(t+1) = α·A(t) + (1−α)·F(t)',
            example: 'α = 0.3, A(t) = 560, F(t) = 500 → F(t+1) = 0.3(560) + 0.7(500) = 168 + 350 = 518',
          },
        ],
      },
      {
        id: 'leading-indicators',
        heading: 'Leading, Lagging, and Coincident Indicators',
        examWeight: 'medium',
        concepts: [
          {
            term: 'Leading Indicators',
            explanation:
              'Change BEFORE the economy turns. Used to predict future economic activity. Examples: new building permits, stock market prices, manufacturers\' new orders, consumer confidence index, money supply (M2).',
            examTrap: 'Exam trap: Leading indicators PREDICT future conditions. Lagging indicators CONFIRM past conditions. Coincident indicators move WITH the economy.',
          },
          {
            term: 'Coincident Indicators',
            explanation:
              'Change at roughly the same time as the economy. Examples: GDP, employment, personal income, retail sales. Measure current economic activity.',
          },
          {
            term: 'Lagging Indicators',
            explanation:
              'Change AFTER the economy has already shifted. Examples: unemployment rate, prime interest rate, average duration of unemployment. Confirm that a turning point has occurred.',
          },
          {
            term: 'Composite Index of Leading Indicators',
            explanation:
              'Published monthly by The Conference Board. Aggregates 10 leading indicators into a single index. A consistent decline in this index signals an upcoming recession.',
          },
        ],
        tables: [
          {
            headers: ['Type', 'Timing', 'Examples'],
            rows: [
              ['Leading', 'Moves before economy', 'Building permits, stock prices, M2, consumer confidence'],
              ['Coincident', 'Moves with economy', 'GDP, employment, retail sales, personal income'],
              ['Lagging', 'Moves after economy', 'Unemployment rate, prime rate, CPI for services'],
            ],
          },
        ],
      },
      {
        id: 'seasonal-adjustment',
        heading: 'Seasonal Adjustment and Dummy Variable Forecasting',
        examWeight: 'high',
        concepts: [
          {
            term: 'Seasonal Dummy Variables in Forecasting',
            explanation:
              'Add quarterly or monthly dummies to a regression to capture systematic seasonal patterns. With 4 quarters, include 3 dummies (Q1, Q2, Q3) with Q4 as base. The dummy coefficient = average difference between that quarter and the base quarter.',
          },
          {
            term: 'Interpreting Seasonal Coefficients',
            explanation:
              'If Q1 dummy coefficient = −120 (with Q4 as base): Q1 sales average 120 units below Q4, all else equal. A negative coefficient means the quarter is a below-base-quarter period.',
            examTrap: 'Exam trap: Always identify the BASE (omitted) quarter. The coefficient measures the difference FROM the base. With Q4 as base: Q1 coeff = −120 means Q1 is 120 units below Q4 on average.',
          },
          {
            term: 'Deseasonalizing Data',
            explanation:
              'Remove seasonal patterns to see the underlying trend. Divide actual by seasonal index, or use regression residuals after removing seasonal dummies. Useful for identifying whether changes are structural or just seasonal.',
          },
        ],
        formulas: [
          {
            label: 'Exponential Smoothing Forecast (exam application)',
            expression: 'F(t+1) = α·A(t) + (1−α)·F(t)',
            example: 'α = 0.3, A(t) = 560, F(t) = 500 → F(t+1) = 0.3(560) + 0.7(500) = 518',
          },
        ],
      },
    ],
  },
]

export function getChapterContent(id: string): ChapterContent | undefined {
  return guideContent.find((c) => c.id === id)
}
