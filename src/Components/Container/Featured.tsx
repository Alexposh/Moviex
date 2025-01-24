import { useEffect, useState } from "react";
import FeaturedArticle from "../../Generics/FeaturedArticle";
import axios from "axios";
import { Movie } from "../../Models/Movie";
// import { useQuery } from "react-query";



export default function Featured (){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [index, setIndex] = useState<number>(0);

    // const {data, isLoading} = useQuery({
    //     queryKey: ['movies'],
    //     queryFn: () => axios.get('http://localhost:8080/api/movie/featured').then(res => res.data),
    // });

    useEffect(() => {
        axios.get('http://localhost:8080/api/movie/featured')
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

    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }

    return(

        <>        
        <div style={{display:"flex", margin:"20px 20px",  height:"500px",border:"1px solid black", justifyContent:"center"}}>
            <h2>Featured</h2>
           {featuredMovies.map((movie) => ( <FeaturedArticle key={movie.movie_id} movie={movie}/>))}
        </div>
        </>
        
        
    )
}