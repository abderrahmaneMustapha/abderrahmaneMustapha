import React from "react"
import {ProjectsList} from "./projects/index"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            main_project_image : 'http://abderrahmane-mustapha.codes/img/learno.jpg'
        }
    }
    render(){
        return(
            <div className="bg-b-to-b">
                <div className="row" id="main-home">
                    <div className="col-md-5" >
                        <h5 className="f-c-g" >Hello there its Toumi Mustapha Abderrahmane</h5>
                        <h1 className="f-c-gr-1">i'm software engineering student , and a full stack webdeveloper </h1>
                        <h5 className="f-c-g">passionate and ready to face challenges and solve problems</h5>
                    </div> 
                    <div className="col-md-7" >
                        <img className="d-block p-5 w-100" src={this.state. main_project_image}  />
                    </div>
                    <div className="col-12">
                    <ProjectsList />
                    </div>
                </div>
            </div>
         
        )
    }
}

export default Home