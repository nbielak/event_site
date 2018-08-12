import React from 'react';
import LookUpFormContainer from './look_up_form_container';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignInLanding extends React.Component {
  constructor(props) {
    super(props);
    this.form = this.form.bind(this);
  }

// redirect to route

  render() {
    return (
      <div>
        {this.form()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.session.lookUp.email,
    found: state.session.lookUp.found
  }
};

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, null)(SignInLanding);
