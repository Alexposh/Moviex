import React, { useState, useEffect } from 'react';
import ImageCard from "../../Generics/ImageCard";
import axios from "axios";

import SideList from '../../Generics/SideList';
import { Movie } from '../../Models/Movie';



export default function Promoted () {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        axios.get('http://localhost:8080/movie/5')
            .then(response => { 
                // console.log(response.data);
                setMovies(response.data);
            }) 
            .catch(error => { 
                console.error('There was an error fetching the data!', error); 
            });

        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % movies.length);
            // console.log("randomising number :", index);
        }, 5000);

        return () => clearInterval(interval);
    }, [movies.length]);

    const highlightedElement: Movie = movies[index];
    const restElements: Movie[] = movies.filter((movie) => movie.movie_id !== highlightedElement.movie_id);

    return(
        <>
        <div style={{display:"flex", border:"1px solid black", justifyContent:"center"}}>
        <h2 >Promoted</h2>
        {highlightedElement && <ImageCard key={highlightedElement.movie_id} title={highlightedElement.title}  width={350}/>}
        {/* {restElements.map((movie) => {
            return (
                <ImageCard key={movie.movie_id} title={movie.title}  width={150}/>
            )
        })} */}
        <SideList sidemovies={restElements} />
        </div>
        </>
    )
}
