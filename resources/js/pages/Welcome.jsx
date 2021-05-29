import { Link } from "react-router-dom";
import React from "react";

export default function Welcome() {
    return (
        <div className="jumbotron d-flex align-items-center">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/home">Service 1</Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/home-2">Service 2</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
