import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/Logo.svg';

export default function HeaderLogo() {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </>
  );
}
