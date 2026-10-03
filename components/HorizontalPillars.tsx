'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Service } from '@/lib/content';

function Card({ s }: { s: Service }) {
  return (
    <Link href={`/services/${s.slug}`} className="group relative block h-full w-full overflow-hidden bg-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={s.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full scale-110 object-cover grayscale contrast-[1.1] brightness-[0.8] transition-transform duration-[1600ms] ease-out group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-forest mix-blend-color" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,19,0.15),rgba(7,26,19,0.35)_40%,rgba(7,26,19,0.95))]" />
      <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
        <div className="font-serif text-2xl text-gold-light">{s.num}</div>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-paper lg:text-[38px]">{s.title}</h3>
        <p className="mt-4 max-w-md text-[15px] font-light leading-relaxed text-paper/75">{s.short}</p>
        <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold-light">
          Discover
          <span className="inline-block h-px w-8 bg-gold-light transition-all duration-500 group-hover:w-16" />
        </div>
      </div>
    </Link>
  );
}

/** Pinned section: vertical scroll drives a horizontal track of service cards. */
export default function HorizontalPillars({ items }: { items: Service[] }) {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const measure = () => track.current && setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <section ref={ref} className="relative hidden bg-forest md:block" style={{ height: `${items.length * 50 + 100}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div ref={track} style={{ x }} className="flex items-stretch gap-8 px-[8vw]">
            <div className="flex w-[34vw] shrink-0 flex-col justify-center pr-10">
              <p className="eyebrow text-gold-mid">Core Business</p>
              <h2 className="mt-7 font-serif text-6xl leading-[1.03] tracking-[-0.015em] text-paper lg:text-7xl">Eight Pillars, One Standard</h2>
              <div className="gold-rule-dark mt-9 h-px w-full" />
              <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-paper/70">
                Food leads. Every adjacent line was added because clients asked for one accountable vendor across more of their operation.
              </p>
            </div>
            {items.map((s) => (
              <div key={s.slug} className="h-[68vh] w-[32vw] shrink-0">
                <Card s={s} />
              </div>
            ))}
          </motion.div>
          <div className="mx-[8vw] mt-12 h-px bg-paper/15">
            <motion.div style={{ scaleX: bar }} className="h-px origin-left bg-gold-light" />
          </div>
        </div>
      </section>

      <section className="bg-forest py-24 md:hidden">
        <div className="container-x">
          <p className="eyebrow text-gold-mid">Core Business</p>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] text-paper">Eight Pillars, One Standard</h2>
          <div className="gold-rule-dark mt-8 h-px w-full" />
          <div className="mt-12 grid gap-6">
            {items.map((s) => (
              <div key={s.slug} className="h-[460px]">
                <Card s={s} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
