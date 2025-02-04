import { useState, useEffect } from 'react';
import ImageCard from "../../Generics/ImageCard";
import SideList from '../../Generics/SideList';
import { Movie } from '../../Models/Movie';
import axios from 'axios';
import { Box } from '@mui/material';

export default function Promoted () {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/movie/promoted')
            .then(response => { 
                setMovies(response.data);
            }) 
            .catch(error => { 
                console.error('There was an error fetching the data!', error); 
            });

        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % movies.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [movies.length]);

    const highlightedElement: Movie = movies[index];
    const restElements: Movie[] = movies.filter((movie:Movie) => movie.movie_id !== highlightedElement.movie_id);
  
    return(
        <>
        <Box component="section" sx={{ p: 2, border: '1px dashed grey', display: "flex", marginLeft: 10, marginRight: 10, height: "auto" }}>              
            {highlightedElement && <ImageCard key={ highlightedElement.movie_id} 
                                            id={highlightedElement.movie_id} 
                                            title={highlightedElement.title} 
                                            imageKey={highlightedElement.imageKey} 
                                            width={250} 
                                            height={400}/>
            }     
            <SideList sidemovies={restElements}/>
        </Box>
       
        </>
    )
}
