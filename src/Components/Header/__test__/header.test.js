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

  it('Search link directs to search page with javascript as default', () => {
    render(<MockHeader />);

    const searchLink = screen.getByRole('link', { name: /search/i });

    userEvent.click(searchLink);
  });

  it('About link', () => {
    render(<MockHeader />);

    const aboutLink = screen.getByRole('link', { name: /about/i });

    expect(aboutLink);
    screen.debug();
  });

  it('How it works link', () => {
    render(<MockHeader />);

    const howItWorksLink = screen.getByRole('link', { name: /how it works/i });

    expect(howItWorksLink);
    screen.debug();
  });
});
