// import { Card } from "react-bootstrap";
import { CastMember } from "../Models/CastMember";
// import { Role } from "../Models/Role";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

// import { NavLink } from "react-router-dom";

export default function Artist ({role}:{role: CastMember}) {

    const imageBase:string = "https://awkward-turquoise-hawk.myfilebase.com/ipfs/";

    const artistImage:string = imageBase + role.image;
   
   const placeholderImage:string = "/kevin.jpg";
     
    

    return(
    <div style={{margin:"40px"}}>
              
     
        <div>
        <ListItem sx={{width: '260px', height: '50px'}}>
          <ListItemAvatar>
            <Avatar alt={role.person_name} src={role.image ? artistImage : placeholderImage} sx={{ width: 60, height: 60 }}  />
          </ListItemAvatar>
          <ListItemText primary={role.person_name} secondary={role.character_name} sx={{ marginLeft: 2, fontSize: '1.2rem', color: 'black' }}/>
        </ListItem>
        </div>
      
    </div>
     )
}