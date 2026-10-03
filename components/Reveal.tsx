'use client';

import { motion } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1] as const;

type Props = { children: React.ReactNode; delay?: number; y?: number; className?: string };

export default function Reveal({ children, delay = 0, y = 48, className = '' }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function RuleReveal({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return (
    <motion.div
      className={`h-px origin-left ${dark ? 'gold-rule-dark' : 'gold-rule'} ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1.6, ease: EASE }}
    />
  );
}
