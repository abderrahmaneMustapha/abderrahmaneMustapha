import React from "react"
import "./card.css"
class BlogListCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
           <a href={this.props.link} target="_blank">
             <li  className="media blog-side-list-item">
                <div className="media-body">
                <h6 className="mt-0 mb-1">{this.props.title}</h6>
                </div>
            </li>
           </a>
        )
    }
}

export default BlogListCard