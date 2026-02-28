"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import {
  ProfitCard,
  TheoriesOfProfitCard,
  AgencyProblemCard,
  NFPCard,
  EquilibriumCard,
  MarginalAnalysisCard,
  NPVCard,
  RiskReturnCard,
  ElasticityCard,
  RevenueRuleCard,
  IncomeElasticityCard,
  CrossPriceCard,
  CombinedElasticityCard,
  RegressionCard,
  LogLogCard,
  DummyVariableCard,
  SmoothingCard,
  IndicatorsCard,
} from "@/components/preview-cards";

interface CardEntry {
  id: string;
  label: string;
  component: React.ReactNode;
}

const allCards: CardEntry[] = [
  { id: "economic-vs-accounting-profit", label: "Economic Profit", component: <ProfitCard /> },
  { id: "theories-of-profit", label: "Theories of Profit", component: <TheoriesOfProfitCard /> },
  { id: "agency-problem", label: "Agency Problem", component: <AgencyProblemCard /> },
  { id: "nfp-goals", label: "Not-for-Profit Goals", component: <NFPCard /> },
  { id: "market-equilibrium", label: "Market Equilibrium", component: <EquilibriumCard /> },
  { id: "marginal-analysis", label: "Marginal Analysis", component: <MarginalAnalysisCard /> },
  { id: "npv-concept", label: "Net Present Value", component: <NPVCard /> },
  { id: "risk-return", label: "Risk & Return", component: <RiskReturnCard /> },
  { id: "price-elasticity", label: "Price Elasticity", component: <ElasticityCard /> },
  { id: "revenue-rule", label: "Revenue Rule", component: <RevenueRuleCard /> },
  { id: "income-elasticity", label: "Income Elasticity", component: <IncomeElasticityCard /> },
  { id: "cross-price-elasticity", label: "Cross-Price Elasticity", component: <CrossPriceCard /> },
  { id: "combined-elasticity", label: "Combined Elasticity", component: <CombinedElasticityCard /> },
  { id: "regression-basics", label: "Regression Analysis", component: <RegressionCard /> },
  { id: "log-log-model", label: "Log-Log Model", component: <LogLogCard /> },
  { id: "dummy-variables", label: "Dummy Variables", component: <DummyVariableCard /> },
  { id: "exponential-smoothing", label: "Exponential Smoothing", component: <SmoothingCard /> },
  { id: "economic-indicators", label: "Economic Indicators", component: <IndicatorsCard /> },
];

export default function Home() {
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);

  const visibleCards = activeTopicId
    ? allCards.filter((c) => c.id === activeTopicId)
    : allCards;

  // Split cards into two columns for masonry-style layout
  const col1: CardEntry[] = [];
  const col2: CardEntry[] = [];
  visibleCards.forEach((card, i) => {
    if (i % 2 === 0) col1.push(card);
    else col2.push(card);
  });

  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <div className="flex">
        <aside className="hidden lg:block w-[260px] shrink-0 border-r">
          <div className="pl-6 pr-3">
            <Sidebar
              activeTopicId={activeTopicId}
              onTopicClick={(id) =>
                setActiveTopicId(activeTopicId === id ? null : id)
              }
            />
          </div>
        </aside>
        <main className="flex-1 min-w-0">
          <div className="p-6">
            <div className="flex gap-6">
              <div className="flex flex-col gap-4 flex-1">
                {col1.map((card) => (
                  <div key={card.id}>
                    <div className="mb-1.5 text-xs font-medium text-muted-foreground">
                      {card.label}
                    </div>
                    {card.component}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 flex-1">
                {col2.map((card) => (
                  <div key={card.id}>
                    <div className="mb-1.5 text-xs font-medium text-muted-foreground">
                      {card.label}
                    </div>
                    {card.component}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
