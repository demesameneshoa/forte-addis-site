import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Reveal, { RuleReveal } from '@/components/Reveal';
import Duotone from '@/components/Duotone';
import Counter from '@/components/Counter';
import ScrollText from '@/components/ScrollText';
import CTA from '@/components/CTA';
import { IMG, functions, painPoints, timeline, values } from '@/lib/content';

export const metadata: Metadata = { title: 'About — Our Story', description: 'How FORTE grew from Rock Age Trading Industries into Ethiopia’s organized supply partner.' };

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Architecting the Essential"
        intro="An Ethiopian enterprise built to organize what was fragmented, professionalize what was informal, and unlock the full potential of the country’s resources."
        image={IMG.food}
      />

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x">
          <SectionHead eyebrow="I — Executive summary" title="A strategic partner, not a transactional supplier" />
          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
            <Reveal>
              <p className="text-lg font-light leading-[1.85] text-body">
                FORTE is a rapidly growing Ethiopian enterprise established to answer one of the most persistent challenges facing large-scale
                industry and institutions: the absence of an organized, reliable, end-to-end supply chain — most acutely in food.
              </p>
              <p className="mt-6 text-lg font-light leading-[1.85] text-body">
                We operate as a B2B general supply company with food items supply as our core pillar, delivering fresh, frozen, dried and processed
                food to mega projects, embassies, hotels, high-end restaurants and multinational canteens.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lg font-light leading-[1.85] text-body">
                By combining local resource potential with structured logistics, quality assurance and tailored service delivery, FORTE stands as a
                strategic partner. We have since diversified into cold-chain services, furniture and office supplies, garment and textiles,
                advertising and event materials, and finishing works and interior design.
              </p>
              <p className="mt-6 font-serif text-2xl leading-snug text-ink md:text-3xl">
                Organize fragmented supply chains. Elevate quality standards. Deliver reliability at scale.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest text-paper">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <Duotone src={IMG.quarry} className="min-h-[60vh] lg:min-h-full" reveal={false} shade="soft" />
          <div className="px-6 py-28 md:px-12 md:py-36 lg:px-20">
            <SectionHead dark eyebrow="II — Background & evolution" title="Our Lineage" />
            <Reveal delay={0.1}>
              <p className="mt-10 text-lg font-light leading-[1.85] text-paper/80">
                FORTE emerged from Rock Age Trading Industries — a company with a strong footprint in mining, construction raw materials and
                vehicle-related imports. Rock Age’s granite and marble quarrying laid the foundation for our operational discipline, supplier
                management experience and exposure to large projects.
              </p>
              <p className="mt-6 text-lg font-light leading-[1.85] text-paper/80">
                As Ethiopia’s population grew and mega projects expanded into remote regions, a critical gap became evident: large-scale food supply
                for institutional clients lacked organization, specialization and end-to-end ownership. Food resources existed locally, yet the
                absence of a structured value chain forced hotels, airlines and projects to rely on imports.
              </p>
              <p className="mt-6 text-lg font-light leading-[1.85] text-paper/80">
                FORTE was established to respond decisively — shifting toward organized resource tendering, beginning with construction materials and
                expanding into food and logistics-intensive services.
              </p>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 gap-10 border-t border-gold/30 pt-10">
              <div>
                <div className="font-serif text-6xl text-gold-light"><Counter to={5} /></div>
                <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-paper/55">Founding team</p>
              </div>
              <div>
                <div className="font-serif text-6xl text-gold-light"><Counter to={24} suffix="+" /></div>
                <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-paper/55">Professionals within one year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x">
          <SectionHead eyebrow="III — The defining experience" title="The Turning Point" />
          <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div className="flex flex-col gap-12">
              {[
                ['Contracted for construction', 'FORTE was engaged by one of Ethiopia’s largest national mega projects to supply construction raw materials and equipment.'],
                ['From hundreds to over 5,000', 'As the project moved from exploration to production, the workforce surged — placing immense pressure on catering and food supply.'],
                ['A gap in the market', 'Local caterers could not meet the scale or standards required. An international catering firm stepped in, and immediately faced the challenge of sourcing reliable, high-volume, quality food locally.'],
                ['Organized, audited, delivered', 'Despite no prior direct food experience, FORTE leveraged its reputation and supplier coordination, partnered with local producers, passed stringent facility audits, and secured and delivered the contract.'],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.05}>
                  <div className="grid grid-cols-[56px_1fr] gap-6">
                    <div className="font-serif text-2xl text-gold">0{i + 1}</div>
                    <div className="border-t border-ink/15 pt-5">
                      <h3 className="font-serif text-2xl text-ink md:text-3xl">{t}</h3>
                      <p className="mt-4 text-[17px] font-light leading-[1.8] text-body">{d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Duotone src={IMG.kitchen} className="aspect-[4/5] w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deep py-32 text-paper md:py-48">
        <div className="container-x">
          <Reveal><p className="eyebrow text-gold-mid">The insight</p></Reveal>
          <ScrollText
            text="Ethiopia already possessed the capacity to meet global food quality and volume standards. The missing link was organization."
            className="mt-10 max-w-6xl font-serif text-4xl italic leading-[1.25] md:text-6xl"
          />
        </div>
      </section>

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x">
          <SectionHead
            align="split"
            eyebrow="IV — Market need & positioning"
            title="Why We Exist"
            intro="Modern institutional clients require precision, consistency and reliability — and increasingly, ready-cut, portioned, frozen and processed items that reduce waste and optimize kitchens."
          />
          <div className="mt-6">
            {painPoints.map((p, i) => (
              <Reveal key={p.pain} delay={i * 0.05}>
                <div className="grid gap-4 border-b border-ink/12 py-9 md:grid-cols-[60px_1fr_1fr] md:gap-10">
                  <div className="font-serif text-xl text-gold">0{i + 1}</div>
                  <div className="text-xl font-light text-ink/60 line-through decoration-gold/50 decoration-1">{p.pain}</div>
                  <div className="text-xl font-light text-ink">{p.answer}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-28 text-paper md:py-40">
        <div className="container-x">
          <SectionHead dark eyebrow="Our journey" title="From Quarry to Export Markets" />
          <div className="relative mt-20">
            <RuleReveal dark className="absolute left-0 right-0 top-[38px] hidden lg:block" />
            <div className="grid gap-12 lg:grid-cols-4 lg:gap-10">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.12}>
                  <div className="relative">
                    <div className="font-serif text-6xl text-gold-light md:text-7xl">{t.year}</div>
                    <span className="mt-6 block h-3 w-3 rotate-45 bg-gold" />
                    <h3 className="mt-6 font-serif text-2xl">{t.title}</h3>
                    <p className="mt-3 text-[15px] font-light leading-relaxed text-paper/70">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <Reveal>
              <p className="eyebrow text-gold">Mission</p>
              <p className="mt-8 font-serif text-3xl italic leading-[1.4] text-ink md:text-4xl">
                To supply resources effectively where demands are in need of organizational ease.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="eyebrow text-gold">Vision</p>
              <p className="mt-8 font-serif text-3xl italic leading-[1.4] text-ink md:text-4xl">
                To transform the current supply trend into an organized divergence for 100 businesses by 2030, redefining excellence through a
                workforce of 1,000 happy professionals.
              </p>
            </Reveal>
          </div>
          <RuleReveal className="mt-20" />
          <Reveal className="mt-16"><p className="eyebrow text-gold">Core values</p></Reveal>
          <div className="mt-10 grid gap-x-16 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="flex gap-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold text-gold">✓</span>
                  <div>
                    <h3 className="font-serif text-2xl text-ink">{v.title}</h3>
                    <p className="mt-2 text-[16px] font-light leading-relaxed text-body">{v.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep py-28 text-paper md:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <SectionHead
            dark
            eyebrow="Organization & culture"
            title="Autonomy, Accountability"
            intro="A collaborative, autonomous management structure that enables speed, accountability and innovation — with ownership, cross-functional collaboration and continuous improvement at its centre."
          />
          <div className="grid content-end gap-x-10 sm:grid-cols-2">
            {functions.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <div className="border-t border-gold/30 py-6 text-lg font-light text-paper/90">{f}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
