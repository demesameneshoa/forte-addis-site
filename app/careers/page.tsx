import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import Duotone from '@/components/Duotone';
import Counter from '@/components/Counter';
import { CONTACT, IMG, functions, values } from '@/lib/content';

export const metadata: Metadata = { title: 'Careers', description: 'Join FORTE and help build Ethiopia’s organized supply standard.' };

const steps = [
  { title: 'Send your CV', text: `Email your CV and a short note on the function you’re interested in to ${CONTACT.email}.` },
  { title: 'Conversation', text: 'If there’s a fit, we’ll invite you to meet the function lead and talk about the work.' },
  { title: 'Assessment', text: 'A practical discussion or task relevant to the role — no trick questions.' },
  { title: 'Offer & onboarding', text: 'A clear offer, and an onboarding plan that gets you working with clients quickly.' },
];

export default function Careers() {
  const mail = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Career application — FORTE')}`;
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Grow With the Standard"
        intro="We grew from five people to 24 in a single year. Our vision is a workforce of 1,000 happy professionals by 2030."
        image={IMG.meeting}
      />

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <SectionHead eyebrow="Why FORTE" title="Real responsibility, early" />
            <Reveal delay={0.1}>
              <p className="mt-10 text-lg font-light leading-[1.85] text-body">
                FORTE is young, growing fast and operating at the scale of national mega projects and international clients. That combination means
                the people who join us carry real ownership from day one — inside a collaborative, autonomous structure built for speed and
                accountability.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-10 self-end">
            <Reveal>
              <div className="border-t border-gold pt-6">
                <div className="font-serif text-6xl text-gold"><Counter to={24} suffix="+" /></div>
                <p className="mt-3 text-sm font-light text-body">People today</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border-t border-gold pt-6">
                <div className="font-serif text-6xl text-gold"><Counter to={1000} /></div>
                <p className="mt-3 text-sm font-light text-body">Our 2030 ambition</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest text-paper">
        <div className="grid lg:grid-cols-2">
          <Duotone src={IMG.truck} className="min-h-[60vh] lg:min-h-full" reveal={false} />
          <div className="px-6 py-28 md:px-12 md:py-36 lg:px-20">
            <SectionHead dark eyebrow="Where you could work" title="Areas we hire in" />
            <div className="mt-12 flex flex-col">
              {functions.map((f, i) => (
                <Reveal key={f} delay={i * 0.05}>
                  <div className="flex items-baseline gap-6 border-b border-gold/25 py-5">
                    <span className="font-serif text-lg text-gold-light">0{i + 1}</span>
                    <span className="text-xl font-light">{f}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x">
          <SectionHead eyebrow="What we look for" title="People who live our values" />
          <div className="mt-16 grid gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="border-t border-ink/15 pt-6">
                  <h3 className="font-serif text-2xl text-ink">{v.title}</h3>
                  <p className="mt-2 text-[16px] font-light leading-relaxed text-body">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep py-28 text-paper md:py-40">
        <div className="container-x">
          <SectionHead dark align="split" eyebrow="How to apply" title="Four steps" intro="We keep the process simple and respectful of your time." />
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="border-t border-gold/40 pt-8">
                  <div className="font-serif text-5xl text-gold-light">0{i + 1}</div>
                  <h3 className="mt-5 font-serif text-2xl">{s.title}</h3>
                  <p className="mt-3 text-[15px] font-light leading-relaxed text-paper/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16">
            <a href={mail} className="btn-gold">Apply by email <span aria-hidden>→</span></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
