import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import Header from './Components/Header/Header';
import Search from './pages/SearchPage.js/Search';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

const theme = {
  primaryFont: 'Montserrat',
  secondaryFont: 'Bitter',
  lightBlack: '#93918F',
  medBlack: '#787878',
  black: '#000000',
  orange: '#FDB755',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
