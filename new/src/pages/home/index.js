import React from "react"
import {ProjectsList} from "./projects/index"
import NavBar from "./navbar/index"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            main_project_image :  {
                 src : 'http://abderrahmane-mustapha.codes/img/learno.jpg', 
                alt: "learno image abderrahmane mustapha toumi potfolio"
            }
        }
        this.handleImageClick = this.handleImageClick.bind()
    }

    handleImageClick = (event)=>{
        let image = event.target
        if(image.src){
            this.setState({
                main_project_image : {src: image.src,  alt:image.alt}
            })
            
        }
    }
    render(){
        return(
            <div className="bg-b-to-b">
             <NavBar />
                <div className="row" id="main-home">
                    <div className="col-md-5" >
                        <h5 className="f-c-g" >Hello there its Toumi Mustapha Abderrahmane</h5>
                        <h1 className="f-c-gr-1">i'm software engineering student , and a full stack webdeveloper </h1>
                        <h5 className="f-c-g">passionate and ready to face challenges and solve problems</h5>
                    </div> 
                    <div className="col-md-7" >
                        <img 
                        className="d-block p-5 w-100" 
                        src={this.state.main_project_image.src} 
                        alt={this.state. main_project_image.alt}

                        />
                    </div>
                    <div className="col-12">
                    <ProjectsList  handleImageClick={this.handleImageClick}/>
                    </div>
                </div>
            </div>
         
        )
    }
}

export default Home