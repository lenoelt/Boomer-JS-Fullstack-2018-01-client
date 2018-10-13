import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authenticationActions';

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  }

  render() {
    
    const { authError } = this.props;

    return (
      <div className="container ">
        <div className="row">
          <div className="col s12 m8 offset-m2 l6 offset-l3">
            <form onSubmit={this.handleSubmit} className="z-depth-5 transparentBG">
              <h5 className="white-text center">Sign In</h5>

              <div className="input-field grey-text text-lighten-4">
                <label htmlFor="email" className="cyan-text text-lighten-1">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>

              <div className="input-field grey-text text-lighten-4">
                <label htmlFor="password" className="cyan-text text-lighten-1">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
              </div>

              <div className="input-field">
                <button className="btn pink lignten-1 z-depth-4">Login</button>
              </div>

              <div className="red-text text-accent-4">
                {authError ? <p>{authError}</p> : null}
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
