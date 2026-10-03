import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center bg-night text-paper">
      <div className="container-x">
        <p className="eyebrow text-gold-mid">404</p>
        <h1 className="mt-6 font-serif text-6xl md:text-8xl">This page is off the route.</h1>
        <div className="gold-rule-dark mt-10 h-px max-w-md" />
        <Link href="/" className="btn-gold mt-12">Return home <span aria-hidden>→</span></Link>
      </div>
    </section>
  );
}
