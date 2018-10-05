import React from 'react';
import {withRouter} from 'react-router-dom';
import LookUpFormContainer from './look_up_form_container';
import ErrorList from './error_list';

class LookUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  update() {
    return e => {
      this.setState({ email: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.lookUpUser(this.state.email).then(res => {
      if (res.found.found === "found") {
        return this.props.history.push("/signin/login");
      } else if (res.found.found === "not found") {
        return this.props.history.push("/signin/signup");
      } else {
        return (<LookUpFormContainer email={res.found.email} found={null}/>)
      }
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.props.lookUpUser("demo@demo.com").then(res => this.props.history.push("/signin/login"))
  }


  render () {
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
              <h1>Let's get started</h1>
            </div>
            <div className="look-up-subheader-container">
              <p>Enter your email to sign up or log in.</p>
            </div>
          </div>
          <form className="look-up-form" onSubmit={this.handleSubmit}>
            <div className="look-up-form-input-container">
              <div className="look-up-form-input-label-container">
                <label className="look-up-form-label">Email Address</label>
              </div>
              <div className="look-up-form-input-container">
                <input type="email" className="look-up-form-input" onChange={this.update()} value={this.state.email || ''} placeholder="Enter email"/>
              </div>

            </div>
            <div className="error-list-wrapper">
              <ErrorList errors={this.props.errors} />
            </div>
            <div className="look-up-form-button-container">
              <input className="look-up-form-button" type="submit" value="Get Started" />
            </div>

            <p className="or"> ----or---- </p>

            <div className="look-up-form-button-container">
              <input onClick={this.handleClick} className="look-up-form-button" type="submit" value="Demo Login" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LookUpForm;
