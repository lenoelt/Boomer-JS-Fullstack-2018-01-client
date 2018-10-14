import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authenticationActions';
import { RegisterComponent } from '../../components/authentication/Register'

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
    const { registerError } = this.props;

    return (
		<RegisterComponent hSubmit={this.handleSubmit} hChange={this.handleChange} rError={registerError ? <p>{registerError}</p> : null}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    registerError: state.auth.registerError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credentials) => dispatch(signUp(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
