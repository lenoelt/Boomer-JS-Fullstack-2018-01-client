import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authenticationActions';
import { RegisterComponent } from '../../components/authentication/Register';

class Register extends Component {
  state = {
    pseudo: '',
    password: '',
    password_confirmation: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { registerError, hasRegistered, auth } = this.props;
    console.log('props : ', this.props);

    if (hasRegistered && !auth) return <Redirect to="/login" />;

    if (auth) return <Redirect to="/" />;

    return (
      <RegisterComponent
        hSubmit={this.handleSubmit}
        hChange={this.handleChange}
        rError={registerError ? <p>{registerError}</p> : null}
      />
    );
  }
}

const mapStateToProps = state => {
  state.auth.authError = null;
  console.log('registerError : ', state.auth.registerError);
  console.log('hasRegistered : ', state.auth.hasRegistered);
  return {
    registerError: state.auth.registerError,
    hasRegistered: state.auth.hasRegistered,
    auth: state.auth.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: credentials => dispatch(signUp(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
