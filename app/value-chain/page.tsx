import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import Duotone from '@/components/Duotone';
import ScrollText from '@/components/ScrollText';
import CTA from '@/components/CTA';
import { IMG, chain, qa } from '@/lib/content';

export const metadata: Metadata = { title: 'Value Chain & Quality', description: 'How FORTE controls quality from farm to table.' };

export default function ValueChain() {
  return (
    <>
      <PageHero
        eyebrow="Value chain & quality"
        title="From Farm to Table"
        intro="Our competitive strength lies in a value-chain-centric operating model — owning the links where quality is won or lost."
        image={IMG.farm}
      />

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <SectionHead eyebrow="The model" title="Control the chain, guarantee the outcome" />
          <Reveal delay={0.1}>
            <p className="text-lg font-light leading-[1.85] text-body">
              Most suppliers broker. FORTE is investing in its own farms, poultry units, meat processing facilities and cold rooms so that quality and
              supply continuity are controlled directly rather than negotiated after the fact.
            </p>
            <p className="mt-6 text-lg font-light leading-[1.85] text-body">
              Where we partner, we audit and develop. Where a link is critical, we own it. The result is one accountable chain from the field to the
              client’s kitchen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper pb-28 md:pb-40">
        <div className="container-x flex flex-col gap-24 md:gap-32">
          {chain.map((c, i) => (
            <div key={c.title} className="grid items-center gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
              <div className={i % 2 ? 'md:order-2' : ''}>
                <Duotone src={c.image} className="aspect-[4/3] w-full" />
              </div>
              <Reveal>
                <div className="font-serif text-[120px] leading-none text-gold/25 md:text-[160px]">0{i + 1}</div>
                <h2 className="-mt-6 font-serif text-5xl text-ink md:-mt-10 md:text-6xl">{c.title}</h2>
                <div className="gold-rule mt-8 h-px w-40" />
                <p className="mt-8 max-w-lg text-lg font-light leading-[1.85] text-body">{c.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-night text-paper">
        <Duotone src={IMG.meat} className="absolute inset-0" shade="side" reveal={false} />
        <div className="container-x relative py-36 md:py-48">
          <Reveal><p className="eyebrow text-gold-light">Our philosophy</p></Reveal>
          <Reveal delay={0.1}><h2 className="mt-8 font-serif text-6xl italic leading-[1.02] md:text-8xl">Frozen is the New Fresh.</h2></Reveal>
          <ScrollText
            text="Proper slaughtering, blood drainage, portioning, chilling and controlled freezing deliver higher hygiene, longer shelf life and consistent cooking quality — the opposite of compromise."
            className="mt-12 max-w-3xl text-2xl font-light leading-[1.6] text-paper md:text-3xl"
          />
        </div>
      </section>

      <section className="bg-forest py-28 text-paper md:py-40">
        <div className="container-x">
          <SectionHead dark align="split" eyebrow="Quality assurance" title="Standards practised daily" intro="Quality isn’t inspected in at the end. It is built into the routine of every person and partner in the chain." />
          <div className="mt-16 grid gap-px bg-gold/20 md:grid-cols-2">
            {qa.map((q, i) => (
              <Reveal key={q.title} delay={i * 0.08} className="bg-forest">
                <div className="flex h-full gap-6 p-8 md:p-12">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-mid text-gold-light">✓</span>
                  <div>
                    <h3 className="font-serif text-3xl">{q.title}</h3>
                    <p className="mt-3 text-[16px] font-light leading-relaxed text-paper/70">{q.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 flex flex-wrap gap-4">
            <Link href="/services/cold-room-provision" className="btn-gold">Cold room services <span aria-hidden>→</span></Link>
            <Link href="/services/food-items-supply" className="btn-gold">Food items supply <span aria-hidden>→</span></Link>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
