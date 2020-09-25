import React from "react"
import ProjectCard from "../../components/cards/projectCard/index"
 class Project extends React.Component{
    
    render(){
        console.log("aezazeaze azeaze azeazeaze")
        return(
           <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <nav>
                            <header className="border-top border-bottom">
                                            dazdazdazd
                                            azdazdazdazd
                                            dazdazd
                            </header>
                        </nav>
                    </div>
                    <div className="col-md-8">
                        <div className="row justify-content-center">
                            { 
                            [0,0,0,0].map(
                                element=>(
                                    <div className="col-md-4">
                                        <ProjectCard /> 
                                    </div>                                
                                )
                            )
                            }
                        </div>                      
                    </div>
                </div>               
           </div>
        )
    }
}

export default Project