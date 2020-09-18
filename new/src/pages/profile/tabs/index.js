import React from "react"
import "./tabs.css"


export function Dev(){
  
    return(
        <div id="profile-tab" className="container-fluid">
          
            <div className="image-container">
                <img  id="profile-tab-image" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="dev in the abderrahmane mustapha portfolio" />
            </div>            
            <div className="row justify-content-center">

                <div className="col-3 ">
                    <div className="rounded-circle text-center">                    
                        <h5>Articles<br></br></h5>
                        <span>6</span>
                    </div>
                </div>

                <div className="col-3 mx-1">
                    <div className="rounded-circle text-center">
                        <h5>Views<br></br></h5>                   
                        <span>4000</span>
                    </div>
                </div>               

                <div className="col-3 ">
                    <div className="rounded-circle text-center">                   
                        <h5>Followers<br></br></h5>
                        <span>250</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
    
}

export function  Github (){

    return(
        <div id="profile-tab">Github</div>
    )    

}

export function Twitter (){

    return(
        <div id="profile-tab">Twitter</div>
    )
    
}
export function Skills (){

    return(
        <div id="profile-tab">Skills</div>
    )
    
}
export function Achievements (){
   
    return(
        <div id="profile-tab"> Achievements</div>
    )
    
}