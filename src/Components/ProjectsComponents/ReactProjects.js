import Project from './Project'
import {Calculator,Word_Counter,Color_Picker,Client_Table_Axios,Age_Calculator} from '../../Images'

function ReactProjects(){

    let project_name=["Responsive Word Counter","Calculator","Color Picker","Records Display using Axios","Age Calculator"]
    let project_links=[ "https://sam-ebenezer.github.io/VIT_MERN_INTERNSHIP_WORD_COUNTER/",
                        "https://sam-ebenezer.github.io/VIT_MERN_INTERNSHIP_CALCULATOR/",
                        "https://sam-ebenezer.github.io/VIT_MERN_INTERNSHIP_COLOR_PICKER/",
                        "https://sam-ebenezer.github.io/VIT_MERN_INTERNSHIP_AXIOS_DISPLAY/",
                        "https://sam-ebenezer.github.io/VIT_MERN_INTERNSHIP_AGE_CALCULATOR/"
                     ]
    let images=[Word_Counter,Calculator,Color_Picker,Client_Table_Axios,Age_Calculator]
    
    let project_cards=[]

    for(let i=0;i<project_links.length;i++){
        project_cards.push(<Project num={i+1} link={project_links[i]} name={project_name[i]} img={images[i]}/>)
    }

    return(
        <div className='m-5' style={{clear: "left"}}>
            <h4 className='mt-5'> React Projects</h4>
            <hr />
            
            {project_cards}
        </div>
    )
}


export default ReactProjects