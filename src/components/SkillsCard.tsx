import React from 'react';

export function SkillsCard() {
  return (
    <div className="max-w-lg border border-black">
      <h3 className="text-2xl font-bold">Skills</h3>
      <div>
        <p className="ml-2">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          Aliquam interdum, sem non <br /> rhoncus porta, ex purus posuere urna,
          et <br />
          commodo ante odio a enim. <br /> Hover below to see in detail
        </p>
        <div className="grid grid-cols-2 gap-4 my-7 place-items-center">
          <div className="grid grid-cols-1">
            <button type="button">BACKEND</button>
            <hr className="border-accentLight w-36" />
          </div>
          <div className="grid grid-cols-1">
            <button type="button">FRONTEND</button>
            <hr className="border-accentLight w-36" />
          </div>
          <div className="grid grid-cols-1">
            <button type="button">MOBILE APPLICATION</button>
            <hr className="w-40 border-accentLight" />
          </div>
          <div className="grid grid-cols-1">
            <button type="button">WEB APPLICATION</button>
            <hr className="border-accentLight w-36" />
          </div>
        </div>
      </div>
    </div>
  );
}
