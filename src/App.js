import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Header from './Components/Header/Header';
import Search from './pages/SearchPage.js/Search';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
