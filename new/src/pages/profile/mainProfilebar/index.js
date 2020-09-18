import React from "react"
import { Link } from "react-router-dom"
import "./main.css"

 class MainProfileBar extends React.Component{
    

    render(){
        return(
            <div id="main-profile-bar">
                <ul className="">
                    <li className="">
                        <Link to={{pathname:"/profile/", search:"?tab=dev"}}>
                            Dev
                        </Link>
                    </li>
                    <li className="">
                        <Link to={{pathname:"/profile/", search:"?tab=github"}}>
                            Github
                        </Link>
                    </li>  
                    <li className="">
                        <Link  to={{pathname:"/profile/", search:"?tab=twitter"}}>
                            Twitter
                        </Link>
                    </li>                                     
                    <li className="">
                        <Link  to={{pathname:"/profile/", search:"?tab=skills"}}>
                            Skills
                        </Link>
                    </li>
                    <li className="">
                        <Link to={{pathname:"/profile", search:"?tab=achievements"}}>
                            Achievements
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
 }

 export default MainProfileBar