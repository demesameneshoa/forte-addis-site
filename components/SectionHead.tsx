import Reveal, { RuleReveal } from './Reveal';

type Props = { eyebrow: string; title: string; intro?: string; dark?: boolean; align?: 'left' | 'split' };

export default function SectionHead({ eyebrow, title, intro, dark = false, align = 'left' }: Props) {
  const eb = dark ? 'text-gold-mid' : 'text-gold';
  const tt = dark ? 'text-paper' : 'text-ink';
  const it = dark ? 'text-paper/70' : 'text-body';

  if (align === 'split') {
    return (
      <div>
        <div className="grid items-end gap-10 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className={`eyebrow ${eb}`}>{eyebrow}</p>
            <h2 className={`mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.015em] md:text-6xl ${tt}`}>{title}</h2>
          </Reveal>
          {intro && (
            <Reveal delay={0.15}>
              <p className={`text-lg font-light leading-relaxed md:text-right ${it}`}>{intro}</p>
            </Reveal>
          )}
        </div>
        <RuleReveal dark={dark} className="mt-10" />
      </div>
    );
  }

  return (
    <div>
      <Reveal>
        <p className={`eyebrow ${eb}`}>{eyebrow}</p>
        <h2 className={`mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.015em] md:text-6xl ${tt}`}>{title}</h2>
      </Reveal>
      <RuleReveal dark={dark} className="mt-9 max-w-xs" />
      {intro && (
        <Reveal delay={0.1}>
          <p className={`mt-9 max-w-3xl text-lg font-light leading-relaxed ${it}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
