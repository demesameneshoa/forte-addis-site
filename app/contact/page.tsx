import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { CONTACT, IMG } from '@/lib/content';

export const metadata: Metadata = { title: 'Contact', description: 'Get in touch with FORTE in Addis Ababa.' };

export default function Contact() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Contact"
        title="Let’s Organize Your Supply"
        intro="Tell us what your operation needs. We’ll respond with a plan built around your volumes, specifications and schedule."
        image={IMG.city}
      />

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x grid gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          <Reveal>
            <p className="eyebrow text-gold">Visit</p>
            <address className="mt-6 flex flex-col font-serif text-2xl not-italic leading-snug text-ink md:text-3xl">
              {CONTACT.address.map((l) => <span key={l}>{l}</span>)}
            </address>
            <div className="gold-rule mt-12 h-px w-40" />
            <p className="eyebrow mt-12 text-gold">Call</p>
            <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`} className="mt-4 block text-2xl font-light text-ink hover:text-gold">{CONTACT.phone}</a>
            <p className="eyebrow mt-10 text-gold">Write</p>
            <a href={`mailto:${CONTACT.email}`} className="mt-4 block text-2xl font-light text-ink hover:text-gold">{CONTACT.email}</a>
            <p className="eyebrow mt-10 text-gold">Online</p>
            <p className="mt-4 text-2xl font-light text-ink">{CONTACT.web}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow text-gold">Send an enquiry</p>
            <h2 className="mb-12 mt-6 font-serif text-4xl text-ink md:text-5xl">How can we help?</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
