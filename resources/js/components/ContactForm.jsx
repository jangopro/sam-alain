import React, { useState } from "react";

import axios from "axios";

//TODO: for des label + id des inputs

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    function onSubmitButton(event) {
        event.preventDefault();
        axios
            .post("/games", {
                name: formData.name,
                email: formData.email,
            })
            .then(function (response) {
                console.log(response.data);
            });
    }
    return (
        <section id="contact-form">
            <h2>Contact</h2>
            <form onSubmit={onSubmitButton}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="nom">Nom:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nom"
                            required
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    ["name"]: event.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">
                            Adresse courriel:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    ["email"]: event.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Brève description du besoin:</label>
                    <textarea className="form-control" />
                </div>
                <button className="btn btn-primary" type="submit">
                    Envoyer
                </button>
            </form>
        </section>
    );
}
