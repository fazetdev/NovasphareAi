"use client";

import { ReactNode, useState } from "react";

interface ChatLayoutProps {
  sidebar: (closeSidebar: () => void) => ReactNode;
  chat: ReactNode;
}

export function ChatLayout({
  sidebar,
  chat,
}: ChatLayoutProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <div className="flex h-full overflow-hidden rounded-xl border bg-background">

      <aside className="hidden w-80 shrink-0 border-r lg:flex lg:flex-col">
        {sidebar(closeSidebar)}
      </aside>

      <main className="hidden min-w-0 flex-1 lg:flex lg:flex-col">
        {chat}
      </main>

      <div className="flex h-full w-full flex-col lg:hidden">
        {showSidebar ? (
          <>
            <header className="flex h-16 items-center gap-3 border-b px-4">
              <button
                type="button"
                onClick={closeSidebar}
                className="rounded-md border px-3 py-2"
              >
                ←
              </button>

              <h1 className="font-semibold">
                Conversations
              </h1>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto">
              {sidebar(closeSidebar)}
            </div>
          </>
        ) : (
          <>
            <header className="flex h-16 items-center gap-3 border-b px-4">
              <button
                type="button"
                onClick={() => setShowSidebar(true)}
                className="rounded-md border px-3 py-2"
              >
                ☰
              </button>

              <h1 className="font-semibold">
                Chat
              </h1>
            </header>

            <div className="min-h-0 flex-1">
              {chat}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
