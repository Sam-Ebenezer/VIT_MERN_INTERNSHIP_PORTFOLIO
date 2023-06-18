import {Instagram,Facebook,Github,Linkedin } from '../../Images'

function Medialinks(){
    return(
        <div className='main_page_media_links'>
                <a href="./#/"><img src={Instagram} alt="Instagram icon" className="icon_class  m-0 m-3"/></a><br />
                <a href="./#/"><img src={Facebook} alt="Facebook icon" className="icon_class  m-0 m-3"/></a><br />
                <a href="./#/"><img src={Linkedin} alt="Linkedin icon" className="icon_class  m-0 m-3"/></a><br />
                <a href="https://github.com/Sam-Ebenezer"><img src={Github} alt="Github icon" className="icon_class m-0 m-3"/></a><br />
        </div>
    )
}

export default Medialinks