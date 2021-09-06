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
            <div className="col-md-6">
                <img src="img/carte.png" alt="Carte" className="img-fluid" />
            </div>
            <div className="col-md-6">
                <div>
                    <div>
                        <FontAwesomeIcon icon={faAddressBook} />
                        1375 boul. Guillaume-Couture, bureau 108, G6W0P3
                    </div>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faMailBulk} />
                        info@samuelalainpsy.com
                    </div>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        418-208-6497
                    </div>
                </div>
            </div>
        </section>
    );
}
