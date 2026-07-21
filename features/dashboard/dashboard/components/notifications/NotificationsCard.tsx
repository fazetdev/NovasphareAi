type Notification = {
  id: string;
  title: string;
  message: string;
  level: "success" | "warning" | "error";
  time: string;
};

const notifications: Notification[] = [
  {
    id: "1",
    title: "AI Service",
    message: "AI service is operating normally.",
    level: "success",
    time: "2 min ago",
  },
  {
    id: "2",
    title: "Knowledge Base",
    message: "Document indexing is in progress.",
    level: "warning",
    time: "15 min ago",
  },
  {
    id: "3",
    title: "Storage",
    message: "Storage usage has reached 81%.",
    level: "error",
    time: "1 hour ago",
  },
];

const colors = {
  success: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
};

export function NotificationsCard() {
  return (
    <section className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Notifications
        </h2>

        <p className="text-sm text-muted-foreground">
          Latest platform alerts.
        </p>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex gap-3"
          >
            <span
              className={`mt-2 h-2.5 w-2.5 rounded-full ${colors[notification.level]}`}
            />

            <div className="flex-1">
              <p className="font-medium">
                {notification.title}
              </p>

              <p className="text-sm text-muted-foreground">
                {notification.message}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
