import React from 'react';
import { AboutCard } from '../components';
import { ThemeToggle } from '../components/ThemeToggle';

export function Home() {
  return (
    <div className="relative w-10 bg-white dark:bg-dark">
      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </div>
  );
}
