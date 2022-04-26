import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './Components/styles/globalStyles';
import Header from './Components/Header';
import Search from './Components/Search';
import Main from './Components/Main';

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
