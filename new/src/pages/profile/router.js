import React from "react"
import {Github,Twitter,Skills,Achievements,Dev} from "./tabs/index"
import {
    Route,
    useLocation
} from "react-router-dom";

export default function ProfileRouters(){
    let location = useLocation();
    return(
        <>
            <Route
                exact path="/profile"  
                render = {({match})=>{                
                    return location.search==="?tab=twitter" ? <Twitter/> : undefined
                }}                 
            />
            
            <Route 
                exact path="/profile"
                render = {({match})=>{                
                    return location.search==="?tab=github" ?   <Github/> : undefined
                }}                 
            />             
        
            <Route 
                exact path="/profile"
                render = {({match})=>{                
                    return location.search==="?tab=dev" ?  <Dev/> : undefined
                }} 
            />
                
        

            <Route 
                exact path="/profile"
                render = {({match})=>{                
                    return location.search==="?tab=skills" ?  <Skills/> : undefined
                }}
            />
              

            <Route
                exact path="/profile"
                render = {({match})=>{                
                    return location.search==="?tab=achievements" ?  <Achievements/> : undefined
                }}
            />
                
        </>
    )
}
