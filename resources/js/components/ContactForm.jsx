import React from 'react'

export default function ContactForm() {
    return (
        <section id="contact-form">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Nom:</label>
                        <input type="text" className="form-control" required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Adresse courriel:</label>
                        <input type="email" className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Brève description du besoin:</label>
                    <textarea className="form-control" />
                </div>
                <button className="btn btn-primary" type="submit">Envoyer</button>
            </form>
        </section>
    )
}
