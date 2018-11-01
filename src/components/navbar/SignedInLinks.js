import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authenticationActions';

const SignedInLinks = props => {
  const { auth } = props;

  return (
    <ul className="right">
      <li>
        <NavLink to="/" className="navbarLinksColor">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className="navbarLinksColor" onClick={props.signOut}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className="navbarPseudoColor">
          {auth.data.pseudo}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
