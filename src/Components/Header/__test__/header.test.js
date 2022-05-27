import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';

const MockHeader = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

describe('Header', () => {
  it('Logo directs to homepage', () => {
    render(<MockHeader />);

    const homeLink = screen.getByAltText('logo');
    userEvent.click(homeLink);
    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
  });

  it()
});
