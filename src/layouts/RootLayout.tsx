import React from 'react';
import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="ml-10 pt-36">
        <Outlet />
      </main>
    </div>
  );
}
