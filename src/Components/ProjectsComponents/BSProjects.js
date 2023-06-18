import Project from './Project'
import {BS_Registration_Form,Demo_Website,Website_Home_Page} from '../../Images'

function BSProjects(){

    let project_name=["Bootstrap Registration Form","Demo Website","Website Home page"]
    let project_links=[ "https://sam-ebenezer.github.io/Sam-VIT-Vellore-MERN/3.%20Boostrap/task%203/task3.html",
                        "https://sam-ebenezer.github.io/Sam-VIT-Vellore-MERN/3.%20Boostrap/task%204/task4.html",
                        "https://sam-ebenezer.github.io/Sam-VIT-Vellore-MERN/3.%20Boostrap/task%206/task6.html",
                     ]
    let images=[BS_Registration_Form,Demo_Website,Website_Home_Page]
    
    let project_cards=[]

    for(let i=0;i<project_links.length;i++){
        project_cards.push(<Project num={i+1} link={project_links[i]} name={project_name[i]} img={images[i]}/>)
    }

    return(
        <div className='m-5' style={{clear: "left"}}>
            <h4 className='mt-5'>Bootstrap Projects</h4>
            <hr />
            {project_cards}
            
        </div>
    )
}


export default BSProjects