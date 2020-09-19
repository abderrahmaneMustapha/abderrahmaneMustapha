import React from "react"
import "./tabs.css"


export function Dev(){
  
    return(
        <div id="profile-tab" className="container-fluid">
            <h1 className="main-text">Dev</h1> 
            <div className="row justify-content-center">

                <div className="col-3 ">
                    <div className="text-center">                    
                        <h5>Articles<br></br></h5>
                        <span>6</span>
                    </div>
                </div>

                <div className="col-3 mx-1">
                    <div className="text-center">
                        <h5>Views<br></br></h5>                   
                        <span>5,089</span>
                    </div>
                </div>               

                <div className="col-3 ">
                    <div className="text-center">                   
                        <h5>Followers<br></br></h5>
                        <span>202</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
    
}

export function  Github (){

    return(
        <div id="profile-tab" className="container-fluid">
           
             <h1 className="main-text">Github</h1>         
            <div className="row justify-content-center">

                <div className="col-3 ">
                    <div className="text-center">                    
                        <h5>Repo<br></br></h5>
                        <span>27</span>
                    </div>
                </div>

                <div className="col-3 mx-1">
                    <div className="text-center">
                        <h5>Followers<br></br></h5>                   
                        <span>67</span>
                    </div>
                </div>               

                <div className="col-3 ">
                    <div className="text-center">                   
                        <h5>Pull Requests<br></br></h5>
                        <span>10</span>
                    </div>
                </div>
                
            </div>
        </div>
    )    

}

export function Twitter (){

    return(
        <div id="profile-tab" className="container-fluid">
           
        <h1 className="main-text">Twitter</h1>         
       <div className="row justify-content-center">

           <div className="col-3 ">
               <div className="text-center">                    
                   <h5>Posts<br></br></h5>
                   <span>102</span>
               </div>
           </div>

           <div className="col-3 mx-1">
               <div className="text-center">
                   <h5>Followers<br></br></h5>                   
                   <span>320</span>
               </div>
           </div>               

           <div className="col-3 ">
               <div className="text-center">                   
                   <h5>Pull Requests<br></br></h5>
                   <span>10</span>
               </div>
           </div>
           
       </div>
   </div>
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