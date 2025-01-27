import { Card } from "react-bootstrap";
import { Role } from "../Models/Role";
// import { NavLink } from "react-router-dom";

export default function Artist ({role}:{role: Role}) {

    const imageBase:string = "https://awkward-turquoise-hawk.myfilebase.com/ipfs/";

    const artistImage:string = imageBase + role.image;
   
   const placeholderImage:string = "/kevin.jpg";
     
    

    return(
    <div style={{margin:"40px"}}>
        {/* <h3>{role.character_name}  </h3> 
        <p>played by </p>
        <h4>{role.person_name}</h4> */}
     
          {/* <a href="#">Link */}
              <Card style={{ width: '300px' }}>
                <Card.Img variant="top" src={role.image ? artistImage : placeholderImage} width={200} />
                  <Card.Body>
                    <Card.Text>
                      <span>{role.character_name}</span>  - 
                      <span>played by </span>  - 
                      <span>{role.person_name}</span>
                    </Card.Text>         
                  </Card.Body>
              </Card>
              {/* </a> */}
         

          {/* <NavLink to={`/movies/${role.person_id}`} */}
                    {/* // key={role.person_id}     
                    // className={({isActive}) => {return isActive ? "active" : ""}} 
                    // style={({isActive})=>{return isActive ? {color:"red"} : {color:"green"}}}> */}
                    
                     <a href="">Open artist page - {role.person_name}</a>  
                {/* </NavLink> */}
    </div>
     )
}