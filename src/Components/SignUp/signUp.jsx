import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Navbars from "../NavBar/Navbar.jsx";
import { signUp } from "../../Redux/Actions/SignUp/signUpAction";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { signUpAction } = this.props;
    const { firstname, lastname, email, password } = this.state;
    const form = {
      firstname,
      lastname,
      email,
      password
    };
    signUpAction(form);
  };

  render() {
    const { firstname, lastname, email, password } = this.state;

    return (
      <div className="main-section">
        <div className="contact-section">
          <Navbars />
          <div className="contact">
            <h2 className="title">Create Contact</h2>
            <form onSubmit={this.onSubmit}>
              <fieldset>
                <br />
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={firstname}
                  placeholder="First Name"
                  onChange={this.onChange}
                  required
                />
                <br /> <br />
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastname}
                  placeholder="Last Name"
                  onChange={this.onChange}
                  required
                />
                <br /> <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={this.onChange}
                  required
                />
                <br /> <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
                <br /> <br /> <br />
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  value="SIGN UP"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  signUpAction: PropTypes.func.isRequired
};

SignUp.defaultProps = {};

export const mapStateToProps = () => ({});

export const mapDispatchToProps = dispatch => ({
  signUpAction: formData => dispatch(signUp(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
