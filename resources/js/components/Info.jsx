import {
    faAddressBook,
    faMailBulk,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Info() {
    return (
        <section className="home-section bg-main">
            <Container fluid="lg">
                <Row>
                    <Col md="5">
                        <img
                            src="img/logo-big-white.png"
                            alt="Carte"
                            className="img-fluid info-logo"
                        />
                    </Col>
                    <Col md="7">
                        <Row>
                            <Col md={6} className={"left-info-section"}>
                                <div className="icon-footer">
                                    <FontAwesomeIcon
                                        icon={faAddressBook}
                                        size="3x"
                                    />
                                </div>
                                1375 Boulevard Guillaume-Couture
                                <br />
                                Bureau 108
                                <br />
                                Lévis, Qc
                                <br />
                                G6W 0P3
                            </Col>
                            <Col md={6} className={"right-info-section"}>
                                <div className="icon-footer">
                                    <FontAwesomeIcon
                                        icon={faMailBulk}
                                        size="3x"
                                    />
                                </div>
                                <div>info@samuelalainpsy.com</div>
                                <div>418-208-6497</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
