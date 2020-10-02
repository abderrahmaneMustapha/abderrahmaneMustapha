import React from "react"
import "./project.css"
class Project extends React.Component {


    render() {
        return (
            <section className="container-fluid p-1" id="project-page">
                <div className="row">

                    <div className="col-md-5 col-sm-12 desc-container">
                        <div className="desc-main ">
                            <header>
                                <h3 className="h3">Project title</h3>
                            </header>
                            <section className="text-break w-100">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque veli
                            </section>
                        </div>

                    </div>

                    <div className="col-md-7 col-sm-12">

                        <div className="image-container mx-auto w-80">
                            <img    
                                src="https://miro.medium.com/max/640/1*K2iFkHhIjhV-f9bkE3ZhJg.png" 
                                alt="project title in abderrahmane toumi portfolio page" 
                                className="d-block w-100"
                                                  
                            />
                        </div>

                        <div className="text-container my-2">
                            <p className="mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque velit sit amet purus viverra blandit. Proin varius feugiat pellentesque. Vestibulum sollicitudin elit nec felis imperdiet, sed condimentum arcu commodo. Integer pharetra urna nec mattis accumsan. Integer ullamcorper, dolor at rhoncus posuere, arcu lectus ultrices metus, nec molestie est purus a diam. Aliquam vitae venenatis augue. Curabitur id eleifend orci, eget interdum enim. Praesent tincidunt gravida tempor. Nulla quis fringilla purus. Etiam euismod mi nec feugiat iaculis. Integer nibh mi, convallis ac justo eu, luctus porta justo.

                                Etiam ac elit tristique, fringilla elit sagittis, aliquam orci. Sed vitae pulvinar dolor, nec auctor nulla. Integer suscipit efficitur accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec pellentesque neque, at aliquam lacus. Donec lacus ipsum, tempor eu augue eu, elementum suscipit erat. Nam vulputate a urna et bibendum. Curabitur id viverra erat. Vestibulum dui urna, lobortis et mattis id, elementum ut enim. Sed commodo sit amet ex ut tincidunt. Pellentesque nec est ut sapien tincidunt semper id interdum justo.

                                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ultricies, massa sit amet volutpat aliquam, mi neque scelerisque ligula, at viverra lorem nulla nec dui. Praesent imperdiet interdum lectus, eget ultricies justo finibus vel. Suspendisse potenti. Vivamus at purus id lorem posuere lobortis vel sit amet felis. Praesent malesuada scelerisque dolor quis feugiat. Vivamus et leo consequat, pellentesque ipsum in, facilisis erat. Fusce ut metus dapibus, vestibulum neque in, faucibus lectus. Maecenas id euismod felis. Morbi orci velit, placerat at ornare id, ullamcorper at nulla. Curabitur maximus ex dolor. Donec in tincidunt mauris. Integer in magna consectetur, imperdiet elit sed, accumsan lectus. Pellentesque ut condimentum ligula. Vivamus mauris leo, placerat non massa id, tempus consectetur magna.

                                Etiam tempus ante at enim semper, eget aliquam ante tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non mollis nulla. Nulla facilisi. Sed faucibus risus at vestibulum iaculis. Fusce condimentum eu elit eu interdum. Quisque aliquet, mi in blandit fermentum, quam magna placerat felis, eget lacinia felis est in turpis. Aliquam rhoncus ultrices diam, ac elementum arcu auctor ac. Ut auctor, eros ut placerat euismod, justo est interdum dui, eget auctor velit dui at orci. Integer sagittis urna vulputate justo placerat, vel lobortis justo laoreet. Mauris at neque et lacus porttitor porta at nec lorem. Fusce elementum massa ac ante pharetra, hendrerit egestas massa accumsan. Maecenas dictum pharetra sodales.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}

export default Project