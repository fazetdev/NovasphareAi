import { ResetPasswordScreen } from "@/features/auth"

interface ResetPasswordPageProps {
  searchParams: Promise<{
    token?: string
  }>
}

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const { token = "" } = await searchParams

  return <ResetPasswordScreen token={token} />
}
