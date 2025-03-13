import React from 'react';
import FlashcardsCreatorPage from './flashcards/FlashcardsCreatorPage';
import FlashcardsPage from './flashcards/FlashcardsPage';
import DragAndOrderCreationPage from './drag-and-orders/CreationPage';
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
    path: '/activities/drag-and-orders',
    element: <DragAndOrderPage />,
  },
  {
    path: '/activities/drag-and-orders/create',
    element: <DragAndOrderCreationPage />,
  },
  {
    path: '/activities/fill-in-the-blanks',
    element: <FillInTheBlankPage />,
  },
  {
    path: '/activities/fill-in-the-blanks/create',
    element: <FillInBlankCreationPage />,
  },
];
