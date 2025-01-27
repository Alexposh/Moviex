// import { Movie } from "../Models/Movie";

// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Movie } from "../Models/Movie";
import { useQuery } from "react-query";
import axios from "axios";
// import { useEffect, useState } from "react";

export default function MoviesPage (){

    // const movies:number[] = [1,2,3,4,5];

    const {data, isLoading, isError} = useQuery({
        queryKey: ['movies'],
        queryFn: () => axios.get('http://localhost:8080/api/movie').then(res => res.data),
        staleTime: 60000, // 1 minute
        cacheTime: 300000, // 5 minutes
        refetchOnWindowFocus: false,
    });


   

    if (isLoading) {    
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error fetching data</div>;
    }
  
    const movies: Movie[] = Array.isArray(data) ? data : [];
    console.log(movies);
    return(
        <>
        <div style={{display:"flex", border:"1px solid black", justifyContent:"center"}}>
        <div>
           {movies.map((movie:Movie) => (
                <p key={movie.movie_id}><NavLink to={`/movies/${movie.movie_id}`}
                    key={movie.movie_id}     
                    className={({isActive}) => {return isActive ? "active" : ""}} 
                    style={({isActive})=>{return isActive ? {color:"red"} : {color:"green"}}}>
                         {movie.title}
                </NavLink>
                </p>
            ))}
            </div>
                 
        </div>
        
            
        </>
    )
}