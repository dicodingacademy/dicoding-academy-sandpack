import React from 'react';
import FlashcardDemo from './flashcard-demo';
import DragAndOrderDemo from './drag-and-order-demo';
import FillInTheBlankDemo from './fill-in-the-blank-demo';

const a134Routes = [
  {
    path: '/a134/flashcard-demo',
    element: <FlashcardDemo />,
  },
  {
    path: '/a134/drag-and-order-demo',
    element: <DragAndOrderDemo />,
  },
  {
    path: '/a134/fill-in-the-blank-demo',
    element: <FillInTheBlankDemo />,
  },
];

export { a134Routes };
