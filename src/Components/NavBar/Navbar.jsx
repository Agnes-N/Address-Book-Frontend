import React, { Fragment } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";

const NavBars = () => (
  <Fragment>
    <Navbar className="navbar-color" bg="light" variant="light">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      <Form inline>
        <Nav className="mr-auto">
          <Nav.Link href="contacts">Register Contact</Nav.Link>
          <Nav.Link href="signup">Signup</Nav.Link>
          <Nav.Link href="signin">Login</Nav.Link>
        </Nav>
      </Form>
    </Navbar>
  </Fragment>
);

export default NavBars;
