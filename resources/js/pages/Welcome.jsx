import { Link } from "react-router-dom";
import React from "react";

export default function Welcome() {
    return (
        <div>
            <Link to="/home">Service 1</Link>
            <Link to="/home-2">Service 2</Link>
        </div>
    );
}
