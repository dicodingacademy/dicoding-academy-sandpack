import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CompositionSample01 from './embeds/a403/01-composition-sample';
import HomePage from './pages/HomePage';
import DeclarativeSample02 from './embeds/a403/02-declarative-sample';
import ReactCreateElementSample03 from './embeds/a403/03-react-create-element-sample';
import JSXSample04 from './embeds/a403/04-jsx-sample';
import SynchronousProcess01 from './embeds/a256/01-synchronous-process';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a403/01-composition-sample" element={<CompositionSample01 />} />
      <Route path="/a403/02-declarative-sample" element={<DeclarativeSample02 />} />
      <Route path="/a403/03-react-create-element-sample" element={<ReactCreateElementSample03 />} />
      <Route path="/a403/04-jsx-sample" element={<JSXSample04 />} />
      <Route path="/a256/01-synchronous-process" element={<SynchronousProcess01 />} />
    </Routes>
  );
}

export default App;
