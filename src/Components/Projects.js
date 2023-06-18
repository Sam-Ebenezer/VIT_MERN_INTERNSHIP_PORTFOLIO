import ReactProjects from "./ProjectsComponents/ReactProjects"
import JSProjects from "./ProjectsComponents/JSProjects"
import BSProjects from "./ProjectsComponents/BSProjects"
function Projects(){
    return(
        <div className="my-3 mx-3 p-3 text-white">
            <h3>Here are some of the projects i have done:</h3>
            <ReactProjects />
            <JSProjects />
            <BSProjects />
        </div>
    )
}

export default Projects