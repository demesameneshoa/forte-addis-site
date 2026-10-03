'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { NAV } from '@/lib/content';
import { EASE } from './Reveal';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40));
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const active = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-night/85 py-4 backdrop-blur-md' : 'bg-transparent py-7'
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <Link href="/" aria-label="FORTE home" className="relative z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/forte-logo.png" alt="FORTE" className={`transition-all duration-700 ${scrolled ? 'h-7' : 'h-9'}`} />
          </Link>
          <nav className="hidden items-center gap-9 xl:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`group relative text-[11px] font-medium uppercase tracking-[0.28em] transition-colors ${
                  active(n.href) ? 'text-gold-light' : 'text-paper/80 hover:text-paper'
                }`}
              >
                {n.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-gold-light transition-all duration-500 ${
                    active(n.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link href="/contact" className="btn-gold !px-5 !py-3">Contact</Link>
          </nav>
          <button
            onClick={() => setOpen((o) => !o)}
            className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[7px] xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className={`block h-px w-7 bg-paper transition-transform duration-500 ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
            <span className={`block h-px w-7 bg-paper transition-transform duration-500 ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
          </button>
        </div>
        <motion.div style={{ scaleX: scrollYProgress }} className="gold-rule-dark absolute bottom-0 left-0 h-px w-full origin-left" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-night px-8 xl:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <nav className="flex flex-col gap-5">
              {[{ href: '/', label: 'Home' }, ...NAV, { href: '/contact', label: 'Contact' }].map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.05, ease: EASE }}
                >
                  <Link href={n.href} className={`font-serif text-4xl ${active(n.href) && n.href !== '/' ? 'text-gold-light' : 'text-paper'}`}>
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="gold-rule-dark mt-12 h-px w-full" />
            <p className="mt-6 text-[11px] uppercase tracking-[0.4em] text-paper/50">The Art of Organized Supply</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
