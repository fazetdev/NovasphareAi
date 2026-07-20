"use client";

interface ChatHeaderProps {
  title: string;
}

export function ChatHeader({ title }: ChatHeaderProps) {
  return (
    <header className="border-b px-6 py-4">
      <h2 className="text-lg font-semibold">{title}</h2>
    </header>
  );
}
