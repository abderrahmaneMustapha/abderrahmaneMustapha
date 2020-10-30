import React from "react";
import "./project.css";
class Project extends React.Component {
    render() {
        const data = this.props.location.state.data;
        return (
            <section className="container-fluid p-1" id="project-page">
                <div className="row">
                    <div className="col-md-5 col-sm-12 desc-container">
                        <div className="desc-main ">
                            <header>
                                <h2 className="h2">{data.name}</h2>
                            </header>
                            <section className="text-break w-100 mb-5">
                                {data.overview}
                            </section>
                            <section className="tags mt-2">
                                {data.tags.map((element) => (
                                    <span className="mx-1">{element+" ,"}</span>
                                ))}
                            </section>
                        </div>
                    </div>

                    <div className="col-md-7 col-sm-12">
                        <div className="image-container mx-auto w-80">
                            <img
                                src={data.main_image.src}
                                alt={data.main_image.alt}
                                className="d-block w-100"
                            />
                        </div>

                        <div className="text-container mt-5">
                            <p className="my-2">{data.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;
