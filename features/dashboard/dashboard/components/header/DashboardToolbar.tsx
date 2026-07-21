"use client";

import {
  Calendar,
  Download,
  RefreshCw,
} from "lucide-react";

export function DashboardToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-3">

      <button className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-muted">
        <Calendar className="h-4 w-4" />
        Today
      </button>

      <button className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-muted">
        <RefreshCw className="h-4 w-4" />
        Refresh
      </button>

      <button className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-muted">
        <Download className="h-4 w-4" />
        Export
      </button>

    </div>
  );
}
