import { ErrorState } from "@/components/ui/ErrorState"

interface AuthErrorProps {
  title?: string
  description?: string
  onRetry?: () => void
}

export function AuthError({
  title = "Authentication Error",
  description = "Something went wrong. Please try again.",
  onRetry,
}: AuthErrorProps) {
  return (
    <ErrorState
      title={title}
      description={description}
      onRetry={onRetry}
    />
  )
}
