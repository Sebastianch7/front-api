import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Menu() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand href="https://sebastianch7.github.io/" target='_blank'>Sebastian Chaparro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/create">Registrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
                
                
            </Container>
        </Navbar>
    )
}
