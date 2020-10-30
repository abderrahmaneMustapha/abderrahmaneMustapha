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
                                src="https://ik.imagekit.io/ykyl2djdvw/23f8c228-9596-4b80-9a13-c0f0f22a9652_JZl9Fz0tSB-v.jpg"
                                alt=" Toumi abderrahmane in his portfolio XD"
                                 /> 
                            </div>
                        </section>

                    </div>
            </div>
        )
    }
}

export default SideProfileBar