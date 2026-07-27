"use client";

export function AnalyticsFilters() {
  return (
    <section
      className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
      aria-label="Analytics filters"
    >
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-md border px-3 py-2 text-sm"
        >
          Today
        </button>

        <button
          type="button"
          className="rounded-md border px-3 py-2 text-sm"
        >
          7 Days
        </button>

        <button
          type="button"
          className="rounded-md border px-3 py-2 text-sm"
        >
          30 Days
        </button>
      </div>

      <label className="flex items-center gap-2 text-sm">
        <span className="sr-only">
          Custom date range
        </span>

        <input
          type="date"
          className="rounded-md border px-3 py-2"
          aria-label="Start date"
        />

        <span>
          -
        </span>

        <input
          type="date"
          className="rounded-md border px-3 py-2"
          aria-label="End date"
        />
      </label>
    </section>
  );
}
