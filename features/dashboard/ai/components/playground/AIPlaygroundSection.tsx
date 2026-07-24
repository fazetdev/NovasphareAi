import { AIExecutionControls } from "./controls/AIExecutionControls"
import { AIPromptEditor } from "./editor/AIPromptEditor"
import { AIRunHistory } from "./history/AIRunHistory"
import { AIResponseViewer } from "./response/AIResponseViewer"

export function AIPlaygroundSection() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">
          AI Playground
        </h2>

        <p className="text-sm text-muted-foreground">
          Test prompts, evaluate models, and inspect AI responses before deployment.
        </p>
      </div>

      <AIExecutionControls />

      <div className="grid gap-6 xl:grid-cols-2">
        <AIPromptEditor />
        <AIResponseViewer />
      </div>

      <AIRunHistory />
    </section>
  )
}
