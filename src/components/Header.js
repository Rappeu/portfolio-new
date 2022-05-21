import React from 'react';
import logo from '../images/logo.png';

export default function Header() {
  return (
      <header className="header">
        <img className="header--logo" src={logo} alt="Raphael Peuckert" />
      </header>
    )
}