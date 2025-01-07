import { useEffect, useState } from "react";
import Artist from "../../Generics/Artist";
import axios from "axios";
import { Role } from "../../Models/Role";

export default function PopularRoles () {
    const [roles, setRoles] = useState<Role[]>([]);
    
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        axios.get('http://localhost/MoviexPhp/api.php?table1=movie_cast&table2=person&criteria=person_id&amount=6')
        // SELECT * FROM movie_cast join person on movie_cast.person_id = person.person_id;
            .then(response => { 
                // console.log(response.data);
                setRoles(response.data);
            }) 
            .catch(error => { 
                console.error('There was an error fetching the data!', error); 
            });

        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 3) % roles.length);
            // console.log("randomising number :", index);
        }, 8000);

        return () => clearInterval(interval);
    }, [roles.length]);

    const famousRoles: Role[] = roles.slice(index, index + 3);


    return(
        <div style={{display:"flex", border:"1px solid black", justifyContent:"center"}}>
        {famousRoles.map((role) => ( <Artist role={role}/>))}
        </div>
    )
}