export function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 75% 55% at 50% -5%,  rgba(245,158,11,0.20) 0%, transparent 65%),
            radial-gradient(ellipse 45% 35% at 85% 65%,  rgba(245,158,11,0.10) 0%, transparent 55%),
            radial-gradient(ellipse 40% 30% at 15% 75%,  rgba(245,158,11,0.07) 0%, transparent 50%)
          `,
          animation: 'niya-glow-pulse 8s ease-in-out infinite alternate',
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23fff'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
      />

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(28,25,23,0.6))' }}
      />
    </>
  );
}
