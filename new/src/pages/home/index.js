import React from "react"
import {ProjectsList} from "./projects/index"
import NavBar from "../../components/navs/navbar/index"
import SideNav from "../../components/navs/sidenav"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './home.css'

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
            
            <div className="row" id="main-home">
                <header className="col-md-5"  >
                    <h5 className="f-c-g header-sec-text-size" >Hello there its Toumi Mustapha Abderrahmane</h5>
                    <h1 className="f-c-gr-1 header-main-text-size">I'm software engineering student and a full stack webdeveloper </h1>
                    <h5 className="f-c-g header-sec-text-size">passionate and ready to face challenges and solve problems</h5>
                </header>
                <div className="col-md-7 col-sm-12" >
                    <img 
                    className="d-block w-100" 
                    src={this.state.main_project_image.src} 
                    alt={this.state. main_project_image.alt}

                    />
                </div>
                <div className="col-12">
                <ProjectsList  handleImageClick={this.handleImageClick}/>
                </div>
            </div>
                
         
        )
    }
}

export default Home