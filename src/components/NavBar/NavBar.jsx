import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';


function NavBar() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Celulares</Nav.Link>
                        <Nav.Link href="#link">Televisores</Nav.Link>
                        <NavDropdown title="Electrodomesticos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Aires Acondicionados</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Lavarropas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">lavavajillas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
        </>
    )   
}

export default NavBar;