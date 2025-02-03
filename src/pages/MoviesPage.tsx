
// import { Link, useParams, useNavigate } from "react-router-dom";
import { Movie } from "../Models/Movie";
import { useQuery } from "react-query";
import axios from "axios";
import { Autocomplete, Box, Button, List, ListItemButton, ListItemText, Pagination, Stack, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import MoviePage from "./MoviePage";

interface MovieProps {
    title: string;
    id: number;
}   



export default function MoviesPage (){

    const [pageNumber, setPageNumber] = useState(1); // sets the page number to 1 and allows to be updated when clicking on the pagination buttons;
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedMovie, setSelectedMovie] = useState<Movie |null>(null);
    const [inputValue, setInputValue] = useState(''); // the word that the user enters
    const [optionsToShow, setOptionsToShow] = useState<string[]>([]);
    //  const movies: Movie[] = Array.isArray(data) ? data : [];


    const {data, isLoading, isError} = useQuery({
        queryKey: ['moviespage', pageNumber],
        queryFn: () => axios.get(`http://localhost:8080/api/movie/p/${pageNumber}`).then(res => res.data), // http://localhost:8080/api/movie?page=${pageNr}
        staleTime: 60000, // 1 minute
        cacheTime: 300000, // 5 minutes
        refetchOnWindowFocus: false,
        
    });     

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/api/moviesearch/${inputValue}`)
    //         .then(res => res.data)        
    //         // setOptionsToShow(dataAll.map((movie:MovieProps) => movie.title)); //dataAll.map((movie) => movie.title)
    //         .then(res => { 
    //             setOptionsToShow(res.map((movie:MovieProps) => movie.title));
    //         }) 
    //         .catch(error => { 
    //             console.error('There was an error fetching the data!', error); 
    //         });
        
    // }, [optionsToShow, inputValue]);


    const getMovieNames = (inputValue:string) => {
        axios.get(`http://localhost:8080/api/moviesearch/${inputValue}`)
        .then(res => res.data)        
        // setOptionsToShow(dataAll.map((movie:MovieProps) => movie.title)); //dataAll.map((movie) => movie.title)
        .then(res => { 
            setOptionsToShow(res.map((movie:MovieProps) => movie.title));
        }) 
        .catch(error => { 
            console.error('There was an error fetching the data!', error); 
        });
    }
      
    // const navigate = useNavigate(); // Initialize the navigate function
   
    // the index of the selected movie in the list of movies resulted by the search
    // the id of the selected movie from the listed options given by the list in the page
    

  
    const handleChange = (event:ChangeEvent<unknown>, value: number) => {
        // navigate(`/movies/p/${value}`); // Navigate to the selected page
        setPageNumber(value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);       
        console.log(inputValue);
        getMovieNames(inputValue);
    }; // update the inputValue when the user types

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        if (data && data.length > index) {
            setSelectedMovie(data[index]);
        }
    };// update the selected index and determines which castmovie list to show when the user clicks on an option

     

    if (isLoading) {    
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error fetching data</div>;
    }  
    
    
    
    
    return(
        <>
        <div style={{ 
            // display: "flex",
            // flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px", // Added gap to ensure spacing between cards
            margin: "20px"}}>
            <div style={{ 
                display: "flex"}}>
                <Autocomplete
                        // disablePortal
                        options={optionsToShow}
                        sx={{ width: 300 }}
                        renderInput={(params) =>( <TextField  {...params} label="" onChange={handleInputChange} autoComplete="off" />)}                        
                    />                    
                <Button variant="contained" sx={{marginLeft: 2, height: 50, width: 100}}>Search</Button>
            </div>
            <div>
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}> 
                    <Box sx={{ width: 320, maxWidth: 460, marginTop: 2, bgcolor: 'black' }}>
                        <div>
                        <List component="nav" aria-label="movies list">
                                    {data.map((movie: Movie, index: number) => (
                                        <ListItemButton
                                            key={movie.movie_id}
                                            selected={selectedIndex === index}
                                            // onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, data.indexOf(movie))}
                                            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, index)}
                                        >
                                            {/* <Link to={`/movies/${movie.movie_id}`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
                                            <ListItemText key={movie.movie_id} primary={movie.title} />
                                        {/* </Link> */}
                                        </ListItemButton>
                                    ))}
                                </List>
                        </div>                               
                                
                    </Box>    

                    {selectedMovie && <MoviePage key={selectedMovie.movie_id} movie={selectedMovie} />}

                   
                    {/* <MoviePage movie={selectedMovie} /> */}
                    
                </div>
               
            </div>
            <div style={{margin:"auto"}} >
       <Stack spacing={2} sx={{margin:"auto", marginTop:"20px"}}>
            <Pagination count={10} color="primary" page={pageNumber} // Set the active page
                onChange={handleChange} />
        </Stack>
        </div>
        </div> 

   
        </>
    )
}