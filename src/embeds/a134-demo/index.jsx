import React from 'react';
import FlashcardDemo from './flashcard-demo';
import DragAndOrderDemo from './drag-and-order-demo';
import FillInTheBlankDemo from './fill-in-the-blank-demo';

const a134Routes = [
  {
    path: '/a134/flashcards-demo',
    element: <FlashcardDemo />,
  },
  {
    path: '/a134/drag-and-orders-demo',
    element: <DragAndOrderDemo />,
  },
  {
    path: '/a134/fill-in-the-blanks-demo',
    element: <FillInTheBlankDemo />,
  },
];

export { a134Routes };
