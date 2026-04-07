"use client";

import { useState } from "react";

type AccordionItemProps = {
  question: string;
  answer: string;
};

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-stone-900 sm:text-lg">{question}</span>
        <span className="ml-4 shrink-0 text-stone-400">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed text-stone-600 sm:text-base">
          {answer}
        </div>
      )}
    </div>
  );
}
