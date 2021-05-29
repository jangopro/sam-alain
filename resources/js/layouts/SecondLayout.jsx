import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

export default function MainLayout({ children }) {
    return (
        <>
            <Header light={false} />
            {children}
            <Footer />
        </>
    );
}
