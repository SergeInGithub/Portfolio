import React from 'react';
import ProjectsCard from '../components/ProjectsCard';

export function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-14">Projects</h1>
      <div className="flex ml-5">
        <ProjectsCard />
      </div>
    </div>
  );
}
