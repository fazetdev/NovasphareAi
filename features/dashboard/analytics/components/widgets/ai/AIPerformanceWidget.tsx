import type {
  AIPerformanceSnapshot,
} from "../../../types/ai-performance.types";

import {
  mapAIPerformanceToCards,
} from "./ai-performance.adapter";

import {
  AIPerformanceCard,
} from "./AIPerformanceCard";

interface AIPerformanceWidgetProps {
  snapshot: AIPerformanceSnapshot;
}

export function AIPerformanceWidget({
  snapshot,
}: AIPerformanceWidgetProps) {
  const cards = mapAIPerformanceToCards(
    snapshot,
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <AIPerformanceCard
          key={card.title}
          title={card.title}
          value={card.value}
          unit={card.unit}
          description={card.description}
        />
      ))}
    </div>
  );
}
