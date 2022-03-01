import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
    return (
        <section className="bg-main">
            <Container fluid="lg">
                <Row>
                    <Col md={"6"}>
                        <h2>
                            Titre avec{" "}
                            <span className="text-emphasis">emphase</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aperiam, tempore est. Odio numquam omnis
                            tempora, repudiandae distinctio ex quos mollitia
                            maiores, cum ipsum labore? Ipsum blanditiis
                            provident sequi. Ea, praesentium!
                        </p>
                    </Col>
                    <Col md={"6"}>
                        <img src="" alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
