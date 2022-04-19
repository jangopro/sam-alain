import { Link } from "react-router-dom";
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default function Welcome() {
    return (
        <div className="">
            <Container>
                <Row>
                    <div className={"text-center mb-3"}>
                        <Image
                            width={"200px"}
                            src={"img/logo-big-black.png"}
                        ></Image>
                    </div>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h2>Services</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer sed neque arcu. Fusce at sem lacus.
                            Nullam id neque felis. Cras aliquet purus ac felis
                            tempus maximus. Nunc in sapien lacus. Duis faucibus
                            tempus commodo. In pulvinar dui ante, sed rhoncus
                            erat feugiat at. Proin molestie mi justo, vitae
                            maximus metus fringilla in.
                        </p>
                        <div className={"text-center"}>
                            <Button as={Link} to="/home">
                                Service 1
                            </Button>
                        </div>
                    </Col>
                    <Col md={{ span: 4, offset: 2 }}>
                        <h2>Entrepreneurs / Gestionnaires</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer sed neque arcu. Fusce at sem lacus.
                            Nullam id neque felis. Cras aliquet purus ac felis
                            tempus maximus. Nunc in sapien lacus. Duis faucibus
                            tempus commodo. In pulvinar dui ante, sed rhoncus
                            erat feugiat at. Proin molestie mi justo, vitae
                            maximus metus fringilla in.
                        </p>
                        <div className={"text-center"}>
                            <Button as={Link} to="/home-2">
                                Service 2
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
