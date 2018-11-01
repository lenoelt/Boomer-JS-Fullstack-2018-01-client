import React from 'react';

export const RegisterComponent = props => (
  <div className="container ">
    <div className="row">
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <form onSubmit={props.hSubmit} className="z-depth-5 transparentBG">
          <h5 className="white-text center">Sign Up</h5>

          <div className="input-field grey-text text-lighten-4">
            <label htmlFor="pseudo" className="cyan-text text-lighten-1">
              Pseudo
            </label>
            <input type="text" id="pseudo" onChange={props.hChange} />
          </div>

          <div className="input-field grey-text text-lighten-4">
            <label htmlFor="password" className="cyan-text text-lighten-1">
              Password
            </label>
            <input type="password" id="password" onChange={props.hChange} />
          </div>

          <div className="input-field grey-text text-lighten-4">
            <label
              htmlFor="password_confirmation"
              className="cyan-text text-lighten-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              onChange={props.hChange}
            />
          </div>

          <div className="input-field center-align">
            <button className="btn pink lignten-1 z-depth-4">Register</button>
          </div>

          <div className="red-text text-accent-4">{props.rError}</div>
        </form>
      </div>
    </div>
  </div>
);
