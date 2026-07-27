import type {
  AnalyticsForecast,
} from "../../../types/intelligence.types";

import {
  mapForecastToCards,
} from "./forecast.adapter";

import {
  ForecastCard,
} from "./ForecastCard";

interface ForecastWidgetProps {
  forecast: AnalyticsForecast;
}

export function ForecastWidget({
  forecast,
}: ForecastWidgetProps) {
  const cards = mapForecastToCards(
    forecast,
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <ForecastCard
          key={card.timestamp}
          timestamp={card.timestamp}
          predictedValue={card.predictedValue}
          confidence={card.confidence}
        />
      ))}
    </div>
  );
}
