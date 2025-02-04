import axios from "axios";
import { useEffect, useState } from "react";
import { Genre } from "../../Models/Genre";
import GenreElement from "../../Generics/GenreElement";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";


export default function GenresHome (){

    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/categories/home')
            .then(response => { 
                // console.log(response.data);
                setGenres(response.data);
            }) 
            .catch(error => { 
                console.error('There was an error fetching the data!', error); 
            });
    }, []);

    return(
    <>
    <Box component="section" sx={{ p: 2, border: '1px dashed grey', display: "flex", marginLeft: 10, marginRight: 10, height: "auto" }}>  
        
        {genres.map((genre) => ( <GenreElement key={genre.genre_id} genre={genre}/>))}        
          <Link to="/genres">
            <Typography variant="h6" width={"120px"}>See all...</Typography>            
          </Link>          
    </Box>
    </>
    )
}