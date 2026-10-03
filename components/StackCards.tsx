'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

type Item = { title: string; text: string; image: string };

function Card({ item, i, n, progress }: { item: Item; i: number; n: number; progress: MotionValue<number> }) {
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.05]);
  const dim = useTransform(progress, [i / n, Math.min(1, (i + 1) / n)], [0, i === n - 1 ? 0 : 0.45]);
  return (
    <div className="sticky top-0 flex h-screen items-center" style={{ paddingTop: `${i * 28}px` }}>
      <motion.div style={{ scale }} className="relative mx-auto grid h-[78vh] w-full origin-top overflow-hidden bg-deep text-paper md:grid-cols-[1.1fr_1fr]">
        <div className="relative min-h-[34vh] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.1] brightness-[0.85]" />
          <div className="absolute inset-0 bg-forest mix-blend-color" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,19,0.1),rgba(7,26,19,0.5))]" />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20">
          <div className="font-serif text-[96px] leading-none text-gold/40 md:text-[140px]">0{i + 1}</div>
          <h3 className="mt-2 font-serif text-4xl md:text-6xl">{item.title}</h3>
          <div className="gold-rule-dark mt-8 h-px w-40" />
          <p className="mt-8 max-w-md text-lg font-light leading-[1.8] text-paper/75">{item.text}</p>
        </div>
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-night" />
      </motion.div>
    </div>
  );
}

/** Cards pin and stack on top of one another, receding as the next arrives. */
export default function StackCards({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  return (
    <div ref={ref} className="container-x relative">
      {items.map((it, i) => (
        <Card key={it.title} item={it} i={i} n={items.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}
