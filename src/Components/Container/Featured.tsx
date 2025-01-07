import { useEffect, useState } from "react";
import FeaturedArticle from "../../Generics/FeaturedArticle";
import axios from "axios";
import { Movie } from "../../Models/Movie";



export default function Featured (){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        axios.get('http://localhost/MoviexPhp/api.php?table=movie&amount=10')
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
        }, 5000);

        return () => clearInterval(interval);
    }, [movies.length]);

    const featuredMovies: Movie[] = movies.slice(index, index + 2);
    return(
        <div style={{display:"flex", border:"1px solid black", justifyContent:"center"}}>
           {featuredMovies.map((movie) => ( <FeaturedArticle movie={movie}/>))}
        </div>
        
    )
}