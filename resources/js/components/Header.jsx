import { Link } from "react-router-dom";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header({ light = true }) {
    const logo = light ? "logo-header-light" : "logo-header-dark";
    return (
        <header className="bg-main">
            <Navbar bg="dark" expand="lg">
                <Container>

                    <Link to="/" className="nav-link">
                        <img id="logo-header" src={`img/${logo}.png`} alt="" />
                    </Link>
                    <Nav className="me-auto" as="ul">

                        <Nav.Item as="li">
                            <Link to="/services">
                                Services
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/a-propos">
                                À propos
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li" >
                            <Link
                                to="/home#contact-form"
                                as="button"
                                className="nav-link btn btn-primary"
                            >
                                Contact
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Container>

            </Navbar>
        </header>
    );
}
