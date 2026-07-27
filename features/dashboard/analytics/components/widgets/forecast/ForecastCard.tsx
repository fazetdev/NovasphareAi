interface ForecastCardProps {
  timestamp: string;

  predictedValue: number;

  confidence: number;
}

export function ForecastCard({
  timestamp,
  predictedValue,
  confidence,
}: ForecastCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-sm font-medium">
        Forecast
      </p>

      <p className="mt-2 text-sm">
        Date: {timestamp}
      </p>

      <p className="mt-1 text-2xl font-semibold">
        {predictedValue}
      </p>

      <p className="mt-1 text-xs text-muted-foreground">
        Confidence: {confidence}%
      </p>
    </div>
  );
}
