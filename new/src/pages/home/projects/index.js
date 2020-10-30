import React from "react";
import "./projects.css";
const projectsList = [
    {
        id: "12",
        name: "Learn now",
        image: "https://ik.imagekit.io/ykyl2djdvw/learno_SPjc6Wg3X.JPG",
    },
    {
        id: "15",
        name: "Donate",
        image: "https://ik.imagekit.io/ykyl2djdvw/doante_HsAQkV_jNZNP.JPG",
    },
    {
        id: "14",
        name: "dz startups",
        image: "https://ik.imagekit.io/ykyl2djdvw/dzstartups_DUtVqkv2XMD.JPG",
    },
    {
        id: "19",
        name: "Limitless learning",
        image: "https://ik.imagekit.io/ykyl2djdvw/limitless_anmAwXEbQbAhm.JPG",
    },
];

class ProjectsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectsList: projectsList,
        };
    }
    render() {
        return (
            <div id="home-projects-container" className="container">
                <div className="d-flex flex-row">
                    {this.state.projectsList.map((element) => (
                        <div
                            onClick={this.props.handleImageClick}
                            key={element.id}
                            className="col-md-3"
                        >
                            <div className="card">
                                <img
                                    className="card-img-top"
                                    src={element.image}
                                    alt={"image for " + element.name}
                                />
                                <div className="card-body">
                                    <h5 className="f-c-gr-1">{element.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export { ProjectsList };
