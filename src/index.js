import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { a256Routes } from './embeds/a256';
import { a403Routes } from './embeds/a403';
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
]);

root.render(
  <RouterProvider router={appRouter} />,
);
