import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ReactSandpack from './components/sandpacks/ReactSandpack';

import './styles/global.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <StrictMode>
      <ReactSandpack files={{}} />
    </StrictMode>
  </BrowserRouter>,
);
