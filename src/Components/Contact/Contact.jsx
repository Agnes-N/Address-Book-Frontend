import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Navbars from "../NavBar/Navbar.jsx";
import "./Contact.scss";
import { contactData } from "../../Redux/Actions/Contact/ContactAction";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: "",
      phoneNumber: "",
      email: ""
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
    const { contactAction } = this.props;
    const { names, phoneNumber, email } = this.state;
    const form = {
      names,
      phoneNumber,
      email
    };
    contactAction(form);
  };

  render() {
    const { names, phoneNumber, email } = this.state;

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
                  name="names"
                  id="names"
                  value={names}
                  placeholder="Names"
                  onChange={this.onChange}
                  required
                />
                <br /> <br />
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  placeholder="Phone number"
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
                <br /> <br /> <br />
                <input type="submit" name="submit" id="submit" value="SAVE" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contactAction: PropTypes.func.isRequired
};

Contact.defaultProps = {};

export const mapStateToProps = () => ({});

export const mapDispatchToProps = dispatch => ({
  contactAction: formData => dispatch(contactData(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
