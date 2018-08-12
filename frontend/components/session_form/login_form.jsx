import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    if (`${this.props.email}` === "demo@demo.com") {
      this.setState({email: this.props.email, password: "123456"});
    }
  }

  update_password() {
    return e => {
      this.setState({email: this.props.email, password: e.target.value})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => this.props.history.push('/'));
  }

  handleClick(e) {
    e.preventDefault();
    this.props.resetFound(this.props.email);
    this.props.history.push('/signin');
  }

  handleDemo() {
    if (`${this.props.email}` === "demo@demo.com") {
      return (<input className="look-up-form-input" value="123456" type="password" onChange={this.update_password()} />);
    } else {
      return (<input className="look-up-form-input" type="password" onChange={this.update_password()} />);
    }
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
              <h1>Welcome Back</h1>
            </div>
            <div className="look-up-subheader-container">
              <p>Please enter your password to log in.</p>
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
                <div className="look-up-form-input-label-container">
                  <label className="look-up-form-label">Password</label>
                </div>
                <div className="look-up-form-input-container">
                    {this.handleDemo()}
                </div>
              </div>

              <div className="look-up-form-button-container">
                <input className="look-up-form-button" type="submit" value="Log In" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(LoginForm);
