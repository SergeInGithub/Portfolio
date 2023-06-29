import React from 'react';
import { SkillsCard } from '../components';

export function Skills() {
  return (
    <div className="grid grid-cols-2">
      <SkillsCard />
      <div>.</div>
    </div>
  );
}
