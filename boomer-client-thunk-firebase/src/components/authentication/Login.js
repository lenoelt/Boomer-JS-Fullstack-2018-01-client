import React, { Component } from 'react';

export const LoginComponent = props =>
	<div className="container ">
		<div className="row">
			<div className="col s12 m8 offset-m2 l6 offset-l3">
			   <form onSubmit={props.hSubmit} className="z-depth-5 transparentBG">
				  <h5 className="white-text center">Sign In</h5>

				  <div className="input-field grey-text text-lighten-4">
					<label htmlFor="email" className="cyan-text text-lighten-1">Email</label>
					<input type="email" id="email" onChange={props.hChange} />
				  </div>

				  <div className="input-field grey-text text-lighten-4">
					<label htmlFor="password" className="cyan-text text-lighten-1">Password</label>
					<input type="password" id="password" onChange={props.hChange} />
				  </div>

				  <div className="input-field">
					<button className="btn pink lignten-1 z-depth-4">Login</button>
				  </div>

				  <div className="red-text text-accent-4">
					{props.aError}
				  </div>

				</form>
			</div>
		</div>
	</div>
