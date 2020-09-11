import React from "react"
import { Link } from "react-router-dom"
import "./main.css"

 class MainProfileBar extends React.Component{
    

    render(){
        return(
            <div id="main-profile-bar">
                <ul className="">
                    <li className=""><Link to="profile?tab=twitter">twitter</Link></li>
                    <li className=""><Link to="profile?tab=github">Github</Link></li>
                    <li className=""><Link to="profile?tab=dev">Dev</Link></li>
                    <li className=""><Link to="profile?tab=skills">Skills</Link></li>
                    <li className=""><Link to="profile?tab=achievements">Achievements</Link></li>
                </ul>
            </div>
        )
    }
 }

 export default MainProfileBar