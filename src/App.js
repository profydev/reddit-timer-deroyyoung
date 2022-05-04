import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Header from './Components/Header/Header';
import Search from './pages/SearchPage.js/Search';
import Main from './Components/Main/Main';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
