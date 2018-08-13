import React from 'react';
import LookUpForm from './look_up_form';
import { lookUpUser } from '../../actions/session_actions';
import { connect } from 'react-redux';



const mapStateToProps = state => ({
  email: state.session.lookUp.email,
  found: state.session.lookUp.found,
  errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
  lookUpUser: email => dispatch(lookUpUser(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(LookUpForm);
