import React from 'react'
import Info from './Info';
import ServicesSection from './ServicesSection';
import ContactForm from './ContactForm';


export default function Home() {
    return (
        <div>
            <ServicesSection />
            <ContactForm />
            <Info />
        </div>
    )
}
