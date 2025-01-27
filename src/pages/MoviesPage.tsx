// import { Movie } from "../Models/Movie";

// import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Movie } from "../Models/Movie";
import { useQuery } from "react-query";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
// import PaginationElement from "../Components/Container/elements/PaginationElement";
import { Pagination, Stack } from "@mui/material";
// import { useState } from "react";

// import { useEffect, useState } from "react";

export default function MoviesPage (){
    const page= useParams<{pageNumber:string | undefined}>();
    const pageNumber = page.pageNumber !== undefined ? parseInt(page.pageNumber, 10) : 1;
    const navigate = useNavigate(); // Initialize the navigate function
    
    const handleChange = (event:EventListener, value: number) => {
        navigate(`/movies/p/${value}`); // Navigate to the selected page
        console.log(value);
        console.log(event);
    };



    const {data, isLoading, isError} = useQuery({
        queryKey: ['movies', pageNumber],
        queryFn: () => axios.get(`http://localhost:8080/api/movie/p/${pageNumber}`).then(res => res.data), // http://localhost:8080/api/movie?page=${pageNr}
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
    // console.log(movies);
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
                            maxHeight: "300px"
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
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
       <div style={{margin:"auto"}} >
       <Stack spacing={2}>
            <Pagination count={10} color="primary" page={pageNumber} // Set the active page
                onChange={handleChange} />
        </Stack>
        </div>
    </div>
        </>
    )
}