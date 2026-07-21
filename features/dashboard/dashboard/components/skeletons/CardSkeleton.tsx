import { Skeleton } from "@/components/ui/Skeleton";

interface CardSkeletonProps {
  rows?: number;
}

export function CardSkeleton({
  rows = 5,
}: CardSkeletonProps) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">

      <Skeleton className="mb-2 h-6 w-40" />

      <Skeleton className="mb-6 h-4 w-56" />

      <div className="space-y-4">
        {Array.from({ length: rows }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-5 w-full"
          />
        ))}
      </div>

    </div>
  );
}
