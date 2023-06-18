import Project from './Project'
import {Login_Form,Registration_Form,Train_Animation} from '../../Images'

function JSProjects(){

    let project_name=["Login Form","Registration Form","Train Animation"]
    let project_links=[ "https://sam-ebenezer.github.io/Sam-VIT-Vellore-MERN/4.%20Javascript/task%204/task4.html",
                        "https://sam-ebenezer.github.io/Sam-VIT-Vellore-MERN/4.%20Javascript/task%209/task9.html",
                        "https://sam-ebenezer.github.io/Sam-VIT-Vellore-MERN/4.%20Javascript/task%208/task8.html",
                     ]
    let images=[Login_Form,Registration_Form,Train_Animation]
    
    let project_cards=[]

    for(let i=0;i<project_links.length;i++){
        project_cards.push(<Project num={i+1} link={project_links[i]} name={project_name[i]} img={images[i]}/>)
    }

    return(
        <div className='m-5' style={{clear: "left"}}>
            <h4 className='mt-5'>Javascript Projects</h4>
            <hr />
            {project_cards}
            
        </div>
    )
}


export default JSProjects