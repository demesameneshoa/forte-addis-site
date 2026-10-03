import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import Duotone from '@/components/Duotone';
import Marquee from '@/components/Marquee';
import CTA from '@/components/CTA';
import { IMG, clientSegments, painPoints, whyStay } from '@/lib/content';

export const metadata: Metadata = { title: 'Clients', description: 'The diplomatic, industrial and hospitality clients FORTE serves.' };

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Customers & market reach"
        title="Who We Serve"
        intro="A diverse, high-demand client base across diplomatic, industrial and hospitality environments — each with different standards, all requiring the same reliability."
        image={IMG.retail}
      />

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x">
          <SectionHead align="split" eyebrow="Client base" title="Ten segments, one standard" intro="Our clients range from remote mega-project camps to embassy kitchens. What they share is zero tolerance for unreliable supply." />
          <div className="mt-16 grid gap-x-12 sm:grid-cols-2">
            {clientSegments.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 0.08}>
                <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-ink/12 py-8">
                  <span className="font-serif text-lg text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-ink md:text-[28px]">{c.title}</h3>
                    <p className="mt-2 text-[16px] font-light leading-relaxed text-body">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee dark items={whyStay} />

      <section className="bg-forest text-paper">
        <div className="grid lg:grid-cols-2">
          <div className="px-6 py-28 md:px-12 md:py-36 lg:px-20">
            <SectionHead dark eyebrow="Why they stay" title="Reasons that compound" />
            <div className="mt-14 flex flex-col">
              {whyStay.map((w, i) => (
                <Reveal key={w} delay={i * 0.06}>
                  <div className="flex items-baseline gap-8 border-b border-gold/25 py-6">
                    <span className="font-serif text-xl text-gold-light">0{i + 1}</span>
                    <span className="text-2xl font-light">{w}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Duotone src={IMG.kitchen} className="min-h-[60vh] lg:min-h-full" reveal={false} />
        </div>
      </section>

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x">
          <SectionHead eyebrow="Problems we solve" title="From pain point to answer" />
          <div className="mt-14 hidden grid-cols-[1fr_1fr] gap-10 pb-4 md:grid">
            <span className="eyebrow text-body/60">What clients faced</span>
            <span className="eyebrow text-gold">How FORTE answers</span>
          </div>
          {painPoints.map((p, i) => (
            <Reveal key={p.pain} delay={i * 0.05}>
              <div className="grid gap-3 border-t border-ink/12 py-8 md:grid-cols-[1fr_1fr] md:gap-10">
                <p className="text-xl font-light text-body/70">{p.pain}</p>
                <p className="font-serif text-2xl text-ink">{p.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
