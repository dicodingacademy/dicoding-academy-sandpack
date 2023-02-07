import React from 'react';
import SynchronousProcess01 from './01-synchronous-process';
import SynchronousProcess02 from './02-synchronous-process';

const a256Routes = [
  {
    path: '/a256/01-synchronous-process',
    element: <SynchronousProcess01 />,
  },
  {
    path: '/a256/02-synchronous-process',
    element: <SynchronousProcess02 />,
  },
];

export { a256Routes };
