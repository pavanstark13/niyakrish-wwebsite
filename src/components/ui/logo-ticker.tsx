'use client';

const CLIENTS = [
  { name: 'L&T', full: 'Larsen & Toubro' },
  { name: 'HAL', full: 'Hindustan Aeronautics' },
  { name: 'KNR Construction', full: 'KNR Construction Ltd.' },
  { name: 'Karnataka Infratech', full: 'Karnataka Infratech' },
  { name: 'Yankee Construction', full: 'Yankee Construction LLP' },
  { name: 'CMK Projects', full: 'CMK Projects' },
  { name: 'KGN Electricals', full: 'KGN Electricals' },
  { name: 'BHR Construction', full: 'BHR Construction' },
  { name: 'Samanavi', full: 'Samanavi' },
];

function TickerItem({ name, full }: { name: string; full: string }) {
  return (
    <span
      className="inline-flex items-center gap-3 px-2"
      aria-label={full}
      title={full}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
      <span className="text-stone-500 font-semibold text-sm uppercase tracking-widest whitespace-nowrap">
        {name}
      </span>
    </span>
  );
}

export function LogoTicker() {
  const tripled = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="overflow-hidden py-10 border-y border-stone-200 bg-stone-50">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-stone-400 mb-7">
        Trusted by India&apos;s Leading Builders &amp; Contractors
      </p>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgb(250,250,249), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgb(250,250,249), transparent)' }}
        />

        <div
          className="flex gap-12 animate-ticker"
          style={{ width: 'max-content' }}
          aria-hidden
        >
          {tripled.map((client, i) => (
            <TickerItem key={i} name={client.name} full={client.full} />
          ))}
        </div>
      </div>

      <div className="text-center mt-7">
        <a href="/projects" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-600 hover:text-amber-700 transition-colors">
          View All Projects &amp; Clients →
        </a>
      </div>
    </section>
  );
}
