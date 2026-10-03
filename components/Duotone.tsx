'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE } from './Reveal';

type Shade = 'soft' | 'deep' | 'bottom' | 'side';
type Props = { src: string; alt?: string; className?: string; parallax?: boolean; reveal?: boolean; shade?: Shade };

const SHADES: Record<Shade, string> = {
  soft: 'linear-gradient(180deg,rgba(7,26,19,0.08),rgba(7,26,19,0.5))',
  deep: 'linear-gradient(180deg,rgba(7,26,19,0.55),rgba(7,26,19,0.88))',
  bottom: 'linear-gradient(180deg,rgba(7,26,19,0.2),rgba(7,26,19,0.3) 45%,rgba(7,26,19,0.92))',
  side: 'linear-gradient(90deg,rgba(7,26,19,0.9),rgba(7,26,19,0.45) 60%,rgba(7,26,19,0.25))',
};

/** Forest-green duotone image with scroll parallax and clip-path reveal. */
export default function Duotone({ src, alt = '', className = '', parallax = true, reveal = true, shade = 'soft' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ['-9%', '9%'] : ['0%', '0%']);

  return (
    <motion.div
      ref={ref}
      className={`${/\babsolute\b/.test(className) ? '' : 'relative'} overflow-hidden bg-forest ${className}`}
      initial={reveal ? { clipPath: 'inset(10% 10% 10% 10%)' } : false}
      whileInView={reveal ? { clipPath: 'inset(0% 0% 0% 0%)' } : undefined}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 1.5, ease: EASE }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale: 1.22 }}
        className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.1] brightness-[0.86]"
      />
      <div className="absolute inset-0 bg-forest mix-blend-color" />
      <div className="absolute inset-0" style={{ background: SHADES[shade] }} />
    </motion.div>
  );
}
