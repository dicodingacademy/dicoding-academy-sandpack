import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CompositionSample01 from './embeds/a403/01-composition-sample';

function App() {
  return (
    <Routes>
      <Route path="/a403/01-composition-sample" element={<CompositionSample01 />} />
    </Routes>
  );
}

export default App;
