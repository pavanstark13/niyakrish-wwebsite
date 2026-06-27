'use client';

import { type ReactNode } from 'react';

interface CardLiftProps {
  children: ReactNode;
  className?: string;
  amberGlow?: boolean;
}

export function CardLift({ children, className = '', amberGlow = false }: CardLiftProps) {
  return (
    <div
      className={`group relative ${className}`}
      style={{
        transition: 'transform 280ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 280ms cubic-bezier(0.22, 1, 0.36, 1)',
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-6px)';
        el.style.boxShadow = amberGlow
          ? '0 20px 48px -8px rgba(0,0,0,0.12), 0 0 0 1px rgba(245,158,11,0.28)'
          : '0 20px 48px -8px rgba(0,0,0,0.12), 0 4px 16px -4px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = '';
        el.style.boxShadow = '';
      }}
    >
      {amberGlow && (
        <div
          aria-hidden
          className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 pointer-events-none rounded-tr-sm"
          style={{
            background: 'radial-gradient(circle at 100% 0%, rgba(245,158,11,0.14) 0%, transparent 65%)',
            transition: 'opacity 320ms ease',
          }}
        />
      )}
      {children}
    </div>
  );
}
