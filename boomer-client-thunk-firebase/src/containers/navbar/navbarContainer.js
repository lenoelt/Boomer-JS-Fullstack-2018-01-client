import React from 'react';
import SignedInLinks from '../../components/navbar/SignedInLinks';
import SignedOutLinks from '../../components/navbar/SignedOutLinks';
import { Navbar } from 'react-materialize';
import { connect } from 'react-redux';

import "../../assets/css/NavbarComponent.css";

const NavbarComponent = (props) => {
  const { auth } = props;
  const currentLinks = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
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
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(NavbarComponent);