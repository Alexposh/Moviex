import axios from "axios";
import { useEffect, useState } from "react";
import { Genre } from "../../Models/Genre";
import GenreElement from "../../Generics/GenreElement";

export default function Genres (){

    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/categories')
            .then(response => { 
                // console.log(response.data);
                setGenres(response.data);
            }) 
            .catch(error => { 
                console.error('There was an error fetching the data!', error); 
            });
    }, []);

    return(<>
    <div style={{display:"flex", margin:"20px 20px", height:"500px", border:"1px solid black", justifyContent:"center"}}>
    <h3>Genres</h3>
    {genres.map((genre) => ( <GenreElement key={genre.genre_id} genre={genre}/>))}
    </div>
    </>
        
        // 
    )
}