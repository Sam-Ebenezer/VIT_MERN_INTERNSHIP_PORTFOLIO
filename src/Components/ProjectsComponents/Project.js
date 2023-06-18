

function Project(props){
    return(
        <a className="hover-zoom" href={props.link} target="_blank" rel="noreferrer">
           <div className="card m-3" style={{width: "18rem",float:"left"}}>
                <img className="card-img-top" src={props.img} alt={props.name +" image"} style={{height: "15rem"}}/>
                    <div className="card-body">
                        <p className="card-text">{props.num+". "+props.name}</p>
                    </div>
            </div>
        </a>
    )
}

export default Project


