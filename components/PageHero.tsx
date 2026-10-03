'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE } from './Reveal';

type Props = { eyebrow: string; title: string; intro?: string; image: string; compact?: boolean };

export function SplitWords({ text, delay = 0.25, className = '' }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={className}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.15, delay: delay + i * 0.075, ease: EASE }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function PageHero({ eyebrow, title, intro, image, compact = false }: Props) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], ['0%', '22%']);
  const fade = useTransform(scrollY, [0, 520], [1, 0]);
  const lift = useTransform(scrollY, [0, 520], [0, -60]);

  return (
    <section className={`relative flex items-end overflow-hidden bg-night text-paper ${compact ? 'min-h-[72svh]' : 'min-h-[92svh]'}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={image}
          alt=""
          initial={{ scale: 1.3 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 2.6, ease: EASE }}
          className="h-full w-full object-cover grayscale contrast-[1.1] brightness-[0.72]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-forest mix-blend-color" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,19,0.6),rgba(7,26,19,0.3)_40%,rgba(7,26,19,0.94))]" />

      <motion.div style={{ opacity: fade, y: lift }} className="container-x relative pb-20 pt-44 md:pb-28">
        <motion.p
          className="eyebrow text-gold-light"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
        >
          {eyebrow}
        </motion.p>
        <h1 className="mt-7 max-w-5xl font-serif text-5xl leading-[1.02] tracking-[-0.015em] md:text-7xl lg:text-[96px]">
          <SplitWords text={title} />
        </h1>
        <motion.div
          className="gold-rule-dark mt-10 h-px w-full max-w-xl origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 0.7, ease: EASE }}
        />
        {intro && (
          <motion.p
            className="mt-9 max-w-2xl text-lg font-light leading-relaxed text-paper/80 md:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.95, ease: EASE }}
          >
            {intro}
          </motion.p>
        )}
      </motion.div>

      <div className="pointer-events-none absolute bottom-8 right-6 hidden flex-col items-center gap-3 md:right-12 md:flex lg:right-20">
        <span className="eyebrow text-[10px] text-paper/50 [writing-mode:vertical-rl]">Scroll</span>
        <span className="block h-14 w-px animate-cue bg-gold-light/70" />
      </div>
    </section>
  );
}
