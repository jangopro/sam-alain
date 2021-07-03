import { Link } from "react-router-dom";
import React from "react";

export default function Header({ light = true }) {
    const logo = light ? "logo-header-light" : "logo-header-dark";
    return (
        <header>
            <nav className="header">
                <h1>
                    <Link to="/" className="nav-link">
                        <img id="logo-header" src={`img/${logo}.png`} alt="" />
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
