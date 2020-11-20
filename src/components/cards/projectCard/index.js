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
                className="card bg-transparent border-0 mb-4 mt-2"
                onClick={() => {
                    this.props.onClick();
                }}
            >
                <img
                    src={data.main_image.src}
                    alt={data.main_image.alt}
                    className="img-thumbnail p-0"
                />

                <div className="text p-1">
                    <header className="text-center font-weight-bold">
                        {data.short_name}
                    </header>
                    <div className="tags">
                        {data.tags.map((element) => (
                            <span className="mx-1 badge badge-warning">{element}</span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
