import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Reveal, { RuleReveal } from '@/components/Reveal';
import ZoomPin from '@/components/ZoomPin';
import ScrollMarquee from '@/components/ScrollMarquee';
import CTA from '@/components/CTA';
import { services } from '@/lib/content';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default function ServicePage({ params }: Params) {
  const i = services.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const s = services[i];
  const next = services[(i + 1) % services.length];
  const prev = services[(i - 1 + services.length) % services.length];

  return (
    <>
      <PageHero eyebrow={`Pillar ${s.num} — ${s.tag}`} title={s.title} intro={s.short} image={s.image} />

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-gold">Overview</p>
            <p className="mt-8 font-serif text-3xl leading-[1.35] text-ink md:text-[42px]">{s.lead}</p>
          </Reveal>
          <Reveal delay={0.12}>
            {s.body.map((p) => (
              <p key={p.slice(0, 20)} className="mb-6 text-lg font-light leading-[1.85] text-body">{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-forest py-28 text-paper md:py-40">
        <div className="container-x">
          <SectionHead dark align="split" eyebrow="What we supply" title="Offerings" intro={`${s.offerings.length} lines within ${s.title.toLowerCase()}, each delivered to the same standard.`} />
          <div className={`mt-16 grid gap-px bg-gold/20 ${s.offerings.length === 2 ? 'md:grid-cols-2' : s.offerings.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
            {s.offerings.map((o, k) => (
              <Reveal key={o.title} delay={k * 0.08} className="bg-forest">
                <div className="h-full p-8 md:p-10">
                  <div className="font-serif text-xl text-gold-light">0{k + 1}</div>
                  <h3 className="mt-5 font-serif text-3xl leading-tight">{o.title}</h3>
                  <p className="mt-4 text-[15px] font-light leading-relaxed text-paper/70">{o.text}</p>
                  <ul className="mt-8 flex flex-col gap-3 border-t border-gold/25 pt-6">
                    {o.items.map((it) => (
                      <li key={it} className="flex items-baseline gap-3 text-[15px] font-light text-paper/90">
                        <span className="text-gold-mid">—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ZoomPin src={s.image2} eyebrow={`${s.tag} — Why it matters`} title={s.highlights[0].title} text={s.highlights[0].text} />

      <ScrollMarquee text={s.title} />

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x grid gap-20 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div>
            <SectionHead eyebrow="Why FORTE" title="What sets this pillar apart" intro={s.body[1]} />
            <div className="mt-14 grid gap-12 sm:grid-cols-2">
              {s.highlights.slice(1).map((h, k) => (
                <Reveal key={h.title} delay={k * 0.08}>
                  <div className="border-t border-gold pt-6">
                    <h3 className="font-serif text-2xl text-ink">{h.title}</h3>
                    <p className="mt-3 text-[16px] font-light leading-relaxed text-body">{h.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15}>
            <div className="bg-forest p-10 text-paper md:p-12">
              <p className="eyebrow text-gold-mid">Who it serves</p>
              <ul className="mt-8 flex flex-col">
                {s.served.map((c) => (
                  <li key={c} className="border-b border-gold/25 py-4 text-lg font-light last:border-0">{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper pb-28">
        <div className="container-x">
          <RuleReveal />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link href={`/services/${prev.slug}`} className="group">
              <p className="eyebrow text-gold">← Previous pillar</p>
              <p className="mt-4 font-serif text-3xl text-ink transition-colors group-hover:text-gold">{prev.title}</p>
            </Link>
            <Link href={`/services/${next.slug}`} className="group md:text-right">
              <p className="eyebrow text-gold">Next pillar →</p>
              <p className="mt-4 font-serif text-3xl text-ink transition-colors group-hover:text-gold">{next.title}</p>
            </Link>
          </div>
        </div>
      </section>

      <CTA title={`Discuss ${s.title.toLowerCase()}.`} text="Share volumes, specifications, locations and timelines — we’ll come back with a supply plan." />
    </>
  );
}
