"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { VideoUpload } from "./VideoUpload";

export function OperatorForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = new FormData(e.currentTarget);
    const data = {
      type: "operator",
      name: form.get("name"),
      email: form.get("email"),
      responses: {
        background: form.get("background"),
        zone_vision: form.get("zone_vision"),
        why_you: form.get("why_you"),
      },
      investment_tier: form.get("investment_tier"),
      start_timeline: form.get("start_timeline"),
      video_url: videoUrl,
      ab_variant: getCookie("ab_variant") || "unknown",
      _hp: form.get("_hp"), // honeypot
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed");
      }
      router.push("/thank-you?type=operator");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Honeypot */}
      <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <TextArea
        label="Tell us about your background in one paragraph."
        name="background"
        hint="What have you built, run, or managed? What industry? How long?"
        maxLength={500}
        required
      />

      <TextArea
        label="What zone would you build?"
        name="zone_vision"
        hint="If you had 1-10 acres, a community of 5,000 enterprises, on-site stone/timber/silica/gas, and federal grants covering infrastructure — what would you create?"
        maxLength={500}
        required
      />

      <Select
        label="What\u2019s your available investment capital?"
        name="investment_tier"
        required
        options={[
          { value: "125k", label: "$125,000" },
          { value: "250k", label: "$250,000" },
          { value: "500k", label: "$500,000" },
          { value: "1m+", label: "$1,000,000+" },
        ]}
      />

      <TextArea
        label="What makes you the right person to run this zone?"
        name="why_you"
        hint="Specific experience, skills, or track record."
        maxLength={500}
        required
      />

      <Select
        label="When could you relocate to Tennessee?"
        name="start_timeline"
        required
        options={[
          { value: "immediately", label: "Immediately" },
          { value: "1-3mo", label: "1\u20133 months" },
          { value: "3-6mo", label: "3\u20136 months" },
          { value: "6-12mo", label: "6\u201312 months" },
          { value: "exploring", label: "Exploring only" },
        ]}
      />

      <div>
        <label className="mb-2 block text-sm font-semibold text-stone-900">
          Upload a 1-minute video.
        </label>
        <p className="mb-3 text-sm text-stone-500">
          Look into the camera and tell us: Why this? Why you? Why now? No editing. No
          script. Just you.
        </p>
        <VideoUpload applicationType="operator" onUploaded={setVideoUrl} />
      </div>

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-sm bg-stone-900 py-3.5 text-sm font-semibold text-white hover:bg-stone-800 disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-stone-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
      />
    </div>
  );
}

function TextArea({
  label,
  name,
  hint,
  maxLength,
  required,
}: {
  label: string;
  name: string;
  hint?: string;
  maxLength?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-stone-900">
        {label}
      </label>
      {hint && <p className="mb-2 text-sm text-stone-500">{hint}</p>}
      <textarea
        id={name}
        name={name}
        rows={4}
        maxLength={maxLength}
        required={required}
        className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-stone-900">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
      >
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}
