import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../store/actions/authenticationActions';
import { LoginComponent } from '../../components/authentication/Login';
import { API_URL } from '../../environment';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;

    if (auth) return <Redirect to="/" />;

    return (
      <LoginComponent
        hSubmit={this.handleSubmit}
        hChange={this.handleChange}
        aError={authError ? <p>{authError}</p> : null}
      />
    );
  }
}

const mapStateToProps = state => {
  state.auth.registerError = null;
  return {
    authError: state.auth.authError,
    auth: state.auth.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
