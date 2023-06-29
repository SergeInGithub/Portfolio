import React from 'react';
import { AboutCard } from '../components';
import { ThemeToggle } from '../components/ThemeToggle';

export function About() {
  return (
    <div className="grid grid-cols-2">
      <div>.</div>
      <AboutCard />
    </div>
  );
}
