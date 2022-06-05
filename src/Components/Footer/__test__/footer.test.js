import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../../../App';
import '@testing-library/jest-dom';

const setup = (initialPath = '/') => {
  let history;
  let location;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Routes
        path="*"
        render={(props) => {
          history = props.history;
          location = props.location;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history, location };
};

describe('Footer', () => {
  it('Clicking logo redirects to homepage', () => {
    setup('/search/javascript');

    const footerLogo = screen.getByRole('img', { name: /magnifying glass/i });
    userEvent.click(footerLogo);
    expect(screen.getByRole('heading', { name: /home/i }));
  });

  it('Clicking terms and privacy links directs to terms page', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const termsLinks = screen.getByRole('link', { name: /terms/i });
    userEvent.click(termsLinks);

    expect(history.location.pathname).toEqual('/terms');
  });

  it('profy.dev link has the correct value', () => {
    setup();
    const profyLink = screen.getByRole('link', { name: /profy/i });

    expect(profyLink).toHaveAttribute('href', 'https://ooloo.io/employers');
  });
});
