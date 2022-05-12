import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledNavLink = styled(Nav.Link)`
  &&& {
    color: ${({ theme }) => theme.lightBlack};
    font: 1rem ${({ theme }) => theme.primaryFont};
    font-weight: 400;
    padding-left: 18px;
  }
`;

export default function Navigation() {
  return (
    <Nav style={{ marginLeft: '5px' }}>
      <StyledLink to="/search">
        <StyledNavLink>Search</StyledNavLink>
      </StyledLink>
      <StyledLink to="#how-it-works">
        <StyledNavLink>How it works</StyledNavLink>
      </StyledLink>
      <StyledLink to="#about">
        <StyledNavLink>About</StyledNavLink>
      </StyledLink>
    </Nav>
  );
}
