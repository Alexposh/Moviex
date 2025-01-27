// import { Movie } from "../Models/Movie";

// import { useState } from "react";
import { Link} from "react-router-dom";
import { Movie } from "../Models/Movie";
import { useQuery } from "react-query";
import axios from "axios";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
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
        <div style={{ 
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px", // Added gap to ensure spacing between cards
            margin: "20px"}}>
        
           {movies.map((movie:Movie) => (
        <div>
            <Card sx={{ maxWidth: 345, width: "calc(93.333% - 10px)", margin: "10px" }} key={movie.movie_id} >
                <Link to={`/movies/${movie.movie_id}`}>
                    <CardActionArea>
                        <CardMedia sx={{
                            width: '80%',
                            height: '300px',
                            objectFit: 'contain',
                            marginLeft: '10%',
                        }}
                        component="img"
                        image={movie.imageKey ? `https://awkward-turquoise-hawk.myfilebase.com/ipfs/${movie.imageKey}` : "/poster.jpg"} 
                        alt={movie.title} 
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {movie.title} 
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {movie.movie_status} 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link >
            </Card>
        </div>
    ))}
    </div> 
       
        
            
        </>
    )
}