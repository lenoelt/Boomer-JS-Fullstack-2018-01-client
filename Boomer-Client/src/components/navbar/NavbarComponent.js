import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { Navbar } from 'react-materialize';
import { connect } from 'react-redux';

import "./NavbarComponent.css";

const NavbarComponent = (props) => {
  const { auth } = props;
  const currentLinks = auth ? <SignedInLinks auth={auth} /> : <SignedOutLinks />

  return (
    <div className="navbar-fixed">
      <Navbar href="/" brand='Boomer' className="boomerLogo teal darken-4" right>
        {currentLinks}
      </Navbar>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.userData,
  }
}

export default connect(mapStateToProps)(NavbarComponent);