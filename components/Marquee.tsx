export default function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className={`relative overflow-hidden border-y py-8 ${dark ? 'border-gold/25 bg-forest' : 'border-ink/10 bg-paper'}`}>
      <div className="flex w-max animate-marquee items-center gap-14 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-14">
            <span className={`font-serif text-3xl italic md:text-5xl ${dark ? 'text-paper' : 'text-ink'}`}>{t}</span>
            <span className="h-2 w-2 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
