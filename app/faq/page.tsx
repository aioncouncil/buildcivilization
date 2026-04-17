import type { Metadata } from "next";
import Link from "next/link";
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
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
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
      "Yes. We have an LOI on 15,491 acres of Tennessee mountain land. We are closing the land in Phase 1. Applications are open. The first cohort arrives this year. Every material document is available in the data room, and dated progress is on the Updates page.",
      "The land is real. The minerals are real. The grant eligibility is real. The entity is formed. The wells are producing. If you want to verify any of it, book a site visit.",
    ],
  },
  {
    q: "Is this a cult?",
    a: [
      "No. No vows. No isolation. No surrender of property or identity. No hierarchy based on devotion to a leader. No private revelation. No spiritual claims.",
      "The philosophical foundation is drawn from public-domain Greek texts &mdash; Plato, Euclid, Vitruvius &mdash; that you can read yourself. The economics are modeled on Mondrag&oacute;n, a seventy-year-old cooperative federation with $12.9 billion in annual revenue. The legal structure is a standard Delaware C-Corp and a Tennessee utility district.",
      "You come for a defined term, with written terms, and you can leave whenever you want. If anything about this feels culty to you, do not apply. The filter is real.",
    ],
  },
  {
    q: "Can I leave?",
    a: [
      "Yes. At any time.",
      "Cohort members can leave the program at any time. Founding equity grants are awarded upon successful completion of your term.",
      "Operators have structured exit buyback rights after three years, and can sell their zone to another qualified operator at any time subject to community approval.",
      'Investors have the same rights as any standard seed-round equity holder. See the <a href="/investors" class="font-semibold text-stone-900 underline hover:text-stone-600">Investors</a> page for details.',
    ],
  },
  {
    q: "What do I do all day?",
    a: [
      "It depends on your track.",
      "Operators run their zones &mdash; managing a real business, filling orders from other zones, working alongside residents from the Founding Cohort, handling operations.",
      "Cohort members are elite engineers, researchers, designers, and creators working on frontier problems alongside the city being built. They come for three-to-twelve-month terms and focus on the track they choose: autonomous systems, the coordination kernel, advanced manufacturing, design and architecture, media, governance, research, or construction. Real budget, real output, real peers.",
      "Everyone eats together, works in and across the zones, and takes part in the contests and festivals the city runs &mdash; weekly contests and seasonal festivals in Phase 1, filling into a denser year-round calendar as the city scales.",
    ],
  },
  {
    q: "What is the AI doing?",
    a: [
      "The kernel is the city&rsquo;s coordination layer. It takes in what citizens want and the current state of the city, and outputs daily missions and a coordination calendar. It is a logistics and routing system &mdash; the city&rsquo;s nervous system, not its brain. Humans make decisions. The kernel helps them see what is happening and what options they have.",
      "In Phase 1, the kernel runs on direct human attention and shared lists. The software-supported version is what the Kernel residency track inside the Founding Cohort is building. The AI does not make decisions about your life. It makes the information visible so you can.",
    ],
  },
  {
    q: "Why Tennessee?",
    a: [
      "Three reasons.",
      "Tennessee utility district law is the fastest and cheapest municipal formation pathway in the country. A district can be formed by petition of property owners, approved by the county commission, and operational within months.",
      "The Cumberland Plateau is climate-resilient &mdash; abundant water, temperate climate, 50+ inches of annual rainfall, no flood zone, no wildfire zone, no hurricane zone.",
      "The property sits in federally designated Appalachian distressed coal country, which qualifies it for federal grant programs &mdash; ARC, POWER, AMLER, USDA &mdash; that do not exist elsewhere. The government wants to rebuild these communities. The window is not permanent.",
    ],
  },
  {
    q: "Why so selective?",
    a: [
      "Because a cohort where everyone has passed the same bar is the single biggest upside of being here. We are not trying to get as many people as possible. We are trying to get the right people.",
      "If you have ever been in a room where everyone in it was genuinely excellent, you know what this feels like. That is what we are building. Every person who is accepted raises the floor for everyone else.",
    ],
  },
  {
    q: "What if Mars gets hit by a bus?",
    a: [
      "General Temple Inc. has succession provisions. Operators control their enterprises under the operator term sheet and can continue running their zones without the founder. The land is the land. The grants are the grants. The specification is documented.",
      "The project does not depend on any one person to continue operating, though it does depend on someone holding the philosophical specification together. That is a genuine risk, and we are actively reducing it by documenting the specification fully and building an advisory council with the depth to carry it forward.",
    ],
  },
  {
    q: "How do I invest without moving?",
    a: [
      'Use the <a href="/investors" class="font-semibold text-stone-900 underline hover:text-stone-600">Investors</a> page. Accredited investors can back the seed round without relocating to Tennessee. You are welcome at site visits whenever you want to come.',
    ],
  },
  {
    q: "How do I visit?",
    a: [
      "We host a site visit once a month. Two days on the land with Mars and the team. You walk the silica mountain, go inside the mine, see the wells and the rail, and meet the people already on the ground.",
      'Book one by emailing <a href="mailto:mars@buildcivilization.com?subject=Site%20Visit%20Request" class="font-semibold text-stone-900 underline hover:text-stone-600">mars@buildcivilization.com</a>.',
    ],
  },
  {
    q: "Can families come?",
    a: [
      "Yes. We welcome family applicants. Housing for partners and children is available on a case-by-case basis in Phase 1. The city is designed for families &mdash; this is a place to live, not a retreat center. Contact us before you apply so we can plan for your needs.",
    ],
  },
  {
    q: "How do team applications work?",
    a: [
      'Small teams (two to four people) can apply together. We review team applications as a unit. If you have a team that wants to operate a zone or join the cohort together, indicate that on your application. See <a href="/operators" class="font-semibold text-stone-900 underline hover:text-stone-600">Operators</a> or <a href="/cohort" class="font-semibold text-stone-900 underline hover:text-stone-600">Cohort</a> for details.',
    ],
  },
  {
    q: "What does cohort equity mean?",
    a: [
      "Founding equity grants are awarded upon successful completion of a resident&rsquo;s term. The grants are documented in the Cohort Handbook you receive upon acceptance, and the equity represents a real ownership interest in General Temple Inc. subject to the terms laid out in the handbook.",
      'We are not making promises about future value. We are giving you real ownership in the entity that controls the land, the infrastructure, and the coordination engine. See the <a href="/cohort" class="font-semibold text-stone-900 underline hover:text-stone-600">Cohort</a> page for the full term structure.',
    ],
  },
  {
    q: "What is signed vs. not yet signed?",
    a: [
      "The land is under LOI, not yet closed. The Delaware C-Corp is formed. Counsel engagement is in progress. Initial advisor conversations are underway. Federal grant applications are in various stages.",
      "For current status on any specific item, see the Updates page. We are transparent about what is done and what is still in progress.",
    ],
  },
  {
    q: "What if the land close slips?",
    a: [
      "We have contingencies in the LOI. If closing slips, it slips &mdash; that is the nature of land deals at this scale. We will be transparent about timing on the Updates page.",
      "The project does not evaporate if the timeline shifts by weeks or months. The resources are in the ground. The grant programs are on their own schedules. The team continues building regardless.",
    ],
  },
  {
    q: "What are you not saying?",
    a: [
      "A lot.",
      "There are specific financial projections, legal documents, cap-table details, geological reports, and strategic plans we share only after a qualified conversation. Some of it is commercially sensitive. Some of it is pre-decisional.",
      "If you want the deeper version, the next step is to access the data room or book a call. We are not hiding anything. We are sequencing disclosure in a way that respects everyone&rsquo;s time.",
    ],
  },
  {
    q: "Who is this not for?",
    a: [
      "People who want to watch. This is a building project. Everyone here works.",
      "People who need the finished product on day one. Phase 1 is small, unpolished, and hard. If you need a complete city before you will commit, come back in Phase 3.",
      "People who want a lifestyle brand. This is not a wellness retreat, a coworking space with better scenery, or a content creator backdrop. It is a real city with real work.",
      "People who are not willing to be vetted. The selection process is serious. If that feels like too much, this is not for you.",
    ],
  },
  {
    q: "My question is not answered here.",
    a: [
      'Email <a href="mailto:mars@buildcivilization.com" class="font-semibold text-stone-900 underline hover:text-stone-600">mars@buildcivilization.com</a>. If your question is one we get more than twice, it will end up on this page.',
    ],
  },
];
