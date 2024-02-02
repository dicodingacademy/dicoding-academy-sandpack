import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { a256Routes } from './embeds/a256';
import { a403Routes } from './embeds/a403';
import { a418Routes } from './embeds/a418';
import { a565Routes } from './embeds/a565';
import { a123Routes } from './embeds/a123';
import { a315Routes } from './embeds/a315';
import { a163Routes } from './embeds/a163';
import { a610Routes } from './embeds/a610';
import { a658Routes } from './embeds/a658';

import HomePage from './pages/HomePage';
import './styles/global.css';

const root = createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  ...a256Routes,
  ...a403Routes,
  ...a418Routes,
  ...a565Routes,
  ...a123Routes,
  ...a315Routes,
  ...a610Routes,
  ...a163Routes,
  ...a658Routes,
]);

root.render(
  <RouterProvider router={appRouter} />,
);
