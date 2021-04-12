import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <h1 className="navbar-brand">
                    <Link to="/" className="nav-link">
                        Samuel Alain
                    </Link>
                </h1>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/services" className="nav-link">
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/a-propos" className="nav-link">
                            À propos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact-form"
                            className="nav-link btn btn-primary"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
