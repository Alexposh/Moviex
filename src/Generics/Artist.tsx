import { Role } from "../Models/Role";

export default function Artist ({role}:{role: Role}) {
    return(
    <div style={{margin:"40px"}}>
<h3>{role.character_name}  </h3> 
<p>played by </p>
<h4>{role.person_name}</h4>
    </div>
     )
}