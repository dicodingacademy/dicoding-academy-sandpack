import React from 'react';
import FlashcardsCreatorPage from './flashcards/FlashcardsCreatorPage';
import FlashcardsPage from './flashcards/FlashcardsPage';
import DragAndOrderCreationPage from './drag-and-orders/DragAndOrderCreationPage';
import DragAndOrderPage from './drag-and-orders/DragAndOrderPage';
import FillInBlankCreationPage from './fill-in-the-blanks/CreationPage';
import FillInTheBlankPage from './fill-in-the-blanks/FillInTheBlankPage';

export const activitiesRoutes = [
  {
    path: '/activities/flashcards',
    element: <FlashcardsPage />,
  },
  {
    path: '/activities/flashcards/create',
    element: <FlashcardsCreatorPage />,
  },
  {
    path: '/activities/drag-and-order',
    element: <DragAndOrderPage />,
  },
  {
    path: '/activities/drag-and-order/create',
    element: <DragAndOrderCreationPage />,
  },
  {
    path: '/activities/fill-in-the-blank',
    element: <FillInTheBlankPage />,
  },
  {
    path: '/activities/fill-in-the-blank/create',
    element: <FillInBlankCreationPage />,
  },
];
