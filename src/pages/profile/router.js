import React from "react"
import {Github,Twitter,Skills,Achievements,Dev} from "./tabs/index"
import {
    Route,
    useLocation
} from "react-router-dom";


let replaceBgImage = (image,url)=>{
    if(image){
        image.src=url
    }
}
export default function ProfileRouters(){
    let location = useLocation();
    let  image = document.getElementById("profile-image-bg")
    return(
        <>
        
            <Route
                exact path="/profile"  
                render = {({match})=>{    
                    if (location.search==="?tab=twitter") {
                        replaceBgImage(image,"https://www.flaticon.com/svg/static/icons/svg/1051/1051382.svg")
                        return  <Twitter/> 
                    }    
                   
                    
                }}                 
            />
            
            <Route 
                exact path="/profile"
                render = {({match})=>{    
                    if(location.search==="?tab=github"){
                        replaceBgImage(image,"https://www.flaticon.com/svg/static/icons/svg/1051/1051377.svg")            
                        return <Github/>
                    }
                }}                 
            />             
        
            <Route 
                exact path="/profile"
                render = {({match})=>{   
                    if (location.search==="?tab=dev"){
                        replaceBgImage(image,"https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg") 
                        return  <Dev/> 
                    }             
                  
                }} 
            />
                
        

            <Route 
                exact path="/profile"
                render = {({match})=>{    
                    if(location.search==="?tab=skills")
                    {
                        replaceBgImage(image,"https://www.flaticon.com/svg/static/icons/svg/2502/2502399.svg") 
                        return   <Skills/> 
                    }   
                }}         
                    
            />
              

            <Route
                exact path="/profile"
                render = {({match})=>{   
                    if(location.search==="?tab=achievements"){
                        replaceBgImage(image,"https://www.flaticon.com/svg/static/icons/svg/3135/3135722.svg") 
                        return   <Achievements/>
                    }                    
                }}
            />
                
        </>
    )
}
