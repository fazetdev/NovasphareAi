import type { AIProviderStatus } from "../../../types"

interface AIProviderStatusProps {
  status: AIProviderStatus
}

export function AIProviderStatus({
  status,
}: AIProviderStatusProps) {
  return (
    <span className="rounded-full border px-2 py-1 text-xs">
      {status}
    </span>
  )
}
