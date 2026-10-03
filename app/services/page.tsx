import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import Duotone from '@/components/Duotone';
import CTA from '@/components/CTA';
import { IMG, services } from '@/lib/content';

export const metadata: Metadata = { title: 'Services', description: 'Eight business pillars, one standard — from food items supply to interior finishing.' };

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Core business"
        title="Eight Pillars, One Standard"
        intro="Food items supply is our primary wing. Every adjacent line was added because clients asked us to bring the same discipline to more of their operation."
        image={IMG.warehouse}
      />

      <section className="bg-paper py-28 md:py-36">
        <div className="container-x">
          <SectionHead
            align="split"
            eyebrow="What we do"
            title="A single, accountable vendor"
            intro="One relationship, one specification, one point of accountability — across food, cold chain, construction, furnishing, textiles, promotion and interiors."
          />
        </div>
      </section>

      <section className="bg-paper pb-28 md:pb-40">
        <div className="container-x flex flex-col gap-28 md:gap-40">
          {services.map((s, i) => (
            <div key={s.slug} className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-24 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <Link href={`/services/${s.slug}`} className="group block">
                <Duotone src={s.image} className="aspect-[5/4] w-full" />
              </Link>
              <div>
                <Reveal>
                  <div className="flex items-baseline gap-5">
                    <span className="font-serif text-5xl text-gold md:text-6xl">{s.num}</span>
                    <span className="eyebrow text-gold">{s.tag}</span>
                  </div>
                  <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-ink md:text-5xl">{s.title}</h2>
                  <div className="gold-rule mt-8 h-px w-40" />
                  <p className="mt-8 text-lg font-light leading-[1.85] text-body">{s.short}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {s.offerings.map((o) => (
                      <li key={o.title} className="flex items-baseline gap-3 text-[16px] font-light text-ink">
                        <span className="text-gold">—</span>
                        {o.title}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${s.slug}`} className="btn-ink mt-10">Explore {s.title.split(' ')[0].toLowerCase() === 'food' ? 'food supply' : 'this pillar'} <span aria-hidden>→</span></Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
