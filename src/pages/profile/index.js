import React from "react"
import SideProfileBar from "./sideProfileBar/index"
import MainProfileBar from "./mainProfilebar/index"
import ProfileRouters from "./router"

import "./profile.css"

class Profile extends React.Component{
 

    render(){
        return(
        
            <div id="profile" className="container">
            <img  id="profile-image-bg" src="https://www.flaticon.com/svg/static/icons/svg/2502/2502399.svg" alt="abderrahme profile background by tabs" />
                <div className="row">
                    <div className="col-md-4">
                    <SideProfileBar />
                    </div>
                    <div className="col-md-8">  
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <ProfileRouters />
                                    
                                </div>                                
                                <div className="col-12">
                                    <MainProfileBar />
                                </div>                            
                            </div>
                        </div>                      
                        
                    </div>
                </div>            
            </div>
    
        )
    }
}

export default Profile