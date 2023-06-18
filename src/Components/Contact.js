import ContactForm from "./ContactComponents/ContactForm"
import ContactMe from "./ContactComponents/ContactMe"
function Contact(){
    return(
        <div className="row">
            <ContactMe />
            <ContactForm />
        </div>
    )
}

export default Contact