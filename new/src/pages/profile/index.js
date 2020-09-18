import React from "react"
import SideProfileBar from "./sideProfileBar/index"
import MainProfileBar from "./mainProfilebar/index"
import ProfileRouters from "./router"


class Profile extends React.Component{
 

    render(){
        return(
            <>
            <div id="profile" className="container">
                
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
            
            </>
        )
    }
}

export default Profile