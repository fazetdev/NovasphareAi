import { PageContainer } from "@/components/layout/page-container"

export function ChatsView() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <h1 className="text-lg font-semibold">Chats</h1>
        <p className="text-sm text-muted-foreground">
          AI conversations will be displayed here.
        </p>
      </div>
    </PageContainer>
  )
}
