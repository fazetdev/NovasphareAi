import { Card } from "@/components/ui/card"

interface ContactTask {
  id: string
  title: string
  status: "pending" | "completed"
  dueDate: string
}

const mockTasks: ContactTask[] = [
  {
    id: "1",
    title: "Schedule follow-up call",
    status: "pending",
    dueDate: "Tomorrow",
  },
  {
    id: "2",
    title: "Send pricing proposal",
    status: "completed",
    dueDate: "Yesterday",
  },
]

export function ContactTasksTab() {
  return (
    <div className="space-y-4">
      {mockTasks.map((task) => (
        <Card
          key={task.id}
          className="p-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">
                {task.title}
              </h4>

              <p className="text-sm text-muted-foreground">
                Due: {task.dueDate}
              </p>
            </div>

            <span className="text-sm">
              {task.status}
            </span>
          </div>
        </Card>
      ))}
    </div>
  )
}
