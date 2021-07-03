import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

// TODO use context instead to switch theme

export default function MainLayout({ children }) {
    return (
        <div className="container" data-theme="dark">
            <Header light={false} />
            {children}
            <Footer />
        </div>
    );
}
