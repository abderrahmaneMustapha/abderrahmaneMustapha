import React from "react";
import { ProjectsList } from "./projects/index";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./home.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            main_project_image: {
                src: "https://ik.imagekit.io/ykyl2djdvw/learno_SPjc6Wg3X.JPG",
                alt: "learno image abderrahmane mustapha toumi potfolio",
            },
        };
        this.handleImageClick = this.handleImageClick.bind();
    }

    handleImageClick = (event) => {
        let image = event.target;
        if (image.src) {
            this.setState({
                main_project_image: { src: image.src, alt: image.alt },
            });
        }
    };
    render() {
        return (
            <div>
                <img
                    src={this.state.main_project_image.src}
                    alt={this.state.main_project_image.alt}
                    className="full-width-back-image"
                />
                <div className="row" id="main-home">
                    <header className="col-md-5">
                        <h5 className="f-c-g header-sec-text-size">
                            Hello there its Toumi Mustapha Abderrahmane
                        </h5>
                        <h1 className="f-c-gr-1 header-main-text-size">
                            I'm software engineering student and a full stack
                            webdeveloper{" "}
                        </h1>
                        <h5 className="f-c-g header-sec-text-size">
                            passionate and ready to face challenges and solve
                            problems
                        </h5>
                    </header>
                    <div className="col-md-7 col-sm-12 hide-mobile">
                        <img
                            className="d-block w-100"
                            src={this.state.main_project_image.src}
                            alt={this.state.main_project_image.alt}
                        />
                    </div>
                    <div className="col-12">
                        <ProjectsList
                            handleImageClick={this.handleImageClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
