import React from 'react';
import { Home } from '../pages';

type routeConfigs = {
  path: string;
  name: string;
  element: React.ReactElement;
};

export const routes: routeConfigs[] = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
  },
];
