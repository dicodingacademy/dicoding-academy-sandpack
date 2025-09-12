import React from 'react';
import JoiValidateUser01 from './01-joi-validate-user';
import JoiValidateUserFunctionComponent02 from './02-joi-validate-user-function-component';
import JoiValidateUserClassComponent03 from './03-joi-validate-user-class-component';

const a413Routes = [
  {
    path: '/a413/01-joi-validate-user',
    element: <JoiValidateUser01 />,
  },
  {
    path: '/a413/02-joi-validate-user-function-component',
    element: <JoiValidateUserFunctionComponent02 />,
  },
  {
    path: '/a413/03-joi-validate-user-class-component',
    element: <JoiValidateUserClassComponent03 />,
  },
];

export { a413Routes };
