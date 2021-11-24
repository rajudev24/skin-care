import React from 'react';
import {NavDropdown, Navbar, Nav,  Container} from 'react-bootstrap'
import {Link} from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='menu-list'>
                <Navbar.Brand as={Link} to="/">Trejor Skin Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">HOME</Nav.Link>
                        
                        <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/treatments">TREATMENTS</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/fall">FALL</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/winter">WINTER</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
                        <Nav.Link as={Link} to="/contact">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;