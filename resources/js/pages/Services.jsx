import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";

const element = <FontAwesomeIcon className={"fa-2x"} icon={faCoffee} />;

export default function Services() {
    return (
        <Col>
            <h2>Services</h2>
            <Row>
                <Col md={6}>
                    <Row>
                        <Col md={1}>{element}</Col>
                        <Col md={11}>
                            <h3>Psychothérapie</h3>
                            <p>
                                Un processus structuré qui permet de traiter des
                                situations telles que: anxiété, dépression,
                                épuisement, problématiques relationnelles,
                                difficultés d'adaptation...
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <div className="row">
                        <div className="col-md-1 align-middle">{element}</div>
                        <div className="col-md-11">
                            <h3>
                                Développement des habiletés humaines en gestion
                            </h3>
                            <p>
                                Comprendre et interagir avec les personnalités
                                difficiles, maximiser votre influence, gagner en
                                assurance et actualiser votre potentiel.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-1 align-middle">{element}</div>
                        <div className="col-md-11">
                            <h3>Formations sur mesure</h3>
                            <p>
                                Maximisation de la performance d’équipe,
                                restructuration des interactions en équipe,
                                comprendre et gérer les personnalités
                                difficiles...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-1 align-middle">{element}</div>
                        <div className="col-md-11">
                            <h3>Gestion de situations inhabituelles</h3>
                            <p>
                                Donnez vous les ressources pour aider le capital
                                humain de votre entreprise à s'adapter à une
                                situation inhabituelle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
}
