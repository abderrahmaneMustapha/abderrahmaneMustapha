import React from "react";
import ProjectCard from "../../components/cards/projectCard/index";
class Projects extends React.Component {
    state = {
        data: {},
        loading: true,
    };

    componentDidMount() {
        fetch("https://api.jsonbin.io/b/5f89e01165b18913fc5ff104/3", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    data: data,
                    loading : false
                });
            });
    }
    handleGotoProject = (project) => {
        this.props.history.push({pathname : `/project/${project.slug}`, state : { data : project}});
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <nav>
                            <header>
                                <form class="form-inline">
                                    <input
                                        class="form-control mr-sm-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button
                                        class="btn btn-outline-success my-2 my-sm-0"
                                        type="submit"
                                    >
                                        Search
                                    </button>
                                </form>
                            </header>

                            <hr></hr>
                        </nav>
                    </div>
                    <div className="col-md-8">
                        <div className="row justify-content-center">
                            {this.state.loading ? (
                                <div>Loading ... </div>
                            ) : (
                                this.state.data.projects.map((element) => (
                                    <div  className="col-md-4">
                                        <ProjectCard
                                            key={element.id}
                                            data={element}
                                            onClick={()=>{
                                                this.handleGotoProject(element)
                                            }}
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
