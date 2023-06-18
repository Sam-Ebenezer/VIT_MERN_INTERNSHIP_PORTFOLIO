import { Link } from "react-router-dom"
import { Portfolio_Icon } from "../Images"

function Nav(){
    return(
        <nav className="navbar bg-light">
           
            <a href="/" className="navbar-brand ms-3 ">
            <img src={Portfolio_Icon} alt="Portfolio_Image" className="icon_class" />
                <b className="mx-3">Portfolio</b>
                
            </a>
            <div className="navbar nav">
                <Link to="./" className="nav-link text-dark">Home</Link>
                <Link to="./About" className="nav-link text-dark">About</Link>
                <Link to="./Projects" className="nav-link text-dark">Projects</Link>
                <Link to="./Contact" className="nav-link text-dark">Contact</Link>
            </div>

        </nav>
    )
}

export default Nav