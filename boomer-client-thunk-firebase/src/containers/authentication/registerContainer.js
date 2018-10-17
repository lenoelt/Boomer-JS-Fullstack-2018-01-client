import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authenticationActions';
import { RegisterComponent } from '../../components/authentication/Register';

class Register extends Component {
  state = {
    email: "",
    password: "",
    // firstName: "",
    // lastName: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { registerError, auth } = this.props;

    if (auth.uid)
      return <Redirect to="/" />

    return (
      <RegisterComponent hSubmit={this.handleSubmit} hChange={this.handleChange} rError={registerError ? <p>{registerError}</p> : null} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    registerError: state.auth.registerError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credentials) => dispatch(signUp(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
