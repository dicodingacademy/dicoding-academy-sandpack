import React from 'react';
import SynchronousProcess01 from './01-synchronous-process';
import SynchronousProcess02 from './02-synchronous-process';
import SetTimeoutExample03 from './03-setTimeout-example';

const a256Routes = [
  {
    path: '/a256/01-synchronous-process',
    element: <SynchronousProcess01 />,
  },
  {
    path: '/a256/02-synchronous-process',
    element: <SynchronousProcess02 />,
  },
  {
    path: '/a256/03-setTimeout-example',
    element: <SetTimeoutExample03 />,
  },
];

export { a256Routes };
