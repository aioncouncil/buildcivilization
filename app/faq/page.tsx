import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "FAQ | The Living City",
  description:
    "Honest answers. Every question we have been asked more than twice, answered plainly.",
};

export default function FAQPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Questions
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            The honest answers.
          </h1>
          <p className="mt-6 text-lg italic text-stone-600">
            Every question we have been asked more than twice, answered plainly.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <dl className="divide-y divide-stone-200">
            {FAQS.map((faq) => (
              <div key={faq.q} className="py-8">
                <dt className="text-xl font-bold text-stone-900">{faq.q}</dt>
                <dd className="mt-4 space-y-3 text-base leading-relaxed text-stone-600">
                  {faq.a.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section className="bg-stone-50">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base text-stone-600">
            Have a question we haven&rsquo;t answered here?
          </p>
          <a
            href="mailto:mars@buildcivilization.com"
            className="mt-4 inline-block text-lg font-semibold text-stone-900 underline hover:text-stone-600"
          >
            mars@buildcivilization.com
          </a>
        </div>
      </Section>
    </>
  );
}

const FAQS: { q: string; a: string[] }[] = [
  {
    q: "Is this real?",
    a: [
      "Yes. We have an LOI on 15,491 acres of Tennessee mountain land. We are closing the land in Phase 1. Applications are open. The first cohort arrives this year. Every material document is linked from the Land page, and dated progress is on the Updates page.",
    ],
  },
  {
    q: "Is this a cult?",
    a: [
      "No. No vows. No isolation. No surrender of property or identity. No hierarchy based on devotion to a leader. You come for a defined term, with written terms, and you can leave whenever you want. The philosophical foundation is drawn from public-domain Greek texts (Plato, Euclid, Vitruvius) that you can read yourself. There is no private revelation.",
      "If anything about this feels culty to you, please do not apply. The filter is real.",
    ],
  },
  {
    q: "Can I leave?",
    a: [
      "Yes.",
      "Builders can leave the program at any time. Founding equity grants are awarded upon successful completion of your term.",
      "Operators have structured exit buyback rights after three years, and can sell their zone to another qualified operator at any time subject to community approval.",
      "Investors have the same rights as any standard seed-round equity holder — secondary sales to other accredited investors, and standard protections in the operating agreement.",
    ],
  },
  {
    q: "What do I do all day?",
    a: [
      "It depends on your track.",
      "Operators run their zones — managing a real business, filling orders from other zones, working alongside residents from the Founding Cohort, handling operations.",
      "Builders are in the Founding Cohort — elite engineers, researchers, designers, and creators working on frontier problems alongside the city being built. They come for three-to-twelve-month terms and focus on the track they choose: autonomous systems, the coordination kernel, advanced manufacturing, design and architecture, media, governance, research, or construction. Real budget, real output, real peers.",
      "Everyone eats together, works in and across the zones, and takes part in the contests and festivals the city runs as they come up — weekly contests and seasonal festivals in Phase 1, filling into a denser year-round calendar as the city scales.",
    ],
  },
  {
    q: "Where does the money come from?",
    a: [
      "Four sources.",
      "A $5 million seed round from verified accredited investors under applicable federal securities law. Operator investment — $125K to $1M per zone, invested directly into the operator's own enterprise. Tennessee utility district bonds — tax-exempt municipal debt, same model used by The Villages. Federal and state grant programs — ARC, POWER, EDA, USDA, and Tennessee FastTrack. These cover a majority of Phase 1 infrastructure in Appalachian distressed zones.",
    ],
  },
  {
    q: "Who runs the city?",
    a: [
      "Governance evolves with scale. In Phase 1, decisions are made by the founding team with direct input from operators and builders. In Phase 2, a formal governance structure takes over — a small body of senior operators who meet regularly to review progress and major decisions. In Phase 3 and beyond, governance is progressively delegated to citizens through transparent, philosophically grounded rules.",
    ],
  },
  {
    q: "What is the AI doing?",
    a: [
      "The kernel is the city's coordination layer. It takes in what citizens want and the current state of the city, and outputs daily missions and a coordination calendar. It is a logistics and routing system — the city's nervous system, not its brain. Humans make decisions. The kernel helps them see what is happening and what options they have.",
      "In Phase 1, the kernel runs on direct human attention and shared lists; the software-supported version is what the Kernel residency track inside the Founding Cohort is building.",
    ],
  },
  {
    q: "Why Tennessee?",
    a: [
      "Tennessee utility district law is the fastest and cheapest in the country. The Cumberland Plateau is climate-resilient with abundant water and mineral resources. The property sits in federally designated Appalachian coal country, which qualifies it for federal grant programs that do not exist elsewhere.",
    ],
  },
  {
    q: "Why is the program selective?",
    a: [
      "Because a cohort that has all passed the same bar is the single biggest upside of being here. We are not trying to get as many people as possible. We are trying to get the right people.",
    ],
  },
  {
    q: "What happens if Mars gets hit by a bus?",
    a: [
      "General Temple Inc. has succession provisions. Operators control their enterprises under the operator term sheet and can continue running their zones without the founder. The land is the land. The grants are the grants. The project does not depend on any one person to continue, though it does depend on someone holding the philosophical specification together. That is a genuine risk, and we are actively reducing it by documenting the specification and building an advisory council.",
    ],
  },
  {
    q: "How do I invest without moving?",
    a: [
      "Use the Investors page. Accredited investors can back the seed round without moving to Tennessee. You are welcome at site visits whenever you want to come.",
    ],
  },
  {
    q: "How do I visit?",
    a: ["We host a site visit once a month. Book one from the Land page."],
  },
  {
    q: "Can families come?",
    a: [
      "Yes. We welcome family applicants. Housing for partners and children is available on a case-by-case basis in Phase 1. Contact us before you apply.",
    ],
  },
  {
    q: "Can operators bring teams?",
    a: [
      "Yes. Small teams (two to four people) can apply together. We review team applications as a unit.",
    ],
  },
  {
    q: "What does cohort equity actually mean?",
    a: [
      "Founding equity grants are awarded upon successful completion of a resident's term. The grants are documented in the Cohort Handbook you receive upon acceptance, and the equity represents a real ownership interest in General Temple Inc. subject to the terms laid out in the handbook. We are not making promises about future value.",
    ],
  },
  {
    q: "What is already signed vs. not yet signed?",
    a: [
      "The land is under LOI, not yet closed. The Delaware C-Corp is formed. Counsel engagement is in progress. Initial advisor conversations are underway. Federal grant applications are in various stages. For current status on any specific item, see the Updates page.",
    ],
  },
  {
    q: "What happens if the land close slips?",
    a: [
      "We have contingencies in the LOI. If closing slips, it slips — that is in the nature of land deals. We will be transparent about timing on the Updates page.",
    ],
  },
  {
    q: "Who is behind this?",
    a: [
      "The founder is Mars Argeadai. The legal entity is General Temple Inc. The property LOI is with Ketchen Holdings LLC. Legal counsel engagement is in progress. Named team and advisors are on the Team page.",
    ],
  },
  {
    q: "What are you not saying?",
    a: [
      "A lot.",
      "There are specific financial projections, legal documents, cap-table details, and strategic plans we share only after a qualified conversation. Some of it is commercially sensitive. If you want the deeper version, the next step is to access the data room or book a call.",
    ],
  },
];
