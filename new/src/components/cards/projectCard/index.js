import React from "react";
import "./project.css";

export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        };
    }

    render() {
        const data = this.state.data;

        return (
            <div
                id="project-card"
                className="card mb-3 bg-transparent border-0"
                onClick={() => {
                    this.props.onClick();
                }}
            >
                <img
                    src={data.main_image.src}
                    alt={data.main_image.alt}
                    class="img-thumbnail p-0"
                />

                <div className=" text p-1">
                    <header className="text-center font-weight-bold">
                        {data.short_name}
                    </header>
                    <div>
                        {data.tags.map((element) => (
                            <span className="mx-1">{element}</span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
