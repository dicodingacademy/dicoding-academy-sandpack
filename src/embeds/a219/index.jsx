import React from 'react';
import { a219AutomationTest05Routes } from './05-automation-test/index';
import { a219Accessibility02Routes } from './02-accessibility/index';
import { a219ProyekPertama03Routes } from './03-proyek-pertama';
import { a219ProyekKedua06Routes } from './06-proyek-kedua/index';
import { a219ProyekAkhir10Routes } from './10-proyek-akhir/index';
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
  ...a219ProyekPertama03Routes,
  ...a219ProyekKedua06Routes,
  ...a219ProyekAkhir10Routes,
];

export { a219Routes };
