import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./Login.scss";
import Navbars from "../NavBar/Navbar.jsx";
import { login } from "../../Redux/Actions/Login/LoginAction";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { loginAction } = this.props;
    const { email, password } = this.state;
    const formData = {
      email,
      password
    };
    loginAction(formData);
  };

  render() {
    const { email, password } = this.state;

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
                <input type="submit" name="submit" id="submit" value="LOGIN" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  loginAction: PropTypes.func.isRequired
};

SignIn.defaultProps = {};

export const mapStateToProps = () => ({});

export const mapDispatchToProps = dispatch => ({
  loginAction: form => dispatch(login(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
