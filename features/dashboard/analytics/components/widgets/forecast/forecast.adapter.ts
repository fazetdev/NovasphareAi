import type {
  AnalyticsForecast,
} from "../../../types/intelligence.types";

export interface ForecastCardData {
  timestamp: string;
  predictedValue: number;
  confidence: number;
}

export function mapForecastToCards(
  forecast: AnalyticsForecast,
): ForecastCardData[] {
  return forecast.points.map((point) => ({
    timestamp: point.timestamp,
    predictedValue: point.predictedValue,
    confidence: point.confidence,
  }));
}
