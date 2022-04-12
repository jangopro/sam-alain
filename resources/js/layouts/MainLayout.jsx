import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
import useSiteSection from "../hooks/useSiteSection";

export default function MainLayout({ children }) {
    const { isBusinessSide } = useSiteSection();

    return (
        <div data-theme={isBusinessSide ? "dark" : "light"}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
