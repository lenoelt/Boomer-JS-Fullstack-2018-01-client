import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { Navbar } from 'react-materialize';
import { connect } from 'react-redux';

import "../../assets/css/NavbarComponent.css";

const NavbarComponent = (props) => {
  const { auth, profile } = props;
  const currentLinks = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  
  return (
    <div className="navbar-fixed">
      <Navbar href="/" brand='Boomer' className="boomerLogo teal darken-4" right>
        {currentLinks}
      </Navbar>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("STATE", state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavbarComponent);