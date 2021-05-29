import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "../pages/About";
import Home from "./Home";
import MainLayout from "../layouts/MainLayout";
import React from "react";
import ReactDOM from "react-dom";
import SecondLayout from "../layouts/SecondLayout";
import Services from "../pages/Services";
import Welcome from "../pages/Welcome";

function App() {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <>
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
                        <Route path="/home-2">
                            <SecondLayout>
                                <Home />
                            </SecondLayout>
                        </Route>
                        <Route exact path="/">
                            <Welcome />
                        </Route>
                    </>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
