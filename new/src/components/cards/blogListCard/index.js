import React from "react"
import {Link} from "react-router-dom"
import "./card.css"
class BlogListCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
           <Link to={this.props.link} target="_blank">
             <li  className="media blog-side-list-item">
                <div className="image-container">
                <img src={this.props.src} className="blog-list-card-img" alt={this.props.alt} />
                </div>
                <div className="media-body">
                <h6 className="mt-0 mb-1">{this.props.title}</h6>
                </div>
            </li>
           </Link>
        )
    }
}

export default BlogListCard