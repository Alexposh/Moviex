import { useEffect, useState } from "react";
import { Movie } from "../../Models/Movie";
import axios from "axios";
import FeaturedArticle from "../../Generics/FeaturedArticle";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
// import { useQuery } from "react-query";

export default function Suggestions (){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [index, setIndex] = useState<number>(0);

    // const {data, isLoading} = useQuery({
    //     queryKey: ['movies'],
    //     queryFn: () => axios.get('http://localhost:8080/api/movie/popular').then(res => res.data),
    // });


    useEffect(() => {
        axios.get('http://localhost:8080/api/movie/popular')
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

    // if(isLoading) return <h2>Loading...</h2>;

    return(
        <Box component="section" sx={{ p: 2, border: '1px dashed grey', display: "flex", marginLeft: 10, marginRight: 10, height: "auto" }}>  
                 {/* <h2>Suggestions</h2> */}
                 {featuredMovies.map((movie:Movie) => ( <FeaturedArticle key={movie.movie_id} movie={movie}/>))}  
                <Link to="/movies">
                    <Typography variant="h6" width={"120px"}>See all...</Typography>
                </Link>              
        </Box>
    )
}