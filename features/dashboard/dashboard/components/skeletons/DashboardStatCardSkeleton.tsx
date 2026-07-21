import { Skeleton } from "@/components/ui/Skeleton";

export function DashboardStatCardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <Skeleton className="h-12 w-12 rounded-lg" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>

      <Skeleton className="mb-3 h-4 w-28" />
      <Skeleton className="mb-3 h-9 w-20" />
      <Skeleton className="h-4 w-40" />
    </div>
  );
}
