import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(Nav.Link)`
  &&& {
    color: ${({ theme }) => theme.lightBlack};
    font: 1rem ${({ theme }) => theme.primaryFont};
    font-weight: 400;
    padding-left: 18px;
    text-decoration: none;
  }
`;

export default function Navigation() {
  return (
    <Nav style={{ marginLeft: '5px' }}>
      <StyledNavLink as={Link} to="/search/javascript">Search</StyledNavLink>
      <StyledNavLink as={Link} to="#how-it-works">How it works</StyledNavLink>
      <StyledNavLink as={Link} to="#about">About</StyledNavLink>
    </Nav>
  );
}
