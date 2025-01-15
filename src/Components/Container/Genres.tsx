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
    {genres.map((genre) => ( <GenreElement key={genre.genre_id} genre={genre}/>))}
    </>
        
        // <h1>Genres</h1>
    )
}