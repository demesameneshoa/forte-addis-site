import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import Duotone from '@/components/Duotone';
import ScrollText from '@/components/ScrollText';
import CTA from '@/components/CTA';
import { IMG, impact } from '@/lib/content';

export const metadata: Metadata = { title: 'Sustainability & Impact', description: 'Growth tied to national purpose: employment, school feeding, import substitution and local producers.' };

export default function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability & impact"
        title="Growth Tied to National Purpose"
        intro="We believe food security, education and employment are deeply interconnected — and that an organized supply chain can strengthen all three."
        image={IMG.farmer}
      />

      <section className="bg-paper py-28 md:py-44">
        <div className="container-x">
          <Reveal><p className="eyebrow text-gold">Our belief</p></Reveal>
          <ScrollText
            text="Every tonne sourced locally instead of imported is a job created, a producer strengthened and foreign currency kept at home."
            className="mt-10 max-w-6xl font-serif text-4xl leading-[1.22] text-ink md:text-6xl lg:text-[68px]"
          />
        </div>
      </section>

      <section className="bg-paper pb-28 md:pb-40">
        <div className="container-x flex flex-col gap-24 md:gap-36">
          {impact.map((m, i) => (
            <div key={m.title} className="grid items-end gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
              <div className={i % 2 ? 'md:order-2' : ''}>
                <Duotone src={m.image} className="aspect-[16/11] w-full" />
              </div>
              <Reveal>
                <p className="eyebrow text-gold">Impact area 0{i + 1}</p>
                <h2 className="mt-6 font-serif text-5xl text-ink md:text-6xl">{m.title}</h2>
                <div className="gold-rule mt-8 h-px w-40" />
                <p className="mt-8 text-lg font-light leading-[1.85] text-body">{m.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-forest py-28 text-paper md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
          <SectionHead dark eyebrow="The bigger picture" title="Proving local capacity" />
          <Reveal delay={0.1}>
            <p className="text-lg font-light leading-[1.85] text-paper/80">
              FORTE’s founding insight was that Ethiopia already had the capacity to meet global food quality and volume standards — what was
              missing was organization. Each contract we deliver with local producers is evidence of that capacity.
            </p>
            <p className="mt-6 text-lg font-light leading-[1.85] text-paper/80">
              As we scale our own farms, poultry units and processing facilities, we build them to be labour-intensive by design, prioritising youth
              employment. And as we move toward export markets, we aim to carry the same standard beyond our borders.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA title="Build impact into your supply chain." />
    </>
  );
}
