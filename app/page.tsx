import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            NovaCore AI
          </Link>

          <nav className="flex items-center gap-3">
            <Link href="/chat">
              <Button variant="ghost">
                AI Assistant
              </Button>
            </Link>

            <Link href="/login">
              <Button>
                Sign In
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full border border-border px-4 py-1 text-sm text-muted-foreground">
          Enterprise Business Knowledge AI Platform
        </span>

        <h1 className="mt-8 text-5xl font-bold tracking-tight lg:text-6xl">
          Your organisation's intelligence layer
        </h1>

        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
          NovaCore connects your organisation's knowledge, workflows, and AI
          capabilities into one secure enterprise platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/chat">
            <Button size="lg">
              Open AI Assistant
            </Button>
          </Link>

          <Link href="/login">
            <Button
              variant="outline"
              size="lg"
            >
              Organisation Sign In
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid w-full gap-4 text-left md:grid-cols-3">
          <div className="rounded-xl border border-border p-5">
            <h2 className="font-semibold">
              Trusted Knowledge
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Give teams AI access to approved organisational knowledge.
            </p>
          </div>

          <div className="rounded-xl border border-border p-5">
            <h2 className="font-semibold">
              Intelligent Automation
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Automate workflows with AI-powered enterprise processes.
            </p>
          </div>

          <div className="rounded-xl border border-border p-5">
            <h2 className="font-semibold">
              Secure Access
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Manage users, permissions, and organisation security.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
