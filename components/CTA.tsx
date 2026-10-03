import Link from 'next/link';
import Duotone from './Duotone';
import Reveal from './Reveal';
import { IMG } from '@/lib/content';

type Props = { title?: string; text?: string; href?: string; label?: string };

export default function CTA({
  title = 'Let’s organize your supply.',
  text = 'Tell us what your operation needs — volume, specification, schedule — and we’ll design the supply around it.',
  href = '/contact',
  label = 'Start a conversation',
}: Props) {
  return (
    <section className="relative overflow-hidden bg-night text-paper">
      <Duotone src={IMG.city} className="absolute inset-0" shade="side" reveal={false} />
      <div className="container-x relative py-32 md:py-44">
        <Reveal>
          <p className="eyebrow text-gold-mid">Partner with FORTE</p>
          <h2 className="mt-7 max-w-4xl font-serif text-5xl leading-[1.04] tracking-[-0.015em] md:text-7xl">{title}</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-paper/75">{text}</p>
          <div className="mt-12">
            <Link href={href} className="btn-gold">
              {label} <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
