import React from 'react';
import '../App.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const BootstrapNav = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Navbar.Brand href='/'>Dirk Soentjens</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
            <NavDropdown title="Hobbies" id="basic-nav-dropdown">
                <NavDropdown.Item href="/dota">Video games</NavDropdown.Item>
                <NavDropdown.Item href="/code">Code</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default BootstrapNav;