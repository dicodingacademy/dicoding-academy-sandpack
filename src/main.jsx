import './styles/global.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* Front-end learning path */
import { a123Routes } from './embeds/a123';
import { a315Routes } from './embeds/a315';
import { a163Routes } from './embeds/a163';
import { a219WebIntermediateRoutes } from './embeds/a219-web-intermediate';
import { a565Routes } from './embeds/a565';
import { a219Routes } from './embeds/a219';

/* React learning path */
import { a403Routes } from './embeds/a403';
import { a418Routes } from './embeds/a418';

/* Back-end learning path */
import { a256Routes } from './embeds/a256';
import { a610Routes } from './embeds/a610';

import HomePage from './pages/HomePage';
import { a134Routes } from './embeds/a134-demo/index';
import FlashcardsCreationPage from './pages/activities/flashcard/CreationPage';
import DragAndOrderCreationPage from './pages/activities/drag-and-order/CreationPage';
import FillInBlankCreationPage from './pages/activities/fill-in-the-blank/CreationPage';
import DragAndOrderPage from './pages/activities/drag-and-order/DragAndOrderPage';
import FillInTheBlankPage from './pages/activities/fill-in-the-blank/FillInTheBlankPage';
import FlashcardPage from './pages/activities/flashcard/FlashcardPage';

const root = createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/activities/flashcard/create',
    element: <FlashcardsCreationPage />,
  },
  {
    path: '/activities/flashcard',
    element: <FlashcardPage />,
  },
  {
    path: '/activities/drag-and-order/create',
    element: <DragAndOrderCreationPage />,
  },
  {
    path: '/activities/drag-and-order',
    element: <DragAndOrderPage />,
  },
  {
    path: '/activities/fill-in-the-blank/create',
    element: <FillInBlankCreationPage />,
  },
  {
    path: '/activities/fill-in-the-blank',
    element: <FillInTheBlankPage />,
  },

  /* Front-end learning path */
  ...a123Routes,
  ...a315Routes,
  ...a163Routes,
  ...a219WebIntermediateRoutes,
  ...a565Routes,
  ...a219Routes,

  /* React learning path */
  ...a403Routes,
  ...a418Routes,

  /* Back-end learning path */
  ...a256Routes,
  ...a610Routes,

  /* Demo */
  ...a134Routes,
]);

root.render(
  <RouterProvider router={appRouter} />,
);
