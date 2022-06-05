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

describe('Header', () => {
  it('Clicking logo redirects to home page', () => {
    setup('/search/javascript');
    expect(
      screen.getByRole('link', { name: /search/i }),
    ).toBeInTheDocument();
    const logo = screen.getByRole('link', { name: /logo/i });
    userEvent.click(logo);
    const homePage = screen.getByRole('heading', { name: /home/i });
    expect(homePage).toBeInTheDocument();
  });

  it('Clicking search redirects to search page', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const searchLink = screen.getByRole('link', { name: /search/i });
    expect(searchLink).toBeInTheDocument();
    userEvent.click(searchLink);
    expect(history.location.pathname).toEqual('/search/javascript');
  });

  test.each`
    link              | hash
    ${'About'}        | ${'#about'}
    ${'How it works'} | ${'#how-it-works'}
  `('clicking $link directs to $link section on homepage', ({ link, hash }) => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );

    const sectionLink = screen.getByRole('link', { name: link });
    userEvent.click(sectionLink);

    expect(history.location.hash).toEqual(hash);
  });
});
