import React, { useState } from "react";

import axios from "axios";
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

//TODO: for des label + id des inputs

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const [submitting, setSubmitting] = useState(false)

    function onSubmitButton(event) {
        event.preventDefault();
        setSubmitting(true)
        axios
            .post("/contact", {
                name: formData.name,
                email: formData.email,
            })
            .then(function (response) {
                console.log(response.data);
            })
            .finally(() => {
                setSubmitting(false)
            });
    }
    return (
        <section id="contact-form" className="bg-main">
            <Container fluid="lg">
                <Row>
                    <Col>
                        <h2>Contact</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aperiam, tempore est. Odio numquam omnis tempora, repudiandae
                            distinctio ex quos mollitia maiores, cum ipsum labore? Ipsum
                            blanditiis provident sequi. Ea, praesentium!
                        </p>
                    </Col>
                    <Col>
                        <Form onSubmit={onSubmitButton}>
                            <div className="form-row">
                                <FormGroup controlId="nom">
                                    <FormLabel>Nom:</FormLabel>
                                    <FormControl
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                ["name"]: event.target.value,
                                            })
                                        }
                                        required
                                    />
                                </FormGroup>
                                <FormGroup controlId="email">
                                    <FormLabel>Adresse courriel:</FormLabel>
                                    <FormControl
                                        type="email"
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                ["email"]: event.target.value,
                                            })
                                        }
                                        required
                                    />

                                </FormGroup>
                            </div>
                            <FormGroup controlId="description">
                                <FormLabel>Brève description du besoin:</FormLabel>
                                <FormControl as="textarea" rows={3} />
                            </FormGroup>

                            <Button variant={'primary'} type={'submit'} disabled={submitting}>
                                {submitting ? 'Envoi en cours...' : 'Envoyer'}
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}
