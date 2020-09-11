import React from "react"
import "./navbar.css"

class NavBar extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <nav   id="home-nav" className="navbar navbar-expand-lg  navbar-transparent bg-transparent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/profile?tab=skills">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/projects">Projects</a>
                    </li>                    
                </ul>
            </nav>
        )
    }
}

export default NavBar