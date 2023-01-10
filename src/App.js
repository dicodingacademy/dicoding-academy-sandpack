import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CompositionSample01 from './embeds/a403/01-composition-sample';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a403/01-composition-sample" element={<CompositionSample01 />} />
    </Routes>
  );
}

export default App;
