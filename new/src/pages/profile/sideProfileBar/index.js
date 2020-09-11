import React from "react"
import "./side.css"

class SideProfileBar extends React.Component{
    

    render(){
        return(
            <div  id="side-profile-bar">
                    <div className="main ">
                        <section >
                            <header>
                            <h5 className="h5 text-center">Toumi Mustapha Abderrahmane</h5>
                            </header>

                            <div className="image-container">
                                <img 
                                className="d-block w-75 mx-auto mt-auto rounded-circle"
                                src="http://abderrahmane-mustapha.codes/img/me.jpg" /> 
                            </div>
                        </section>

                    </div>
            </div>
        )
    }
}

export default SideProfileBar