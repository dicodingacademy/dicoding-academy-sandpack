import React from 'react';
import MultipleInputElement01 from './01-multiple-input-element';
import SingleInputElement02 from './02-single-input-element';
import BadTextarea03 from './03-bad-textarea';
import Textarea04 from './04-textarea';
import LabelSample05 from './05-label-sample';
import PlaceholderSample06 from './06-placeholder-sample';
import ListSample07 from './07-list-sample';

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
    element: <BadTextarea03 />,
  },
  {
    path: '/a123/04-textarea',
    element: <Textarea04 />,
  },
  {
    path: '/a123/05-label-sample',
    element: <LabelSample05 />,
  },
  {
    path: '/a123/06-placeholder-sample',
    element: <PlaceholderSample06 />,
  },
  {
    path: '/a123/07-list-sample',
    element: <ListSample07 />,
  },
];

export { a123Routes };
