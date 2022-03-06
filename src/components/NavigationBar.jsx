import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="https://akanahmet.github.io">My Resume</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="https://akanahmet.github.io/csstutorial">CSS Tutorial</Nav.Link>
      <Nav.Link eventKey={2}href="https://loan-application-ahmet.herokuapp.com/">Spring Boot Project</Nav.Link>
      <Nav.Link eventKey={3} href="https://akanahmet.github.io/htmltutorial"> HTML Tutorial</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      </div>
    )
  }
}
