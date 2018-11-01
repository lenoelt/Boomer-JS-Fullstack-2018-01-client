import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/login" className="navbarLinksColor">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="navbarLinksColor">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
