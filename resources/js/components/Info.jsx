import {
    faAddressBook,
    faMailBulk,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Info() {
    return (
        <section className="home-section bg-main">
            <div className="col-md-5">
                <img src="img/logo-big-white.png" alt="Carte" className="img-fluid info-logo" />
            </div>
            <div className="col-md-7">
                <div className="row">
                    <div className="col-md-6 left-info-section">
                        <div className="icon-footer">
                            <FontAwesomeIcon icon={faAddressBook} size="3x" />
                        </div>
                        1375 Boulevard Guillaume-Couture<br />
                        Bureau 108<br />
                        Lévis, Qc<br />
                        G6W 0P3
                    </div>
                    <div className="col-md-6 right-info-section">
                        <div className="icon-footer">
                            <FontAwesomeIcon icon={faMailBulk} size="3x" />
                        </div>
                        <div>
                            info@samuelalainpsy.com
                        </div>
                        <div>
                            418-208-6497
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
