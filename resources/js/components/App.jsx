import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Services from "../pages/Services";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <div className="container">
                    <Switch>
                        <Route path="/services">
                            <Services />
                        </Route>
                        <Route path="/a-propos">
                            <About />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
