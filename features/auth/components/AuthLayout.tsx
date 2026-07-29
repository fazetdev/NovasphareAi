import { ReactNode } from "react"

import { PageContainer } from "@/components/layout/page-container"

interface AuthLayoutProps {
  title: string
  description?: string
  children: ReactNode
}

export function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <PageContainer>
      <div className="mx-auto flex w-full max-w-md flex-col gap-6 py-10">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          {description ? (
            <p className="text-muted-foreground text-sm">
              {description}
            </p>
          ) : null}
        </header>

        {children}
      </div>
    </PageContainer>
  )
}
