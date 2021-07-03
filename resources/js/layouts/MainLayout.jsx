import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

export default function MainLayout({ children }) {
    return (
        <div className="container">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
