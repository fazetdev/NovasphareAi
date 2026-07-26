import type { AIAuditLog } from "../../../types"

interface AIAuditLogsCardProps {
  logs: AIAuditLog[]
}

export function AIAuditLogsCard({
  logs,
}: AIAuditLogsCardProps) {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Audit Logs
      </h3>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">
                Action
              </th>

              <th className="py-3">
                Actor
              </th>

              <th className="py-3">
                Resource
              </th>

              <th className="py-3">
                Time
              </th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr
                key={log.id}
                className="border-b"
              >
                <td className="py-3">
                  {log.action}
                </td>

                <td className="py-3">
                  {log.actor}
                </td>

                <td className="py-3">
                  {log.resource}
                </td>

                <td className="py-3">
                  {log.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
