import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/login">Logout</NavLink></li>
      <li><NavLink to="#" className="btn btn-floating  pink lighten-1">B</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;