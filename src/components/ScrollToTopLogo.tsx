'use client';

import { Logo } from '@/components/Logo';

export function ScrollToTopLogo() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="justify-self-start"
    >
      <Logo className="text-brand-purple ~h-12/20" />
    </button>
  );
}
