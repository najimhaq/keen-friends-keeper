'use client';

import { usePathname } from 'next/navigation';

export default function useActivePath() {
  const pathname = usePathname();

  const isActivePath = (path) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return isActivePath;
}
