import React from 'react';
import { Provider } from 'react-redux';
import { router } from './routes';
import store from './store';
import { RouterProvider } from 'react-router-dom';

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
