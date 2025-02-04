import { useEffect, useState } from "react";
import Artist from "../../Generics/Artist";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, List, Typography } from "@mui/material";
import { CastMember } from "../../Models/CastMember";

export default function PopularRoles () {
    const [roles, setRoles] = useState<CastMember[]>([]);
    
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/person/actor')
        // SELECT * FROM movie_cast join person on movie_cast.person_id = person.person_id;
            .then(response => { 
                // console.log(response.data);
                setRoles(response.data);
            }) 
            .catch(error => { 
                console.error('There was an error fetching the data!', error); 
            });

        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 6) % roles.length);
            // console.log("randomising number :", index);
        }, 8000);

        return () => clearInterval(interval);
    }, [roles.length]);

    const famousRoles: CastMember[] = roles.slice(index, index + 6);


    return(
        <Box style={{display: "flex",
            flexWrap: "wrap",
            height: "620px",
            margin: "10px 20px 20px 10px",
            width: "1250px",
            justifyContent: "center",
            gap: "20px",
            border: '1px dashed grey'}}>

        {/* <Box component="section" sx={{ p: 2, border: '1px dashed grey', display: "flex", marginLeft: 10, marginRight: 10, height: "620px",flexWrap: "wrap", width: "1250px", justifyContent: "center",}}>        */}
            {famousRoles.map((role:CastMember) => (
                <List style={{ gridColumn: "span 3" }}>
                    <Link to={`/artist/${role.person_id}`}>
                        <Artist key={role.person_id} role={role}/>
                    </Link>
                </List>))
            }           
            <Link to="/moviecast/22/1" >
                <Typography variant="h6" width={"120px"} >See all...</Typography>            
            </Link>
        {/* </Box> */}
        </Box>
    )
}