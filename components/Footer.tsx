import Link from 'next/link';
import { CONTACT, NAV, services } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-night text-paper">
      <div className="container-x pb-12 pt-24">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/forte-logo.png" alt="FORTE" className="h-10" />
            <p className="mt-8 max-w-xs text-sm font-light leading-relaxed text-paper/60">
              An Ethiopian B2B general supply enterprise organizing fragmented supply chains — led by food, built on discipline.
            </p>
            <p className="mt-8 text-[11px] uppercase tracking-[0.44em] text-gold-light">The Art of Organized Supply</p>
          </div>
          <div>
            <p className="eyebrow text-gold-mid">Company</p>
            <ul className="mt-6 flex flex-col gap-3">
              {NAV.filter((n) => n.href !== '/services').map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm font-light text-paper/75 transition-colors hover:text-gold-light">{n.label}</Link>
                </li>
              ))}
              <li><Link href="/contact" className="text-sm font-light text-paper/75 transition-colors hover:text-gold-light">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-gold-mid">Services</p>
            <ul className="mt-6 flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm font-light text-paper/75 transition-colors hover:text-gold-light">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-gold-mid">Get in touch</p>
            <address className="mt-6 flex flex-col gap-1 text-sm font-light not-italic leading-relaxed text-paper/75">
              {CONTACT.address.map((l) => <span key={l}>{l}</span>)}
            </address>
            <div className="mt-6 flex flex-col gap-2 text-sm font-light">
              <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`} className="text-paper/75 hover:text-gold-light">{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="text-paper/75 hover:text-gold-light">{CONTACT.email}</a>
              <span className="text-gold-light">{CONTACT.web}</span>
            </div>
          </div>
        </div>
        <div className="gold-rule-dark mt-20 h-px w-full" />
        <div className="mt-8 flex flex-col justify-between gap-4 text-xs font-light text-paper/45 md:flex-row">
          <span>© {new Date().getFullYear()} FORTE — Fikadu Organized Resources Tendering Enterprise. All rights reserved.</span>
          <span>Addis Ababa, Ethiopia</span>
        </div>
      </div>
    </footer>
  );
}
