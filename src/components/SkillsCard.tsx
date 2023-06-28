import React from 'react';

export function SkillsCard() {
  return (
    <div className="dark:text-darkWhite">
      <div className="mb-8">
        <h3 className="text-3xl font-bold">Skills</h3>
      </div>
      <div>
        <p className="max-w-lg ml-2 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          interdum, sem non rhoncus porta, ex purus posuere urna, et commodo
          ante odio a enim. Hover below to see in detail
        </p>
        <div className="grid grid-cols-2 gap-4 my-12 text-lg gap-y-10 place-items-center">
          <div className="grid grid-cols-1">
            <button type="button">BACKEND</button>
            <hr className="border-accentLight w-36" />
          </div>
          <div className="grid grid-cols-1">
            <button type="button">FRONTEND</button>
            <hr className="border-accentLight w-36" />
          </div>
          <div className="grid grid-cols-1">
            <button type="button">MOBILE DEVELOPMENT</button>
            <hr className="w-56 border-accentLight" />
          </div>
          <div className="grid grid-cols-1">
            <button type="button">WEB DEVELOPMENT</button>
            <hr className="w-48 border-accentLight" />
          </div>
        </div>
      </div>
    </div>
  );
}
