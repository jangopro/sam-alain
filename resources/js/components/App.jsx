import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "../pages/About";
import Home from "./Home";
import MainLayout from "../layouts/MainLayout";
import React from "react";
import ReactDOM from "react-dom";
import Services from "../pages/Services";
import Welcome from "../pages/Welcome";
import SiteContextProvider from "../contexts/siteSectionContext";

function App() {
    return (
        <SiteContextProvider>
            <Router>
                <Switch>
                    <Route path="/services">
                        <MainLayout>
                            <Services />
                        </MainLayout>
                    </Route>
                    <Route path="/a-propos">
                        <MainLayout>
                            <About />
                        </MainLayout>
                    </Route>
                    <Route path="/home">
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    </Route>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                </Switch>
            </Router>
        </SiteContextProvider>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
