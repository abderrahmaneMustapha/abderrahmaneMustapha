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
                            <header >
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            </header>

                            <hr></hr>
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