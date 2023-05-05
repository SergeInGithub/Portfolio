import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  LinkProps,
  NavLink,
  NavLinkProps,
} from 'react-router-dom';
import { BrowserRouterFacadeProps, RouterFacadeProps } from '../../utils/types';
import { NotFound } from '../../pages';

export function AppRouter({ routes }: RouterFacadeProps) {
  const routeConfigs = routes.filter((route) => route.element !== null);

  return (
    <Routes>
      {routeConfigs.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function LinkFacade({ to, children }: LinkProps) {
  return <Link to={to}>{children}</Link>;
}

export function NavLinkFacade({ to, className, children }: NavLinkProps) {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
}

export function BrowserRouterFacade({ children }: BrowserRouterFacadeProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
