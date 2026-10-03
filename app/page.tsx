import Link from 'next/link';
import HomeHero from '@/components/HomeHero';
import ScrollText from '@/components/ScrollText';
import Counter from '@/components/Counter';
import HorizontalPillars from '@/components/HorizontalPillars';
import Duotone from '@/components/Duotone';
import Reveal, { RuleReveal } from '@/components/Reveal';
import Marquee from '@/components/Marquee';
import SectionHead from '@/components/SectionHead';
import CTA from '@/components/CTA';
import { IMG, chain, clientSegments, services, whyStay } from '@/lib/content';

const stats = [
  { to: 24, suffix: '+', label: 'Professionals, grown from a founding team of five in one year' },
  { to: 5000, suffix: '+', label: 'Workforce supplied at a single national mega project' },
  { to: 8, suffix: '', label: 'Business pillars under one accountable vendor' },
  { to: 300, prefix: 'ETB ', suffix: 'M', label: 'Granite processing plant under development through Rock Age' },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="bg-paper py-28 md:py-44">
        <div className="container-x">
          <Reveal><p className="eyebrow text-gold">Who we are</p></Reveal>
          <ScrollText
            text="Our philosophy is simple yet transformative: organize fragmented supply chains, elevate quality standards, and deliver reliability at scale."
            className="mt-10 max-w-6xl font-serif text-4xl leading-[1.22] tracking-[-0.01em] text-ink md:text-6xl lg:text-[72px]"
          />
          <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-20">
            <Reveal>
              <p className="text-lg font-light leading-[1.85] text-body">
                FORTE is a rapidly growing Ethiopian enterprise established to answer one of the most persistent challenges facing large-scale
                industry and institutions: the absence of an organized, reliable, end-to-end supply chain — most acutely in food.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lg font-light leading-[1.85] text-body">
                Born from the operational strength of Rock Age Trading Industries, we operate as a strategic partner rather than a transactional
                supplier — combining local resource potential with structured logistics, quality assurance and tailored service delivery.
              </p>
              <Link href="/about" className="btn-ink mt-10">Read our story <span aria-hidden>→</span></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-deep py-24 text-paper md:py-32">
        <div className="container-x grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="border-t border-gold/40 pt-8">
                <div className="font-serif text-6xl text-gold-light md:text-7xl">
                  <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="mt-5 max-w-[240px] text-sm font-light leading-relaxed text-paper/65">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <HorizontalPillars items={services} />

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
          <Duotone src={IMG.crane} className="aspect-[4/5] w-full" />
          <div>
            <SectionHead eyebrow="The defining experience" title="The Turning Point" />
            <Reveal delay={0.1}>
              <p className="mt-10 text-lg font-light leading-[1.85] text-body">
                Contracted to supply construction materials to one of Ethiopia’s largest national mega projects, FORTE watched the workforce surge
                from hundreds to over 5,000 as the project moved into production — and local catering capacity buckle under the load.
              </p>
              <p className="mt-6 text-lg font-light leading-[1.85] text-body">
                With no prior food experience, we organized local producers, passed stringent facility audits and delivered the contract.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <blockquote className="mt-12 border-l border-gold pl-8 font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                Ethiopia already possessed the capacity to meet global food quality and volume standards. The missing link was organization.
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest py-28 text-paper md:py-40">
        <div className="container-x">
          <SectionHead
            dark
            align="split"
            eyebrow="Value chain"
            title="From Farm to Table"
            intro="We are investing in our own farms, poultry units, processing facilities and cold rooms to control quality and continuity directly."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {chain.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="group">
                  <Duotone src={c.image} className="aspect-[3/4] w-full" />
                  <div className="mt-7 font-serif text-xl text-gold-light">0{i + 1}</div>
                  <h3 className="mt-3 font-serif text-3xl">{c.title}</h3>
                  <p className="mt-4 text-[15px] font-light leading-relaxed text-paper/70">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16">
            <Link href="/value-chain" className="btn-gold">Our quality system <span aria-hidden>→</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper pt-28 md:pt-40">
        <div className="container-x">
          <SectionHead
            align="split"
            eyebrow="Who we serve"
            title="Trusted where standards are highest"
            intro="Diplomatic, industrial and hospitality clients — each with different standards, all requiring the same reliability."
          />
        </div>
        <div className="mt-16">
          <Marquee items={clientSegments.map((c) => c.title)} />
        </div>
        <div className="container-x py-24">
          <Reveal><p className="eyebrow text-gold">Why they stay</p></Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {whyStay.map((w, i) => (
              <Reveal key={w} delay={i * 0.08}>
                <div className="border-t border-ink/15 pt-6">
                  <div className="font-serif text-lg text-gold">0{i + 1}</div>
                  <div className="mt-3 text-xl font-light text-ink">{w}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <Link href="/clients" className="btn-ink">Our clients <span aria-hidden>→</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-night text-paper">
        <Duotone src={IMG.farmer} className="absolute inset-0" shade="deep" reveal={false} />
        <div className="container-x relative py-36 md:py-52">
          <Reveal><p className="eyebrow text-gold-light">Sustainability &amp; impact</p></Reveal>
          <ScrollText
            text="Food security, education and employment are deeply interconnected — so our growth is tied to national purpose."
            className="mt-10 max-w-5xl font-serif text-4xl leading-[1.22] md:text-6xl"
          />
          <RuleReveal dark className="mt-12 max-w-md" />
          <Reveal className="mt-12">
            <Link href="/sustainability" className="btn-gold">Our impact <span aria-hidden>→</span></Link>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
