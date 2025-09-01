import React from 'react';
import DisplaySampleData01 from './01-display-sample-data';
import DisplaySampleDataUsingInnerHTML02 from './02-display-sample-data-using-innerHTML';
import RegisterAfterCustomElementDefinitionComplete03 from './03-register-after-custom-element-definition-complete';
import CorrectRealtimeValidation04 from './04-correct-realtime-validation';
import IncorrectRealtimeValidation05 from './05-incorrect-realtime-validation';

export const a163ProyekPertama04Routes = [
  {
    path: '/a163/04-proyek-pertama/01-display-sample-data',
    element: <DisplaySampleData01 />,
  },
  {
    path: '/a163/04-proyek-pertama/02-display-sample-data-using-innerHTML',
    element: <DisplaySampleDataUsingInnerHTML02 />,
  },
  {
    path: '/a163/04-proyek-pertama/03-register-after-custom-element-definition-complete',
    element: <RegisterAfterCustomElementDefinitionComplete03 />,
  },
  {
    path: '/a163/04-proyek-pertama/04-correct-realtime-validation',
    element: <CorrectRealtimeValidation04 />,
  },
  {
    path: '/a163/04-proyek-pertama/05-incorrect-realtime-validation',
    element: <IncorrectRealtimeValidation05 />,
  },
];
