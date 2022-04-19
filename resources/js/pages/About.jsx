import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
    return (
        <Container fluid={"lg"}>
            <section>
                <h2 className={"text-center"}>À propos</h2>
                <Row>
                    <Col md={6}>
                        <div className={"text-center"}>
                            <img src="/img/Samuel-2.png" width={"250"} alt="" />
                            <figcaption>
                                Dr Samuel Alain, D.Ps, psychologue
                                <br />
                                OPQ: 12907-16
                            </figcaption>
                        </div>
                    </Col>
                    <Col md={6}>
                        <p>
                            Je suis détenteur d’un doctorat en psychologie
                            clinique de l’Université du Québec à Chicoutimi. Je
                            suis psychologue clinicien membre de l’Ordre des
                            psychologues du Québec. Mon expérience clinique
                            auprès de personnes vivant avec diverses
                            problématiques (anxiété, dépression, difficultés
                            relationnelles, deuil, etc.) m’a amené à développer
                            une approche professionnelle proactive et centrée
                            sur les besoins du client. Mes interventions sont
                            basées sur un savoir scientifique constamment mis à
                            jour.
                        </p>

                        <p>
                            Fort d’une expérience clinique variée (réseau de la
                            santé, réseau de l’éducation, pratique privée),
                            j’adopte une approche qui s’adapte à la réalité du
                            client. Les interventions sont donc personnalisées
                            en fonction de la problématique présentée, des
                            objectifs exprimés et des caractéristiques
                            personnelles du client. Vous bénéficierez d’un
                            service actif visant une autonomisation rapide face
                            à la gestion des situations auxquelles vous faites
                            face.
                        </p>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}
