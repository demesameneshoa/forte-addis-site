'use client';

import { motion } from 'framer-motion';
import { EASE } from './Reveal';

/** Headline whose words slide up out of masks when scrolled into view. */
export default function InViewWords({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.span className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-12% 0px' }}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: '110%', rotate: 4 }, show: { y: '0%', rotate: 0 } }}
            transition={{ duration: 1.1, delay: i * 0.06, ease: EASE }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
