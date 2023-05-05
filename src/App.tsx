import React from 'react';
import { AppRouter, BrowserRouterFacade } from './lib';
import { routes } from './routes';

export function App() {
  return (
    <BrowserRouterFacade>
      <AppRouter routes={routes} />
    </BrowserRouterFacade>
  );
}

export default App;
