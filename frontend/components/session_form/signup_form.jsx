import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorList from './error_list';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({email: this.props.email})

  }

  update(field) {
    return e => {
        this.setState({[field]: e.target.value})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(() => this.props.history.push('/'));
  }

  handleClick(e) {
    e.preventDefault();
    this.props.resetFound(this.props.email);
    this.props.history.push('/signin');
  }

  render() {

    return (
      <div className="look-up-container">
        <div className="look-up-offset">
          <div className="look-up-header">
            <div className="look-up-logo">
              <span className="look-up-logo-circle">
                <p className="look-up-logo-e">E</p>
                <p className="look-up-logo-s">S</p>
              </span>
            </div>
            <div className="look-up-title-container">
              <h1>Welcome</h1>
            </div>
            <div className="look-up-subheader-container">
              <p>Create an account.</p>
            </div>
          </div>
          <div className="look-up-form">
            <div className="look-up-form-input-container">
              <label className="look-up-form-input-label">Email address
                <div className="email-wrapper">
                  <p className="static-email">{this.props.email}</p>
                  <div className="static-email-button">
                    <span className="static-email-button-icon-wrapper">
                      <button className="static-email-button-icon" onClick={this.handleClick}>
                        <i className="icon-image">
                          <svg className="icon-svg" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6 17l8-8 1 1-8 8-1-1zm-2-.3V20h3.3l9.8-9.8-3.3-3.3L4 16.7z"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.7 7.6c.3-.3.3-.9 0-1.3l-2.1-2.1c-.3-.3-.9-.3-1.3 0l-1.6 1.6L18 9.1l1.7-1.5z"></path>
                          </svg>
                        </i>
                      </button>
                    </span>
                  </div>
                </div>
              </label>

            </div>
            <form onSubmit={this.handleSubmit}>

              <div className="look-up-form-input-container">
                <div className="signup-form-name">
                  <div className="first-name-wrapper">
                    <div className="first-name-label-wrapper">
                      <label className="first-name-label">First Name</label>
                    </div>

                    <div className="first-name-input-wrapper">
                      <input className="first-name-input" type="text" onChange={this.update('first_name')}/>
                    </div>
                  </div>

                  <div className="first-name-wrapper">
                    <div className="first-name-label-wrapper">
                      <label className="first-name-label">Last Name</label>
                    </div>

                    <div className="first-name-input-wrapper">
                      <input className="first-name-input" type="text" onChange={this.update('last_name')}/>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="look-up-form-input-label-container">
                    <label className="look-up-form-label">Password</label>
                  </div>
                  <div className="look-up-form-input-container">
                      <input className="look-up-form-input" type="password" onChange={this.update('password')} />
                  </div>
                </div>

              </div>

              <div className="error-list-wrapper">
                <ErrorList errors={this.props.errors} />
              </div>

              <div className="look-up-form-button-container">
                <input className="look-up-form-button" type="submit" value="Sign up" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignupForm);
