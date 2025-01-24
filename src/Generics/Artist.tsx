import { Card } from "react-bootstrap";
import { Role } from "../Models/Role";

export default function Artist ({role}:{role: Role}) {

    const imageBase:string = "https://awkward-turquoise-hawk.myfilebase.com/ipfs/";

    const artistImage:string = imageBase + role.image;
   
   const placeholderImage:string = "/kevin.jpg";
     
    

    return(
    <div style={{margin:"40px"}}>
        {/* <h3>{role.character_name}  </h3> 
        <p>played by </p>
        <h4>{role.person_name}</h4> */}

        <Card style={{ width: '300px' }}>
        <Card.Img variant="top" src={role.image ? artistImage : placeholderImage} width={200} />
        <Card.Body>
          <Card.Text>
            {role.character_name}
            <p>played by </p>
                <h4>{role.person_name}</h4>
          </Card.Text>         
        </Card.Body>
      </Card>
    </div>
     )
}