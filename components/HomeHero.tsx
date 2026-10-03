'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE } from './Reveal';
import { IMG } from '@/lib/content';

export default function HomeHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '28%']);
  const scale = useTransform(scrollY, [0, 1000], [1.08, 1.25]);
  const fade = useTransform(scrollY, [0, 600], [1, 0]);
  const lift = useTransform(scrollY, [0, 600], [0, -90]);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-night text-paper">
      <motion.div style={{ y }} className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={IMG.cover}
          alt=""
          style={{ scale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: EASE }}
          className="h-full w-full object-cover grayscale contrast-[1.1] brightness-[0.78]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-forest mix-blend-color" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(7,26,19,0.94),rgba(7,26,19,0.55)_55%,rgba(7,26,19,0.35))]" />

      <motion.div style={{ opacity: fade, y: lift }} className="container-x relative pt-28">
        <motion.p className="eyebrow text-paper/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }}>
          Fikadu Organized Resources Tendering Enterprise
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.6, delay: 0.35, ease: EASE }}
          className="mt-12"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/forte-logo.png" alt="FORTE" className="w-[min(640px,82vw)]" />
        </motion.div>
        <motion.div
          className="gold-rule-dark mt-12 h-px w-full max-w-3xl origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.9, ease: EASE }}
        />
        <motion.p
          className="mt-8 text-sm font-light uppercase tracking-[0.52em] text-gold-light md:text-base"
          initial={{ opacity: 0, letterSpacing: '0.9em' }}
          animate={{ opacity: 1, letterSpacing: '0.52em' }}
          transition={{ duration: 1.8, delay: 1.1, ease: EASE }}
        >
          The Art of Organized Supply
        </motion.p>
        <motion.div
          className="mt-14 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: EASE }}
        >
          <Link href="/services" className="btn-gold">Explore our pillars <span aria-hidden>→</span></Link>
          <Link href="/about" className="inline-flex items-center gap-4 px-2 py-4 text-[11px] font-medium uppercase tracking-[0.32em] text-paper/80 transition-colors hover:text-gold-light">Our story</Link>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="eyebrow text-[10px] text-paper/50">Scroll</span>
        <span className="block h-14 w-px animate-cue bg-gold-light/70" />
      </div>
    </section>
  );
}
