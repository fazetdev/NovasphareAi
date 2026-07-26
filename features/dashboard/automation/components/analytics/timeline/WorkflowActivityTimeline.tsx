"use client"

const activities = [
  {
    title: "Workflow created",
    time: "No recent activity",
  },
  {
    title: "Workflow executed",
    time: "No recent activity",
  },
  {
    title: "Workflow completed",
    time: "No recent activity",
  },
]

export function WorkflowActivityTimeline() {
  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Workflow Activity
      </h3>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="border-l pl-4"
          >
            <div className="text-sm font-medium">
              {activity.title}
            </div>

            <div className="text-xs text-muted-foreground">
              {activity.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
