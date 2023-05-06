import React from 'react';

export function AboutCard() {
  return (
    <div className="max-w-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold">About</h3>
      </div>
      <div className="grid gap-4 ml-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          interdum, sem non rhoncus porta, ex purus posuere urna, et commodo
          ante odio a enim.{' '}
        </p>
        <p>
          Maecenas aliquam consectetur massa id placerat. In massa sapien,
          consectetur sit amet lectus id, malesuada scelerisque sem.
        </p>
      </div>
    </div>
  );
}
