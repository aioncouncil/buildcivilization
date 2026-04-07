"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { VideoUpload } from "./VideoUpload";

export function BuilderForm() {
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
      type: "builder",
      name: form.get("name"),
      email: form.get("email"),
      age: form.get("age") ? Number(form.get("age")) : null,
      responses: {
        hardest_built: form.get("hardest_built"),
        why_civilization: form.get("why_civilization"),
        skills: form.get("skills"),
      },
      builder_tier: form.get("builder_tier"),
      start_timeline: form.get("start_timeline"),
      video_url: videoUrl,
      portfolio_url: form.get("portfolio_url") || null,
      ab_variant: getCookie("ab_variant") || "unknown",
      _hp: form.get("_hp"),
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
      router.push("/thank-you?type=builder");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <TextArea
        label="What is the hardest thing you have ever built, grown, fixed, or created with your own hands?"
        name="hardest_built"
        hint="Physical or digital. Big or small. Tell us the story."
        maxLength={500}
        required
      />

      <TextArea
        label="Why do you want to build a civilization?"
        name="why_civilization"
        hint="Not what you think we want to hear. What\u2019s actually pulling you."
        maxLength={500}
        required
      />

      <TextArea
        label="What skills do you bring?"
        name="skills"
        hint="Construction, farming, cooking, coding, welding, design, leadership \u2014 anything. Include what you\u2019re willing to learn."
        maxLength={300}
        required
      />

      <Select
        label="Which tier fits you?"
        name="builder_tier"
        required
        options={[
          { value: "founding", label: "Founding Builder (Stipend) \u2014 Exceptional talent, maximum equity" },
          { value: "apprentice", label: "Apprentice ($0) \u2014 Full-time, room + board" },
          { value: "builder", label: "Builder ($500\u2013$1K/mo) \u2014 Full-time, 40+ hrs/week" },
          { value: "craftsman", label: "Craftsman ($2K/mo) \u2014 15 hrs/week, private housing" },
          { value: "explorer", label: "Explorer ($4K/mo) \u2014 10 hrs/week, evaluating the vision" },
        ]}
      />

      <Select
        label="When could you start?"
        name="start_timeline"
        required
        options={[
          { value: "immediately", label: "Immediately" },
          { value: "1-3mo", label: "1\u20133 months" },
          { value: "3-6mo", label: "3\u20136 months" },
          { value: "exploring", label: "Exploring" },
        ]}
      />

      <div>
        <label className="mb-2 block text-sm font-semibold text-stone-900">
          Upload a 1-minute video.
        </label>
        <p className="mb-3 text-sm text-stone-500">
          No script. No editing. Look into the camera and answer: What would you build if you
          had 15,000 acres of mountain land, unlimited timber, stone quarries, coal mines, and
          49 other builders?
        </p>
        <VideoUpload applicationType="builder" onUploaded={setVideoUrl} />
      </div>

      <Field
        label="Link to anything you\u2019ve built before (optional)"
        name="portfolio_url"
        type="url"
      />

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-stone-900 py-3.5 text-sm font-semibold text-white hover:bg-stone-800 disabled:opacity-50"
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
