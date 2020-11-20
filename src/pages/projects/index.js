import React from "react";
import ProjectCard from "../../components/cards/projectCard/index";

class Projects extends React.Component {
    state = {
        data: {},
        search: "",
        loading: true,
    };

    componentDidMount() {
        fetch("https://api.jsonbin.io/b/5f89e01165b18913fc5ff104/10", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    data: data,
                    search: data.projects,
                    loading: false,
                });
            });
    }
    handleSearchClick = (event) => {
        event.preventDefault();
        const value = document.getElementById("search").value;
        let results = [];
        this.state.data.projects.forEach((element) => {
            if (
                element.name.toLowerCase().includes(value.toLowerCase()) ||
                element.overview.toLowerCase().includes(value.toLowerCase())
            ) {
                results.push(element);
            }
        });
        this.setState({
            search: results,
        });
    };
    handleGotoProject = (project) => {
        this.props.history.push({
            pathname: `/project/${project.slug}`,
            state: { data: project },
        });
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <nav>
                            <header>
                                <form className="form-inline my-2 my-lg-0">
                                    <input
                                        className="form-control mr-sm-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        id="search"
                                    />
                                    <button
                                        className="btn btn-outline-success my-2 my-sm-0"
                                        type="submit"
                                        onClick={this.handleSearchClick}
                                    >
                                        Search
                                    </button>
                                </form>
                            </header>

                            <hr></hr>
                        </nav>
                    </div>
                    <div className="col-md-8">
                        <div className="container ">
                            <div className="row justify-content-around ">
                                {!this.state.search ? (
                                    <div>Nothing to search for here</div>
                                ) : (
                                    this.state.search.map((element) => (
                                        <div className="col-md-4">
                                            <ProjectCard
                                                key={element.id}
                                                data={element}
                                                onClick={() => {
                                                    this.handleGotoProject(
                                                        element
                                                    );
                                                }}
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
