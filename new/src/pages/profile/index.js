import React from "react"
import SideProfileBar from "./sideProfileBar/index"
import MainProfileBar from "./mainProfilebar/index"
import {Github,Twitter,Skills,Achievements,Dev} from "./tabs/index"
import {
Route,
} from "react-router-dom";

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
                        <Route path="/profile?tab=twitter">
                                <Twitter/>
                        </Route>
                        <Route path="/profile?tab=github">
                                <Github/>
                        </Route>
                        <Route path="/profile?tab=dev">
                                <Dev/>
                        </Route>
                        <Route path="/profile?tab=skills">
                                <Skills/>
                        </Route>
                        <Route path="/profile?tab=achievements">
                                <Achievements/>
                        </Route>
                        <MainProfileBar />
                    </div>
                </div>            
            </div>
            
            </>
        )
    }
}

export default Profile