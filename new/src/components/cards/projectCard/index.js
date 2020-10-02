import React from "react"
import "./project.css"

 export default class ProjectCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data :{slug: "title-project-1"}
        }
    }

    render(){
       
        return(
            <div  id="project-card" className="card mb-3 bg-transparent border-0" 
            onClick={(event)=>{
                this.props.handleGotoProject(this.state.data.slug)      
            }                       
            }>

                <img 
                    src="https://miro.medium.com/max/640/1*K2iFkHhIjhV-f9bkE3ZhJg.png" 
                    alt="project in abderrahmane mustapha protofolio"
                    class="img-thumbnail p-0"
                 />

                <div className=" text p-1">
                    <header className="text-center font-weight-bold">Title</header>
                    <div>
                        python , java, django, js
                    </div>
                </div>

            </div>
        )
    }

}