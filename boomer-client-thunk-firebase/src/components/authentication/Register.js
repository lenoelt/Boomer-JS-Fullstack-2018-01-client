import React, { Component } from 'react';

export const RegisterComponent = props =>
      <div className="container ">
        <div className="row">
          <div className="col s12 m8 offset-m2 l6 offset-l3">
            <form onSubmit={props.hSubmit} className="z-depth-5 transparentBG">
              <h5 className="white-text center">Sign Up</h5>

              {/* <div className="input-field grey-text text-lighten-4">
                <label htmlFor="firstName" className="cyan-text text-lighten-1" >First Name</label>
                <input type="text" id="firstName" onChange={this.handleChange} />
              </div>

              <div className="input-field grey-text text-lighten-4">
                <label htmlFor="lastName" className="cyan-text text-lighten-1">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange} />
              </div> */}

              <div className="input-field grey-text text-lighten-4">
                <label htmlFor="email" className="cyan-text text-lighten-1">Email</label>
                <input type="email" id="email" onChange={props.hChange} />
              </div>

              <div className="input-field grey-text text-lighten-4">
                <label htmlFor="password" className="cyan-text text-lighten-1">Password</label>
                <input type="password" id="password" onChange={props.hChange} />
              </div>

              <div className="input-field">
                <button className="btn pink lignten-1 z-depth-4">Register</button>
              </div>

              <div className="red-text text-accent-4">
                {props.rError}
              </div>

            </form>
          </div>
        </div>
      </div>
