"use client";

import { useState } from "react";

import { useTranslations } from "@/lib/i18n";

import { mockUserService } from "@/features/auth/services";

export function InvitationPanel() {
  const t = useTranslations();

  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  async function handleInvite() {
    if (!email.trim()) {
      return;
    }

    try {
      setSending(true);

      await mockUserService.inviteUser({
        email,
        departmentIds: [],
        teamIds: [],
        roleIds: [],
      });

      setMessage(t.settings.invitationSent);
      setEmail("");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-lg font-semibold">
        {t.settings.inviteUser}
      </h2>

      <div className="mt-4 space-y-4">
        <input
          type="email"
          value={email}
          placeholder={t.settings.emailPlaceholder}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          className="w-full rounded-md border px-3 py-2"
        />

        <button
          type="button"
          onClick={() => void handleInvite()}
          disabled={sending}
          className="rounded-md border px-4 py-2 text-sm"
        >
          {sending
            ? t.settings.sending
            : t.settings.sendInvitation}
        </button>

        {message && (
          <p className="text-sm text-muted-foreground">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
