import { Link } from "react-router-dom";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useSiteSection from "../hooks/useSiteSection";

export default function Header() {
    const { isNormalSide } = useSiteSection();
    const logo = isNormalSide ? "logo-header-light" : "logo-header-dark";

    return (
        <header className="bg-main">
            <Navbar variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img id="logo-header" src={`img/${logo}.png`} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav>
                            <Nav.Link as={Link} to="/services">
                                Services
                            </Nav.Link>
                            <Nav.Link as={Link} to="/a-propos">
                                À propos
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/home#contact-form"
                                className="nav-link btn btn-primary"
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
