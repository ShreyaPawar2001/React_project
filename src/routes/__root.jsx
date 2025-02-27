import React from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import App from '../App';

export const Route = createRootRoute({
  component: () => (
    <App>
      <Outlet />
    </App>
  ),
});