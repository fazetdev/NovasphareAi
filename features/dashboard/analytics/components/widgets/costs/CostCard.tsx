interface CostCardProps {
  title: string;

  amount: number;

  currency: string;

  description?: string;
}

export function CostCard({
  title,
  amount,
  currency,
  description,
}: CostCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-sm font-medium">
        {title}
      </h3>

      {description && (
        <p className="mt-1 text-xs text-muted-foreground">
          {description}
        </p>
      )}

      <div className="mt-4 text-2xl font-semibold">
        {currency} {amount}
      </div>
    </div>
  );
}
