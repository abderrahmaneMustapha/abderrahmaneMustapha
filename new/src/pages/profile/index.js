import React from "react"
import SideProfileBar from "./sideProfileBar/index"

class Profile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <div id="profile" className="container">
                
                <div className="row">
                    <div className="col-md-4">
                    <SideProfileBar />
                    </div>
                </div>            
            </div>
            
            </>
        )
    }
}

export default Profile