import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap"
import "jquery"
import "popper.js"
import Home from "./pages/home/index";
import Profile from "./pages/profile/index";
import SideNav from "./components/navs/sidenav/index";
import NavBar from "./components/navs/navbar/index";
import Projects from "./pages/projects/index";
import Project from "./pages/projects/project/index";

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
    <div className="bg-b-to-b min-h-100">
        <div className="row">
            <div className="col-md-10">
                <NavBar />
                <React.StrictMode>
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/profile" component={Profile} />

                            <Route
                                exact
                                path="/projects"
                                component={Projects}
                            />
                            
                            <Route path="/project/:slug" component={Project} />
                        </Switch>
                    </Router>
                </React.StrictMode>
            </div>
            <div className="col-md-2">
                <SideNav />
            </div>
        </div>
    </div>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
