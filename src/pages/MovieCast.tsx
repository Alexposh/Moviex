// import axios from "axios";
// import { Box, Button, Autocomplete, List, ListItemButton, ListItemText, TextField } from "@mui/material";
// import { useEffect, useState } from "react";
// import { Movie } from "../Models/Movie";
// import { Link } from "react-router-dom";
// import MovieCastItem from "./MovieCastItem";
// import { useQuery } from "react-query";
// import { CastMember } from "../Models/CastMember";


// interface MovieProps {
//     title: string;
//     id: number;
// }

export default function MovieCast() {
    // const [inputValue, setInputValue] = useState(''); // the word that the user enters

    // const searchCriteria = inputValue.toLowerCase(); // the search criteria that the query will use

    // const [movies, setMovies] = useState<MovieProps[]>([]); // the movies that match the search criteria
    // // const [selectedIndex, setSelectedIndex] = useState(0); // the index of the selected movie in the list of movies resulted by the search
    // // const [selectedMovie, setSelectedMovie] = useState(0); // the id of the selected movie from the listed options given by the list in the page
    // const [optionsToShow, setOptionsToShow] = useState<string[]>([]); // the options that will be shown in the autocomplete

    // useEffect(() => {
    //     if (inputValue && inputValue.length > 2) {
    //         searchMovies();
    //     }
    // }, [inputValue]); // only run the searchMovies function when the inputValue changes and it is larger that 2

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputValue(event.target.value);
    //     console.log(movies);
    //     console.log(inputValue);
    // }; // update the inputValue when the user types

    // const handleListItemClick = (
    //     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    //     index: number,
    // ) => {
    //     setSelectedIndex(index);
    //     console.log(index);
    //     setSelectedMovie(movies[index].movie_id);
    //     console.log(selectedMovie);
    //     setOptionsToShow([]);
    // }; // update the selected index and determines which castmovie list to show when the user clicks on an option

    // const {data, isLoading, isError} = useQuery({
    //     queryKey: ['moviecast_item', selectedIndex],
    //     queryFn: () => axios.get(`http://localhost:8080/api/moviecast/${selectedMovie}`).then(res => res.data),
    // }); // gets the 

    //  if (isLoading) {    
    // return <div>Loading...</div>;
    // }
    // if (isError) {
    //     return <div>Error fetching data</div>;
    // }

    // const searchMovies = () => {
    //     axios.get(`http://localhost:8080/api/moviesearch/${searchCriteria}`).then(res => {
    //         setMovies(res.data);
    //         setOptionsToShow(res.data.map((movie: Movie) => movie.title));
    //         console.log(optionsToShow);
    //     })
    //     .catch(error => { 
    //         console.error('There was an error fetching the data!', error); 
    //     });
    // };  // fetches the movies that match the search criteria

    return (
        <>
        <p>test</p>
            {/* <div style={{ display: "flex", border: "1px solid black" }}>
                <Autocomplete
                    // disablePortal
                    options={optionsToShow}
                    sx={{ width: 300 }}
                    renderInput={(params) =>( <TextField  {...params} label="" onChange={handleInputChange} autoComplete="off" />)}
                    onChange={(event, newValue) => {
                        setInputValue(newValue || '');
                    }}
                />
                <div>
                    <Button variant="contained" onClick={searchMovies}>Search</Button>
                </div>
            </div> */}

            <div>
                {/* {inputValue && movies && (
                    <Box sx={{ width: 320, maxWidth: 360, bgcolor: 'black' }}>
                        <List component="nav" aria-label="movies list">
                            {movies.map((movie) => (
                                <ListItemButton
                                    key={movie.movie_id}
                                    selected={selectedIndex === movies.indexOf(movie)}
                                    onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, movies.indexOf(movie))}
                                >
                                    <Link to={`/movies/${movie.movie_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <ListItemText primary={movie.title} />
                                   </Link>
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>
                )} */}
            </div>

            {/* {data && data.map((actor: CastMember) => {return(<MovieCastItem key={actor.person_id} actor={actor} />)})} */}
           
        </>
    );
}