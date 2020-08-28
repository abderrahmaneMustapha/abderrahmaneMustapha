import React from "react"
import './projects.css'
const  projectsList =  [{id : "12", name: "Project name", image: "http://abderrahmane-mustapha.codes/img/learno.jpg"},
{id : "15" , name: "Project name", image: "http://abderrahmane-mustapha.codes/img/assassins.jpg"},
{id : "14",name: "Project name", image: "http://abderrahmane-mustapha.codes/img/dash.gif"},
{id : "19", name: "Project name", image: "http://abderrahmane-mustapha.codes/img/learno.jpg"},]

class ProjectsList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            projectsList : projectsList
        }
    }
    render(){
        return(
            <div id="home-projects-container" className="container-fluid py-5">
            <div className="row">
               
                    {
                        this.state.projectsList.map(element=>(
                            <div onClick={this.props.handleImageClick}  key={element.id} className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={element.image} alt={"image for "+element.name} />
                                <div className="card-body">
                                    <h5 className="f-c-gr-1">{element.name}</h5>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                
            </div>
        </div>
        )
    }
}

export {ProjectsList}