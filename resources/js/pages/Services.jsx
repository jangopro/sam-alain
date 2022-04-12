import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const element = <FontAwesomeIcon className={"fa-2x"} icon={faCoffee} />;

const descriptionCoaching = (
    <>
        Les relations peuvent être complexes et générer de la détresse ou de
        l’insatisfaction. Apprenez à vous positionner de façon plus avantageuse
        dans vos relations. Trouver un équilibre et un sentiment de confort face
        à des relations complexes ou conflictuelles. Comprenez la mécanique des
        interactions qui constituent vos relations.
    </>
);
const descriptionPsychotherapie = (
    <>
        La psychothérapie est un processus structuré de traitement de
        différentes situations de santé psychologique. Le processus est basé sur
        une approche psychothérapeutique scientifiquement éprouvée. L’approche
        préconisée pour la psychothérapie et l’approche cognitive
        comportementale
    </>
);

const descriptionPreparationMentale = (
    <>
        Vous faites face à un changement important dans votre vie ou à un défi?
        Apprenez à vous positionner de façon à faire face aux changements avec
        résilience, à aborder un défi en pleine possession de vos moyens et à
        maximiser le résultat de vos actions.
    </>
);

const descriptionModalites = (
    <>
        Profitez d’une approche personnalisée. Le service est souple et adapté à
        votre réalité. Les services psychologiques peuvent être offerts sous
        forme de rencontres ponctuelles ou de suivis de courte ou de longue
        durée
    </>
);

function ServiceElement({ title, description, icon }) {
    return (
        <Col md={6}>
            <div className="row">
                <div className="col-md-1 align-middle">{icon}</div>
                <div className="col-md-11">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    );
}

export default function Services() {
    return (
        <Container fluid="lg">
            <h2>Services</h2>
            <p>
                Les services psychologiques sont offerts à l'ensemble de la
                population. Contactez-moi afin de m'exposer votre situation. Les
                services psychologiques sont remboursés par la majorité des
                assureurs privés.
            </p>
            <Row>
                <ServiceElement
                    icon={element}
                    description={descriptionPsychotherapie}
                    title={"Psychothérapie"}
                />
                <ServiceElement
                    icon={element}
                    description={descriptionCoaching}
                    title={"Coaching face aux enjeux relationnels"}
                />
            </Row>
            <Row>
                <ServiceElement
                    icon={element}
                    description={descriptionPreparationMentale}
                    title={
                        "Préparation mentale/psychologique pour un événement particulier "
                    }
                />
                <ServiceElement
                    icon={element}
                    description={descriptionModalites}
                    title={"Modalités"}
                />
            </Row>
        </Container>
    );
}
