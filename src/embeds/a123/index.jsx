import React from 'react';
import MultipleInputElement01 from './01-multiple-input-element';
import SingleInputElement02 from './02-single-input-element';
import BadTextarea04 from './03-bad-textarea';

const a123Routes = [
  {
    path: '/a123/01-multiple-input-element',
    element: <MultipleInputElement01 />,
  },
  {
    path: '/a123/02-single-input-element',
    element: <SingleInputElement02 />,
  },
  {
    path: '/a123/03-bad-textarea',
    element: <BadTextarea04 />,
  },
];

export { a123Routes };
