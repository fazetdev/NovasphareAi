import { EmptyState } from "@/components/ui/EmptyState";
import { ConversationItem } from "../../types/dashboard.types";

interface RecentConversationsProps {
  conversations: ConversationItem[];
}

export function RecentConversations({
  conversations,
}: RecentConversationsProps) {
  if (!conversations.length) {
    return (
      <EmptyState
        title="No Conversations"
        description="Start a new AI conversation to see it here."
      />
    );
  }

  return (
    <section className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Recent Conversations
        </h2>

        <p className="text-sm text-muted-foreground">
          Latest conversations across AI assistants.
        </p>
      </div>

      <div className="space-y-4">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium">
                {conversation.agent}
              </h3>

              <span className="text-xs text-muted-foreground">
                {conversation.timestamp}
              </span>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {conversation.preview}
            </p>

            <p className="mt-2 text-xs text-muted-foreground">
              User: {conversation.user}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
