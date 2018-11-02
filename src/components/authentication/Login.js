import React from 'react';

export const LoginComponent = props => (
  <div className="container ">
    <div className="row">
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <form
          onSubmit={props.hSubmit}
          className="z-depth-5 loginForm animated zoomIn delay-0.2s"
        >
          <h5 className="white-text center ">Sign In</h5>
          <div className="input-field grey-text text-lighten-4 ">
            <label htmlFor="pseudo" className="goldText">
              Pseudo
            </label>
            <input type="text" id="pseudo" onChange={props.hChange} />
          </div>
          <div className="input-field white-text ">
            <label htmlFor="password" className="goldText">
              Password
            </label>
            <input type="password" id="password" onChange={props.hChange} />
          </div>
          <div className="center-align">
            <button className="waves-effect waves-default btn submitButton z-depth-4 animated zoomIn delay-0.2s">
              Login
            </button>
          </div>
          <div className="authErrorMessage animated zoomIn delay-1s">
            {props.aError}
          </div>
        </form>
      </div>
    </div>
  </div>
);
