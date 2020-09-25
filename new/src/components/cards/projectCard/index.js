import React from "react"

 export default class ProjectCard extends React.Component{


    render(){
        return(
            <div className="card mb-3 p-0">

                <img 
                    src="https://miro.medium.com/max/640/1*K2iFkHhIjhV-f9bkE3ZhJg.png" 
                    alt="project in abderrahmane mustapha protofolio"
                    class="img-thumbnail p-0"
                 />

                <div className="card-body p-1">
                    this project is for you
                </div>

            </div>
        )
    }

}