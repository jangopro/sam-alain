import ContactForm from "./ContactForm";
import Info from "./Info";
import Presentation from "./Presentation";
import React from "react";
import ServicesSection from "./ServicesSection";

export default function Home() {
    return (
        <div>
            <Presentation />
            <ServicesSection />
            <ContactForm />
            <Info />
        </div>
    );
}
