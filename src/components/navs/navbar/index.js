import React from "react";
import "./navbar.css";

class NavBar extends React.Component {
    render() {
        return (
            <nav
                id="home-nav"
                className="navbar navbar-expand-lg   navbar-transparent bg-transparent"
            >
                <button
                    className="navbar-toggler  collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#home-navbar-content"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars f-c-g"></i>
                </button>
                <div id="home-navbar-content" className="collapse navbar-collapse" >
                    <ul
                        className="navbar-nav mr-auto"
                    >
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile/?tab=skills">
                                Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
