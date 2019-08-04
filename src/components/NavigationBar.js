import React from 'react';
import { Navbar, Container, Dropdown } from 'react-bootstrap';

class NavigationBar extends React.Component {

    render() {
        return (
            <div data-aos="fade-in">
                <Navbar sticky="top">
                    <Container>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Menü
  </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Küldetésünk</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Munkáink</Dropdown.Item>
                                <Dropdown.Item className="request-class" href="#/action-3">Ajánlat kérés</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Csapatunk</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Kapcsolat</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
