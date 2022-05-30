import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import footerLogo from '../../Assets/images/sign.svg';

export default function Footer() {
  const Container = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 140px 250px;
  `;

  const StyledLink = styled.a`
    color: #636363;
    font: 0.875rem ${({ theme }) => theme.primaryFont};
    text-decoration: none;
  `;

  const StyledImage = styled.img`
      margin-left: 46px;
      margin-Top: -8px;
  `;

  return (
    <footer>
      <Container>
        <li>
          <StyledLink href="https://ooloo.io/employers" target="_blank" rel="noreferrer">
            profy.dev
          </StyledLink>
        </li>
        <li>
          <Link to="/">
            <StyledImage src={footerLogo} alt="logo" />
          </Link>
        </li>
        <li>
          <StyledLink as={Link} to="/terms">Terms & Privacy</StyledLink>
        </li>
      </Container>
    </footer>
  );
}
