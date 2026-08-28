"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/config";
import type { Content } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

export function ContactForm({ contact }: { contact: Content["contact"] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `${contact.mailSubjectPrefix} ${name || "—"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-foreground/50">
            {contact.formNameLabel}
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-foreground/50">
            {contact.formEmailLabel}
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-foreground/50">
          {contact.formMessageLabel}
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full resize-none rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>
      <button
        type="submit"
        className="group inline-flex items-center gap-3 rounded-sm bg-accent px-6 py-3 text-sm font-bold tracking-wide text-accent-foreground transition-transform hover:scale-[1.03]"
      >
        {contact.formSubmit}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="text-xs text-foreground/40">{contact.formHelper}</p>
    </form>
  );
}
