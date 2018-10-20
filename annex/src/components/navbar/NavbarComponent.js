import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { Navbar } from 'react-materialize';

import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <div className="navbar-fixed">
      <Navbar href="/" brand='Boomer' className="boomerLogo teal darken-4" right>
        <SignedInLinks />
        <SignedOutLinks />
      </Navbar>
    </div>
  )
}

export default NavbarComponent;