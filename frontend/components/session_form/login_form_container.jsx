import React from 'react';
import LoginForm from './login_form';
import { login, receiveFound } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  email: state.session.lookUp.email,
  found: state.session.lookUp.found,
  user: state.entities.users[state.session.currentUser],
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  resetFound: (email) => dispatch(receiveFound({email, found: null}))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
