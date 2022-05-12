import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <HeaderLogo />
          </Link>
        </Navbar.Brand>
        <Navigation />
      </Container>
    </Navbar>
  );
}
