import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function ServicesSection() {
    return (
        <section>
            <h2>Services</h2>
            <div className="row">
                <div className="col-md-3 text-center">
                    <FontAwesomeIcon className="fa-2x" icon={faCoffee} />
                    <div>
                        <strong>Psychothérapie</strong>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <FontAwesomeIcon className="fa-2x" icon={faCoffee} />
                    <div>
                        <strong>
                            Développement des habiletés humaines en gestion
                        </strong>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <FontAwesomeIcon className="fa-2x" icon={faCoffee} />
                    <div>
                        <strong>Formations sur mesure</strong>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <FontAwesomeIcon className="fa-2x" icon={faCoffee} />
                    <div>
                        <strong>Gestion de situations inhabituelles</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}
