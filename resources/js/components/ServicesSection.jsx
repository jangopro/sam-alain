import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function ServicesSection() {
    return (
        <section className="home-section">
            <div>
                <h2>Services</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, tempore est. Odio numquam omnis tempora, repudiandae
                    distinctio ex quos mollitia maiores, cum ipsum labore? Ipsum
                    blanditiis provident sequi. Ea, praesentium!
                </p>
                <div>
                    <Link to="/services">
                        En savoir plus
                    </Link>
                </div>
            </div>

            <div>
                <div className="row">

                    <div className="text-center col-md-6">
                        <FontAwesomeIcon className="fa-2x" icon={faCoffee} />
                        <div>
                            <strong>Psychothérapie</strong>
                        </div>
                    </div>
                    <div className="text-center col-md-6">
                        <FontAwesomeIcon className="fa-2x" icon={faCoffee} />
                        <div>
                            <strong>
                                Développement des habiletés humaines en gestion
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="text-center col-md-6">
                        <FontAwesomeIcon className="fa-2x" icon={faCoffee} />
                        <div>
                            <strong>Formations sur mesure</strong>
                        </div>
                    </div>
                    <div className="text-center col-md-6">
                        <FontAwesomeIcon className="fa-2x" icon={faCoffee} />
                        <div>
                            <strong>Gestion de situations inhabituelles</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
