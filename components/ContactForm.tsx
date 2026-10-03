'use client';

import { useState } from 'react';
import { CONTACT, services } from '@/lib/content';

const field = 'w-full border-b border-ink/20 bg-transparent py-4 text-lg font-light text-ink outline-none transition-colors placeholder:text-body/50 focus:border-gold';

export default function ContactForm() {
  const [f, setF] = useState({ name: '', company: '', email: '', phone: '', interest: services[0].title, message: '' });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry: ${f.interest} — ${f.company || f.name}`;
    const body = [
      `Name: ${f.name}`,
      `Company: ${f.company}`,
      `Email: ${f.email}`,
      `Phone: ${f.phone}`,
      `Area of interest: ${f.interest}`,
      '',
      f.message,
    ].join('\n');
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <input required placeholder="Full name" value={f.name} onChange={set('name')} className={field} />
        <input placeholder="Company / organization" value={f.company} onChange={set('company')} className={field} />
        <input required type="email" placeholder="Email" value={f.email} onChange={set('email')} className={field} />
        <input placeholder="Phone" value={f.phone} onChange={set('phone')} className={field} />
      </div>
      <label className="grid gap-2">
        <span className="eyebrow text-gold">Area of interest</span>
        <select value={f.interest} onChange={set('interest')} className={`${field} cursor-pointer`}>
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Careers</option>
          <option>Partnership / other</option>
        </select>
      </label>
      <textarea
        required
        rows={5}
        placeholder="Tell us about volumes, specifications, locations and timelines."
        value={f.message}
        onChange={set('message')}
        className={`${field} resize-none`}
      />
      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" className="btn-ink">Send enquiry <span aria-hidden>→</span></button>
        {sent && <span className="text-sm font-light text-body">Your email app should open with the message ready to send.</span>}
      </div>
    </form>
  );
}
