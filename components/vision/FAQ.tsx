import { Section } from "@/components/ui/Section";
import { AccordionItem } from "@/components/ui/Accordion";

const FAQS = [
  {
    q: "Is this real?",
    a: "15,491 acres in Campbell and Scott Counties, Tennessee. Active gas wells, coal mines, a silica sand mountain, hardwood forests, an active CSX railroad. The entity is General Temple LLC. The domain is buildcivilization.com. Every resource claim on this page is verifiable.",
  },
  {
    q: "Where does the money come from?",
    a: "Operators invest $125K\u2013$1M. Builders pay $0\u2013$4K/month. Federal grants cover 50\u201380% of infrastructure. The land\u2019s resources generate revenue from day one. The model is proven at $9.9 billion by The Villages.",
  },
  {
    q: "How is this different from Praxis, Telosa, California Forever, Pr\u00F3spera?",
    a: "They tried to create new legal frameworks or fight existing systems. We\u2019re building within existing Tennessee law \u2014 a utility district that forms in 90 days, federal grants that have been funding Appalachian development for decades. Our model is The Villages, not a political experiment.",
  },
  {
    q: "Is this a cult?",
    a: "No. It\u2019s a business. Operators own their enterprises. Builders earn equity. Governance is transparent \u2014 calculated for objective decisions, democratic for subjective ones. You can leave anytime with your accumulated value.",
  },
  {
    q: "Can I leave?",
    a: "Builders leave with no penalty. Operators exit through a structured buyback \u2014 capital plus preferred returns plus appreciation, paid over three years.",
  },
  {
    q: "What do I actually do all day?",
    a: "If you\u2019re an operator: you run your enterprise and participate in governance. If you\u2019re a builder: you work, you build, you learn, you compete, you celebrate. Every day has a mission. Every day ends with a meal together.",
  },
  {
    q: "Why Tennessee?",
    a: "Distressed coal county = 50\u201380% federal infrastructure funding. No state income tax. Utility district in 30\u201390 days for $10K. 50+ inches of rainfall. CSX railroad. $11B in geological resources. Highest score on our evaluation rubric of every property we analyzed.",
  },
];

export function FAQ() {
  return (
    <Section>
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        Questions
      </h2>
      <div className="mt-8">
        {FAQS.map((faq) => (
          <AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </Section>
  );
}
