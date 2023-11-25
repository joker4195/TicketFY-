import React, { Component } from "react";
import "./NavbarCompStyles.css";
import "../routes/Concerts";
import "../routes/Login";
import "../routes/Movies";
import "../routes/Sports";

// import "."
// import { Link } from 'react-router-dom'
import { Nav, Navbar, Form, Container, Button } from "react-bootstrap";
export default class NavbarComp extends Component {
  render() {
    return (
      // <div>
        <Navbar bg="dark " variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <h2>TicketeFY</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {/* <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/concerts">Concerts</Nav.Link> */}
                <Nav.Link href="/movies">Movies</Nav.Link>
                {/* <Nav.Link href="/sports">Sports</Nav.Link> */}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-secondary" type="submit" >Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      // </div>
    );
  }
}
