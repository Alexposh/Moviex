import { useEffect, useState } from "react";
import { Movie } from "../../Models/Movie";
import axios from "axios";
import FeaturedArticle from "../../Generics/FeaturedArticle";

export default function Suggestions (){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        axios.get('http://localhost:8080/movie/8')
            .then(response => { 
                // console.log(response.data);
                setMovies(response.data);
            }) 
            .catch(error => { 
                console.error('There was an error fetching the data!', error); 
            });

        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 2) % movies.length);
            // console.log("randomising number :", index);
        }, 3000);

        return () => clearInterval(interval);
    }, [movies.length]);

    const featuredMovies: Movie[] = movies.slice(index, index + 2);
    return(
      <div style={{display:"flex", border:"1px solid black", justifyContent:"center"}}>
                 {featuredMovies.map((movie) => ( <FeaturedArticle key={movie.movie_id} movie={movie}/>))}                
              </div>
    )
}