import React from 'react';
import { LinkFacade } from '../lib';

export const NotFound = () => {
  return (
    <div>
      <h1 className="text-orange-400">404</h1>
      <p>Page not found</p>
      <p>This page doesn't exist</p>
      <p>
        Now try to navigate to the home page. You can now go{' '}
        <LinkFacade to="/">back</LinkFacade>
      </p>
    </div>
  );
};
