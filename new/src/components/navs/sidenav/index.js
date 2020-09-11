import React from "react"
import  BlogListCard  from "../../cards/blogListCard/index"

import './side.css'
let list = [{title:"Paypal and django", alt:"show an easy way, how you can add paypal to django ", src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg", link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"},
{title:"Send emails with django", alt:"show an easy way, how you can add paypal to django ", src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg", link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"},
{title:"Drag and drop image", alt:"show an easy way, how you can add paypal to django ", src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg", link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"},
{title:"React comment reply", alt:"show an easy way, how you can add paypal to django ", src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg", link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"},
{title:"Covid dash part-1", alt:"show an easy way, how you can add paypal to django ", src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg", link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"},
{title:"Covid dash part-2", alt:"show an easy way, how you can add paypal to django ", src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg", link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"}]
class SideNav extends React.Component{
  render(){
    return(
      <aside id="side-nav">
        <header id="side-nav-header" className="my-4"> 
            <div  className="row my-3">
              <div className="col-md-4">
              <img 
                  className="d-block w-100 rounded-circle"
                  src="http://abderrahmane-mustapha.codes/img/me.jpg" 
              /> 
              </div>
              <div  id="my-name" className="col-md-7 p-0">Toumi Mustapha Abderrahmane</div>
            </div> {/*profile pic and name here*/}
            <div></div> {/* statu here */}
        </header>
        <nav id="blogs-list-side-nav">
        <header className="mb-3">
          <h6 className="h-75 mr-auto">Articles List</h6>
        </header>
        <ul class="list-unstyled">
        
        {list.map(element=>(

          <BlogListCard 
            title={element.title} 
            alt={element.alt}
            src={element.src}
            link={element.link}
            />


        ))  
        }
                     
        </ul>
        </nav>
        <div>
          <ul className="list-unstyled">
            <li title="Message me" className=""></li>
            <li title="Send a feedback" className=""></li>
            <li title="Download source code" className=""></li>
          </ul>
        </div>
      </aside>
    )
      
  }
}

export default SideNav