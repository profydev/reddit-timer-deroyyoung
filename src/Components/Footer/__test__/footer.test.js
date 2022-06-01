import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';

const MockFooter = () => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);

describe('Footer', () => {
  it('footer page renders', () => {
    render(<MockFooter />);
    screen.debug();
  });
});
