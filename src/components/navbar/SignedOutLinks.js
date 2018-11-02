import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink
          to="/login"
          className="navbarLinksColor animated zoomIn delay-0.2s"
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className="navbarLinksColor animated zoomIn delay-0.2s"
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
