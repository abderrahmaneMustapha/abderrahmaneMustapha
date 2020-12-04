import React from "react";
import BlogListCard from "../../cards/blogListCard/index";

import "./side.css";
let list = [
    {
        title: "Paypal and django",
        alt: "show an easy way, how you can add paypal to django ",
        src:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",
        link:
            "https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8",
    },
    {
        title: "Send emails with django",
        alt: "show an easy way, how you can add paypal to django ",
        src:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",
        link:
            "https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8",
    },
    {
        title: "Drag and drop image",
        alt: "show an easy way, how you can add paypal to django ",
        src:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",
        link:
            "https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8",
    },
    {
        title: "React comment reply",
        alt: "show an easy way, how you can add paypal to django ",
        src:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",
        link:
            "https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8",
    },
    {
        title: "Covid dash part-1",
        alt: "show an easy way, how you can add paypal to django ",
        src:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",
        link:
            "https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8",
    },
    {
        title: "Covid dash part-2",
        alt: "show an easy way, how you can add paypal to django ",
        src:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",
        link:
            "https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8",
    },
];
class SideNav extends React.Component {
    constructor() {
        super();

        this.state = {
            small_screen: window.matchMedia("(max-width:48rem)").matches,
            hide: window.matchMedia("(max-width:48rem)").matches,
        };
    }

    showSideBar = async () => {
        await this.setState({
            hide: false,
            small_screen: false,
        });
    };

    hideSideBar = () => {
        this.setState({
            hide: true,
            small_screen: true,
        });
    };

    render() {
        return (
            <>
                {this.state.hide && this.state.small_screen ? (
                    <div
                        onClick={() => {
                            this.showSideBar();
                        }}
                        style={{ position: "absolute" }}
                    >
                        CLick
                    </div>
                ) : (
                    <>
                        <aside id="side-nav">
                            { 
                                window.addEventListener("click", () => {
                                  
                                   console.log(window.matchMedia("(max-width:48rem)").matches)
                                    this.hideSideBar();
                                
                                   
                                })}
                            <header id="side-nav-header" className="my-4">
                                <div className="row my-3">
                                    <div className="col-md-4 col-sm-2">
                                        <img
                                            className="d-block w-100 rounded-circle"
                                            src="https://ik.imagekit.io/ykyl2djdvw/23f8c228-9596-4b80-9a13-c0f0f22a9652_JZl9Fz0tSB-v.jpg"
                                            alt="toumi abderrahmane in his portfolio profile"
                                        />
                                    </div>
                                    <div id="my-name" className="col-md-7 p-0">
                                        Toumi Mustapha Abderrahmane
                                    </div>
                                </div>{" "}
                                {/*profile pic and name here*/}
                                <div></div> {/* statu here */}
                            </header>
                            <nav id="blogs-list-side-nav">
                                <header className="mb-3">
                                    <h6 className="h-75 mr-auto">
                                        Articles List
                                    </h6>
                                </header>
                                <ul className="list-unstyled">
                                    {list.map((element) => (
                                        <BlogListCard
                                            title={element.title}
                                            alt={element.alt}
                                            src={element.src}
                                            link={element.link}
                                        />
                                    ))}
                                </ul>
                            </nav>
                            <div>
                                <ul className="list-unstyled">
                                    <li title="Message me" className=""></li>
                                    <li
                                        title="Send a feedback"
                                        className=""
                                    ></li>
                                    <li
                                        title="Download source code"
                                        className=""
                                    ></li>
                                </ul>
                            </div>
                        </aside>
                    </>
                )}
            </>
        );
    }
}

export default SideNav;
