import React from 'react';
import LitDeclarativeEventSample01 from './01-lit-declarative-event-sample';
import LitTemplateSample02 from './02-lit-template-sample';
import LitRenderLitComponent03 from './03-render-lit-component';
import LitReactivePropertiesSample04 from './04-reactive-properties-sample';

const a565Routes = [
  {
    path: '/a565/01-lit-declarative-event-sample',
    element: <LitDeclarativeEventSample01 />,
  },
  {
    path: '/a565/02-lit-template-sample',
    element: <LitTemplateSample02 />,
  },
  {
    path: '/a565/03-render-lit-component',
    element: <LitRenderLitComponent03 />,
  },
  {
    path: '/a565/04-reactive-properties-sample',
    element: <LitReactivePropertiesSample04 />,
  },
];

export { a565Routes };
