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
                        <ProfileRouters />
                        <MainProfileBar />
                    </div>
                </div>            
            </div>
            
            </>
        )
    }
}

export default Profile