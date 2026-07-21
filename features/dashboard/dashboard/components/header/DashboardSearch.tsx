"use client";

import { Search } from "lucide-react";

export function DashboardSearch() {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <input
        type="text"
        placeholder="Search dashboard..."
        className="w-full rounded-lg border bg-background py-2 pl-10 pr-4 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}
