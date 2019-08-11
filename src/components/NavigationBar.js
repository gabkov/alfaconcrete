import React from 'react';
import { Navbar, NavDropdown, Button, Nav, Form, FormControl } from 'react-bootstrap';

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar sticky="top" bg="light" expand="md">
                <Navbar.Brand ><img
                    src={process.env.PUBLIC_URL + '/images/navbar/diamondlogo.png'} 
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link >Küldetésünk</Nav.Link>
                        <NavDropdown title="Munkáink" id="basic-nav-dropdown">
                            <NavDropdown.Item >3D Panelek</NavDropdown.Item>
                            <NavDropdown.Item >Asztalok</NavDropdown.Item>
                            <NavDropdown.Item >Vázák, szobrok</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link >Ajánlat kérés</Nav.Link>
                        <Nav.Link >Csapatunk</Nav.Link>
                        <Nav.Link >Kapcsolat</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
