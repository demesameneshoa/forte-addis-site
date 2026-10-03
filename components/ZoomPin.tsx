'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = { src: string; eyebrow: string; title: string; text?: string };

/** Pinned image that expands from a framed window to full-bleed while text rises over it. */
export default function ZoomPin({ src, eyebrow, title, text }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const clip = useTransform(scrollYProgress, [0, 0.55], ['inset(16% 20% 16% 20%)', 'inset(0% 0% 0% 0%)']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.35, 1.02]);
  const shade = useTransform(scrollYProgress, [0.3, 0.6], [0.15, 0.78]);
  const textO = useTransform(scrollYProgress, [0.45, 0.68], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.45, 0.75], [80, 0]);
  const intro = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section ref={ref} className="relative h-[230vh] bg-paper">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.p style={{ opacity: intro }} className="eyebrow absolute left-1/2 top-[7%] z-10 -translate-x-1/2 text-gold">
          {eyebrow}
        </motion.p>
        <motion.div style={{ clipPath: clip }} className="absolute inset-0 bg-forest">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img src={src} alt="" style={{ scale }} className="h-full w-full object-cover grayscale contrast-[1.1] brightness-[0.85]" />
          <div className="absolute inset-0 bg-forest mix-blend-color" />
          <motion.div style={{ opacity: shade }} className="absolute inset-0 bg-night" />
        </motion.div>
        <motion.div style={{ opacity: textO, y: textY }} className="container-x absolute inset-x-0 bottom-[14%] text-paper">
          <p className="eyebrow text-gold-light">{eyebrow}</p>
          <h2 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.04] tracking-[-0.015em] md:text-7xl lg:text-[88px]">{title}</h2>
          {text && <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-paper/80 md:text-xl">{text}</p>}
        </motion.div>
      </div>
    </section>
  );
}
