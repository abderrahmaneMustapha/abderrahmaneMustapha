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
        <div id="profile-tab">
            <div className="header-sec-text-size p-md-5 text-center">
                <spna className="h1">A</spna> full stack web developer  who use <span className="h2"> Python </span>
                and <span className="h2" > Javascript </span>
                i like to use <span className="h2"> Django </span> or 
                <span className="h2"> Nodejs </span> for the backend part ,  
                and <span className="h2"> React </span> for the frontend part  
                im also familiar with <span className="h2"> Agile </span> methodologys , and other
                software engeneering fields
                currently im involved in the development of <span className="h2"> Open source </span>
                projects
                in community lovers and dzcode 
            </div>
        </div>
    )
    
}
export function Achievements (){
   
    return(
        <div id="profile-tab"> 
         Coming soon
        </div>
    )
    
}