import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../store/actions/authenticationActions';
import { LoginComponent } from '../../components/authentication/Login';

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
    
    const { authError, auth } = this.props;

    if (auth.uid)
      return <Redirect to="/" />

    return (
      <LoginComponent hSubmit={this.handleSubmit} hChange={this.handleChange} aError={authError ? <p>{authError}</p> : null}/>
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