import React from 'react';
import { Navbar, NavDropdown, Button, Nav, Form, FormControl } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";

class NavigationBar extends React.Component {

    constructor() {
        super();
        this.state = {
            navExpanded: false
        }
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    setNavExpanded = (expanded) => {
        this.setState({ navExpanded: expanded });
    }

    closeNav = () => {
        this.setState({ navExpanded: false });
    }

    render() {
        return (
            <Navbar data-aos="fade-in" data-aos-once="true" data-aos-duration="1000" sticky="top" bg="light" expand="lg"
                onToggle={this.setNavExpanded}
                expanded={this.state.navExpanded}>
                <Navbar.Brand ><img
                    onClick={this.scrollToTop}
                    src={process.env.PUBLIC_URL + '/images/navbar/diamondlogo.png'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="mr-auto">
                        <Nav.Link
                        >
                            <Link
                                onClick={this.closeNav}
                                activeClass="active"
                                to="mission"
                                spy={true}
                                smooth={true}
                                offset={-250}
                                duration={500}
                            >
                                Küldetésünk
                                </Link>

                        </Nav.Link>

                        <Nav.Link>
                            <Link
                                onClick={this.closeNav}
                                activeClass="active"
                                to="implementation"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                            >
                                Munkáink
                                </Link>

                        </Nav.Link>

                        {/* <NavDropdown title="Munkáink" id="basic-nav-dropdown">
                            <NavDropdown.Item >3D Panelek</NavDropdown.Item>
                            <NavDropdown.Item >Asztalok</NavDropdown.Item>
                            <NavDropdown.Item >Vázák, szobrok</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link>
                            <Link
                                onClick={this.closeNav}
                                activeClass="active"
                                to="request"
                                spy={true}
                                smooth={true}
                                offset={-300}
                                duration={500}
                            >
                                Ajánlat kérés
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                onClick={this.closeNav}
                                activeClass="active"
                                to="team"
                                spy={true}
                                smooth={true}
                                offset={-250}
                                duration={500}>
                                Csapatunk
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                onClick={this.closeNav}
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-300}
                                duration={500}
                            >
                                Kapcsolat
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
