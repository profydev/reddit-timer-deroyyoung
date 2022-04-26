import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './Components/styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" />
        <Route path="search" />
      </Routes>
    </>
  );
}

export default App;
