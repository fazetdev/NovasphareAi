import type {
  WorkflowConnection,
  WorkflowNode,
  WorkflowVariable,
  WorkflowTrigger,
} from "."

export interface WorkflowBuilderDefinition {
  workflowId: string

  trigger?: WorkflowTrigger

  nodes: WorkflowNode[]

  connections: WorkflowConnection[]

  variables: WorkflowVariable[]

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
