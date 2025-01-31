import axios from "axios";
// import { ChangeEvent } from "react";
// import { useQuery } from "react-query";
// import { NavLink, Outlet, useParams } from "react-router-dom";
// import { CastMember } from "../Models/CastMember";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { useState } from "react";
import { Movie } from "../Models/Movie";


export default function MovieCast (){
    
    // const [movieId, setMovieId] = useState(5);

    const searchInput = "Pirates";
    const searchCriteria = searchInput.toLowerCase();

    const [movies, setMovies] = useState<Movie[]>([]);

    // const pageNumber= useParams<{page:string | undefined}>();
    // const movie_id = useParams<{movie:string | undefined}>();
    // const pageNr = pageNumber.page !== undefined ? parseInt(pageNumber.page, 10) : 1;
    // const movieId = movie_id.movie !== undefined ? parseInt(movie_id.movie, 10) : 1;

    // const [inputValue, setInputValue] = useState('');

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputValue(event.target.value);
    // };
    

    const searchMovies = () => {
        alert(searchCriteria);  
        axios.get(`http://localhost:8080/api/moviesearch/${searchCriteria}`).then(res => {
            // setMovieId(res.data.movie_id);
            setMovies(res.data);
            console.log(res.data);
        })
        .catch(error => { 
            console.error('There was an error fetching the data!', error); 
        });
    };
// searchMovies();
    // const {data, isLoading, isError} = useQuery({
    //     queryKey: ['movieSearched', movieId],
    //     queryFn: () => axios.get(`http://localhost:8080/api/movie/${movieId}`).then(res => res.data), 
    //     staleTime: 60000, // 1 minute
    //     cacheTime: 300000, // 5 minutes
    //     refetchOnWindowFocus: false,
    // });  

    // // console.log(data);
    // if (isLoading) {    
    //     return <div>Loading...</div>;
    // }
    // if (isError) {
    //     return <div>Error fetching data</div>;
    // }
    return(<>
        <div style={{display:"flex", border:"1px solid black"}}> 
        <div>Test</div>
        
        <Button variant="contained" onClick={() => {  searchMovies();  }}>Search</Button>
        
        </div>
        <div>
        {movies.map((movie) => ( <div key={movie.movie_id}>{movie.title} - {movie.movie_id}</div>))}
    </div>
    </> 
               
       
    )
}   