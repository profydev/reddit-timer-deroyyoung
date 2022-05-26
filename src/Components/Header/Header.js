import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header>
      <Navbar style={{ marginTop: '18px' }}>
        <Container>
          <Navbar.Brand>
            <HeaderLogo />
          </Navbar.Brand>
          <Navigation />
        </Container>
      </Navbar>
    </header>
  );
}
