import React from "react";

export default function About() {
    return (
        <div>
            <h2>À propos</h2>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://picsum.photos/480/700?random=24398"
                        alt=""
                    />
                    <figcaption>
                        Dr Samuel Alain, D.Ps, psychologue
                        <br />
                        OPQ: 12907-16
                    </figcaption>
                </div>
                <div className="col-md-6">
                    <p>
                        Je suis détenteur d’un baccalauréat en psychologie de
                        l’Université Laval et d’un doctorat en psychologie
                        clinique de l’Université du Québec à Chicoutimi. Je suis
                        psychologue clinicien membre de l’Ordre des psychologues
                        du Québec. En plus de mon intérêt pour le fonctionnement
                        humain, j’ai un fort intérêt pour le monde des affaires
                        que j’actualise par des études de deuxième cycle en
                        gestion des entreprises. Mon expérience clinique auprès
                        d’adultes vivant avec diverses problématiques (anxiété,
                        dépression, difficultés relationnelles, deuil, etc.) m’a
                        amené à développer une approche professionnelle et
                        centrée sur les besoins du client. Mes interventions
                        sont basées sur un savoir scientifique constamment mis à
                        jour.
                    </p>

                    <p>
                        Fort d’une expérience clinique variée (réseau de la
                        santé, réseau de l’éducation, pratique privée), j’adopte
                        une approche qui s’adapte aux besoins du client. Les
                        interventions sont donc personnalisées en fonction de la
                        problématique présentée, des objectifs exprimés et des
                        caractéristiques personnelles du client.
                    </p>
                </div>
            </div>
        </div>
    );
}
