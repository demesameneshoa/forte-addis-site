'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/** Oversized headline that slides horizontally as the page scrolls. */
export default function ScrollMarquee({ text, dark = false, reverse = false }: { text: string; dark?: boolean; reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], reverse ? ['-35%', '5%'] : ['5%', '-35%']);
  const row = `${text} · ${text} · ${text}`;
  return (
    <div ref={ref} className={`overflow-hidden py-10 md:py-16 ${dark ? 'bg-forest' : 'bg-paper'}`}>
      <motion.div
        style={{ x }}
        className={`whitespace-nowrap font-serif text-[14vw] italic leading-none tracking-[-0.02em] md:text-[10vw] ${
          dark ? 'text-paper/90' : 'text-transparent [-webkit-text-stroke:1px_#B8862E]'
        }`}
      >
        {row}
      </motion.div>
    </div>
  );
}
