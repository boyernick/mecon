import { ChapterMeta } from '@/types'

export const chapters: ChapterMeta[] = [
  {
    id: 'chapter-1',
    number: 1,
    title: 'Introduction and Goals of the Firm',
    topics: [
      { id: 'goals-of-the-firm', label: 'Goals of the Firm', href: '/guide/chapter-1#goals-of-the-firm' },
      { id: 'explicit-vs-implicit-costs', label: 'Explicit vs. Implicit Costs', href: '/guide/chapter-1#explicit-vs-implicit-costs' },
      { id: 'economic-vs-accounting-profit', label: 'Economic vs. Accounting Profit', href: '/guide/chapter-1#economic-vs-accounting-profit' },
      { id: 'agency-problem', label: 'Agency Problem', href: '/guide/chapter-1#agency-problem' },
      { id: 'five-theories-of-profit', label: '5 Theories of Profit', href: '/guide/chapter-1#five-theories-of-profit' },
      { id: 'nfp-goals', label: 'NFP Goals', href: '/guide/chapter-1#nfp-goals' },
      { id: 'marginal-principle', label: 'Marginal Principle', href: '/guide/chapter-1#marginal-principle' },
    ],
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Fundamental Economic Concepts',
    topics: [
      { id: 'opportunity-cost', label: 'Opportunity Cost', href: '/guide/chapter-2#opportunity-cost' },
      { id: 'risk-and-return', label: 'Risk and Return', href: '/guide/chapter-2#risk-and-return' },
      { id: 'time-value-of-money', label: 'Time Value of Money', href: '/guide/chapter-2#time-value-of-money' },
      { id: 'marginal-analysis', label: 'Marginal Analysis', href: '/guide/chapter-2#marginal-analysis' },
    ],
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Demand Analysis',
    topics: [
      { id: 'demand-function', label: 'Demand Function', href: '/guide/chapter-3#demand-function' },
      { id: 'price-elasticity', label: 'Price Elasticity', href: '/guide/chapter-3#price-elasticity' },
      { id: 'revenue-rule', label: 'Revenue Rule', href: '/guide/chapter-3#revenue-rule' },
      { id: 'income-elasticity', label: 'Income Elasticity', href: '/guide/chapter-3#income-elasticity' },
      { id: 'cross-price-elasticity', label: 'Cross-Price Elasticity', href: '/guide/chapter-3#cross-price-elasticity' },
      { id: 'combined-elasticity-formula', label: 'Combined Elasticity Formula', href: '/guide/chapter-3#combined-elasticity-formula' },
    ],
  },
  {
    id: 'chapter-4',
    number: 4,
    title: 'Estimating Demand',
    topics: [
      { id: 'regression-analysis', label: 'Regression Analysis', href: '/guide/chapter-4#regression-analysis' },
      { id: 'statistical-significance', label: 'Statistical Significance', href: '/guide/chapter-4#statistical-significance' },
      { id: 'r-squared', label: 'R² and Goodness of Fit', href: '/guide/chapter-4#r-squared' },
      { id: 'log-log-model', label: 'Log-Log Model', href: '/guide/chapter-4#log-log-model' },
      { id: 'dummy-variables', label: 'Dummy Variables', href: '/guide/chapter-4#dummy-variables' },
    ],
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'Business and Economic Forecasting',
    topics: [
      { id: 'forecasting-methods', label: 'Forecasting Methods', href: '/guide/chapter-5#forecasting-methods' },
      { id: 'exponential-smoothing', label: 'Exponential Smoothing', href: '/guide/chapter-5#exponential-smoothing' },
      { id: 'leading-indicators', label: 'Leading Indicators', href: '/guide/chapter-5#leading-indicators' },
      { id: 'seasonal-adjustment', label: 'Seasonal Adjustment', href: '/guide/chapter-5#seasonal-adjustment' },
    ],
  },
]

export const examSections = [
  { label: 'All Questions', filter: 'all' as const, href: '/exam' },
  { label: 'Ch 1 Questions (Q1–Q4)', filter: 1, href: '/exam?chapter=1' },
  { label: 'Ch 2 Questions (Q5)', filter: 2, href: '/exam?chapter=2' },
  { label: 'Ch 3 Questions (Q6–Q14)', filter: 3, href: '/exam?chapter=3' },
  { label: 'Ch 4 Questions (Q15–Q22)', filter: 4, href: '/exam?chapter=4' },
  { label: 'Ch 5 Questions (Q23–Q25)', filter: 5, href: '/exam?chapter=5' },
]
