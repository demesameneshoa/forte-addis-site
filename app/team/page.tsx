import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import Duotone from '@/components/Duotone';
import ScrollText from '@/components/ScrollText';
import CTA from '@/components/CTA';
import { IMG, functions, team } from '@/lib/content';

export const metadata: Metadata = { title: 'Team', description: 'The people behind the FORTE standard.' };

const culture = [
  { title: 'Ownership', text: 'Every function owns its outcome. Autonomy is given; accountability is expected.' },
  { title: 'Cross-functional collaboration', text: 'Operations, logistics, finance and sales work as one team around each client.' },
  { title: 'Continuous improvement', text: 'Every delivery is a chance to raise the standard for the next one.' },
];

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Meet the team"
        title="The People Behind the Standard"
        intro="A team of 24 professionals, grown from a founding five in a single year — and building toward 1,000 by 2030."
        image={IMG.team}
      />

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x">
          <Reveal><p className="eyebrow text-gold">Our people</p></Reveal>
          <ScrollText
            text="Reliability isn’t a system. It’s people who keep promises — in procurement, in the cold room, on the road and at the client’s door."
            className="mt-10 max-w-5xl font-serif text-4xl leading-[1.25] text-ink md:text-6xl"
          />
        </div>
      </section>

      <section className="bg-forest py-28 text-paper md:py-40">
        <div className="container-x">
          <SectionHead dark align="split" eyebrow="Leadership" title="Key staff" intro="Eight leaders holding the functions that keep a promise of reliability operational." />
          <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 0.08}>
                <div className="group">
                  <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden border border-gold/30 bg-deep">
                    <span className="font-serif text-6xl text-gold-light transition-transform duration-700 group-hover:scale-110">{m.initials}</span>
                    <span className="absolute right-0 top-0 h-10 w-10 bg-[linear-gradient(135deg,#B8862E,#F5DE84)] [clip-path:polygon(100%_0,0_0,100%_100%)]" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl">{m.name}</h3>
                  <p className="mt-2 text-sm font-light tracking-wide text-paper/65">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <SectionHead eyebrow="Structure" title="Seven functions, one team" intro="A collaborative and autonomous management structure that enables speed, accountability and innovation." />
            <div className="mt-12 grid gap-x-8 sm:grid-cols-2">
              {functions.map((f, i) => (
                <Reveal key={f} delay={i * 0.04}>
                  <div className="border-t border-ink/15 py-5 text-lg font-light text-ink">{f}</div>
                </Reveal>
              ))}
            </div>
          </div>
          <Duotone src={IMG.meeting} className="aspect-[4/5] w-full lg:sticky lg:top-32 lg:self-start" />
        </div>
      </section>

      <section className="bg-deep py-28 text-paper md:py-36">
        <div className="container-x">
          <SectionHead dark eyebrow="Culture" title="How we work" />
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {culture.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="border-t border-gold/40 pt-8">
                  <div className="font-serif text-xl text-gold-light">0{i + 1}</div>
                  <h3 className="mt-4 font-serif text-3xl">{c.title}</h3>
                  <p className="mt-4 text-[16px] font-light leading-relaxed text-paper/70">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16">
            <Link href="/careers" className="btn-gold">Join the team <span aria-hidden>→</span></Link>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
