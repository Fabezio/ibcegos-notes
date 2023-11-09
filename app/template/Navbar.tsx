import React, { type ReactNode } from 'react'

import {
  Container,
  Nav,
  Navbar,
  // NavDropdown
} from 'react-bootstrap';

function BasicExample({ children, background = "default", theme = 'light' }: { children: ReactNode, background?: string, theme?: string }) {
  return (
    <Navbar expand="lg" className={`bg-${background}`} data-bs-theme={theme} >
      <Container>
        <Navbar.Brand href="/">
          <img className='me-2 circle-rounded border border-secondary' src='/assets/images/logo.jpg' height='32' alt='brand logo' />
          POEC IB-CEGOS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {children}

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;