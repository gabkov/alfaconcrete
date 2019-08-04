import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar sticky="top" expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Küldetésünk</Navbar.Brand> 
                    <Navbar.Brand href="#">Munkáink</Navbar.Brand>
                    <Navbar.Brand href="#">Ajánlat kérés</Navbar.Brand>
                    <Navbar.Brand href="#">Csapatunk</Navbar.Brand>
                    <Navbar.Brand href="#">Kapcsolat</Navbar.Brand>
                </Container>
            </Navbar>
            );
    }
}

export default NavigationBar;
