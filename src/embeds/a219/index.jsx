import React from 'react';
import { a219AutomationTest05Routes } from './05-automation-test/index';
import { a219Accessibility02Routes } from './02-accessibility/index';
import ContohKasusStopPropagationEvents01 from './01-contoh-kasus-stopPropagation-events';
import Playground02 from './02-playground';

const a219Routes = [
  {
    path: '/a219/01-contoh-kasus-stopPropagation-events',
    element: <ContohKasusStopPropagationEvents01 />,
  },
  {
    path: '/a219/02-playground',
    element: <Playground02 />,
  },

  ...a219Accessibility02Routes,
  ...a219AutomationTest05Routes,
];

export { a219Routes };
