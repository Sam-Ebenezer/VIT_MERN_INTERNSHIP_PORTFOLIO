import AboutMe from "./AboutComponents/AboutMe"
import Education from "./AboutComponents/Education"
import Skills from "./AboutComponents/Skills"

function About(){
    return(
        <div className="row">
        <span className="col-sm"></span>
        <div className="text-white col-sm-8"> 
            <AboutMe />
            <Education />
            <Skills />
        </div>
        <span className="col-sm"></span>
        </div>
    )
}

export default About