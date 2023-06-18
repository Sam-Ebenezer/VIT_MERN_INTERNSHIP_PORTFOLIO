import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope,faTasks,faMessage,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {Instagram,Facebook,Github,Linkedin } from '../../Images'
function ContactForm(){
    return(
        <span className="col-md-6 bg-dark mx-2 my-5">
            <form id="contact-form" name="contact-form" >


            <div className="row m-5">
                <div className="col-md-12">
                    <div className="md-form mb-0 form-floating">
                    
                        <input type="text" id="name" name="name" className="form-control" />
                        <label for="name" className="">
                        <FontAwesomeIcon icon={faUser} className='mx-2'/>
                        Your name</label>
                    </div>
                </div>
            </div>


            <div className="row m-5">
                <div className="col-md-12">
                    <div className="md-form mb-0 form-floating">
                    
                        <input type="text" id="email" name="email" className="form-control" />
                        <label for="email" className="">
                        <FontAwesomeIcon icon={faEnvelope} className='mx-2'/>
                        Your email</label>
                    </div>
                </div>
            </div>

          
            <div className="row m-5">
                <div className="col-md-12">
                    <div className="md-form mb-0 form-floating">
                    
                        <input type="text" id="subject" name="subject" className="form-control" />
                        <label for="subject" className="">
                        <FontAwesomeIcon icon={faTasks} className='mx-2'/>
                        Subject</label>
                    </div>
                </div>
            </div>
          
            <div className="row m-5">
                <div className="col-md-12">
                    <div className="md-form form-floating">
                        <textarea type="text" id="message" name="message" rows="10" className="form-control md-textarea"></textarea>
                        <label for="message"><FontAwesomeIcon icon={faMessage} className='mx-2'/>Your message</label>
                    </div>

                </div>
            </div>
           
          
                    <div class="row col-md-12 m-5 mb-0">
                    <span class="col-sm-4" ></span>
                    <button class=" col-sm-2 mb-3 btn btn-warning text-white" type="submit">Send <FontAwesomeIcon icon={faPaperPlane} /></button>
                    <span class="col-sm-3" ></span>
                    </div>
          
            </form>
            <div className="text-center px-2 mb-5">
            <h3 id="other_media" className="m-5 mt-0 text-center text-white pb-0">You can also contact me using:</h3>
           
                <a href="./#/Contact"><img src={Instagram} alt="Instagram icon" className="icon_class  m-0 mx-3"/></a>
                <a href="./#/Contact"><img src={Facebook} alt="Facebook icon" className="icon_class  m-0 mx-3"/></a>
                <a href="./#/Contact"><img src={Linkedin} alt="Linkedin icon" className="icon_class  m-0 mx-3"/></a>
                <a href="https://github.com/Sam-Ebenezer"><img src={Github} alt="Github icon" className="icon_class m-0 mx-3"/></a>
            </div>
        </span>
    )
}

export default ContactForm