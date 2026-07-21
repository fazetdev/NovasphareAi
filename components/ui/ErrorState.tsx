import { AlertTriangle } from "lucide-react";

interface ErrorStateProps {
  title: string;
  description: string;
  onRetry?: () => void;
}

export function ErrorState({
  title,
  description,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 p-10 text-center">

      <AlertTriangle className="mb-4 h-10 w-10 text-red-600" />

      <h3 className="text-lg font-semibold text-red-700">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-red-600">
        {description}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Retry
        </button>
      )}

    </div>
  );
}
