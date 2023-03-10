import React from 'react';
import SynchronousProcess01 from './01-synchronous-process';
import SynchronousProcess02 from './02-synchronous-process';
import SetTimeoutExample03 from './03-setTimeout-example';
import CallbackChallange04 from './04-callback-challange';
import UserWeatherSync05 from './05-user-weather-sync';
import UserWeatherAsync06 from './06-user-weather-asnyc';
import UserWeatherPromise07 from './07-user-weather-promise';
import PromiseSample08 from './08-promise-sample';
import FSReadFilePromisify09 from './09-fs-readfile-promisify';
import ChainingPromise10 from './10-chaining-promise';
import AsyncAwaitSample11 from './11-async-await-sample';
import WeakMap12 from './12-weakmap';

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
  {
    path: '/a256/04-callback-challange',
    element: <CallbackChallange04 />,
  },
  {
    path: '/a256/05-user-weather-sync',
    element: <UserWeatherSync05 />,
  },
  {
    path: '/a256/06-user-weather-async',
    element: <UserWeatherAsync06 />,
  },
  {
    path: '/a256/07-user-weather-promise',
    element: <UserWeatherPromise07 />,
  },
  {
    path: '/a256/08-promise-sample',
    element: <PromiseSample08 />,
  },
  {
    path: '/a256/09-fs-readfile-promisify',
    element: <FSReadFilePromisify09 />,
  },
  {
    path: '/a256/10-chaining-promise',
    element: <ChainingPromise10 />,
  },
  {
    path: '/a256/11-async-await-sample',
    element: <AsyncAwaitSample11 />,
  },
  {
    path: '/a256/12-weakmap',
    element: <WeakMap12 />,
  },
];

export { a256Routes };
