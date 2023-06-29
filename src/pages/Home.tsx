import React from 'react';
import ProjectsCard from '../components/ProjectsCard';
import { ThemeToggle } from '../components/ThemeToggle';

export function Home() {
  return (
    <div>
      <ThemeToggle />
      <ProjectsCard />
    </div>
  );
}
