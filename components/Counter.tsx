'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

type Props = { to: number; prefix?: string; suffix?: string; duration?: number };

export default function Counter({ to, prefix = '', suffix = '', duration = 2.4 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
