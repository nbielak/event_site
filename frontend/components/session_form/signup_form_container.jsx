import React from 'react';
import SignupForm from './signup_form';
import { signup, receiveFound } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.currentUser],
  email: state.session.lookUp.email,
  found: state.session.lookUp.found,
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
  resetFound: (email) => dispatch(receiveFound({email, found: null}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
