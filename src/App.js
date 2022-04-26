import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './Components/styles/globalStyles';
import Header from './Components/Header';
import Search from './Components/Search';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
