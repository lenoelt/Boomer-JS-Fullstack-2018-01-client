import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authenticationActions';

const SignedInLinks = (props) => {
  const { auth } = props;
  const profile = auth.data.pseudo;

  return (
    <ul className="right">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="#" onClick={props.signOut}>Log Out</NavLink></li>
      <li><NavLink to="#" className="pink lighten-1">{profile}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);