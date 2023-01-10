import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CompositionSample01 from './embeds/a403/01-composition-sample';
import HomePage from './pages/HomePage';
import DeclarativeSample02 from './embeds/a403/02-declarative-sample';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a403/01-composition-sample" element={<CompositionSample01 />} />
      <Route path="/a403/02-declarative-sample" element={<DeclarativeSample02 />} />
    </Routes>
  );
}

export default App;
