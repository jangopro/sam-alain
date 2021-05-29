import { Link } from "react-router-dom";
import React from "react";

export default function Header({ light = true }) {
    const themeClass = light ? "bg-light" : "bg-dark";
    return (
        <header className="pb-md-4">
            <nav className={`navbar navbar-light ${themeClass}`}>
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
                        <Link
                            to="/home#contact-form"
                            as="button"
                            className="nav-link btn btn-primary"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
