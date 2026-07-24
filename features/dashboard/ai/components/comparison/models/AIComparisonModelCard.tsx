interface AIComparisonModelCardProps {
  title: string
}

export function AIComparisonModelCard({
  title,
}: AIComparisonModelCardProps) {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <div className="mt-4 space-y-3 text-sm">
        <div>
          <p className="text-muted-foreground">
            Provider
          </p>
          <p>—</p>
        </div>

        <div>
          <p className="text-muted-foreground">
            Model
          </p>
          <p>Not selected</p>
        </div>
      </div>
    </section>
  )
}
