import { useState, useEffect } from 'react';
import ImageCard from "../../Generics/ImageCard";
// import axios from "axios";
// import { useQuery } from 'react-query';
import SideList from '../../Generics/SideList';
import { Movie } from '../../Models/Movie';
// import { getFilteredMovies, returnMovies } from '../../Services/movieQueries';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

export default function Promoted () {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [index, setIndex] = useState<number>(0);
    // const {data, isLoading} = useQuery({
    //     queryKey: ['movies'],
    //     queryFn: () => axios.get('http://localhost:8080/api/movie/promoted').then(res => res.data),
    // });


    useEffect(() => {
        axios.get('http://localhost:8080/api/movie/promoted')
            .then(response => { 
                // console.log(response.data);
                setMovies(response.data);
            }) 
            .catch(error => { 
                console.error('There was an error fetching the data!', error); 
            });

        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % movies.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [movies.length]);

    // const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);
    // useEffect(() => {
    //     axios.get('http://localhost:8080/api/movie')
    //         .then(response => { 
    //             // console.log(response.data);
    //             setFetchedMovies(response.data);
    //         }) 
    //         .catch(error => { 
    //             console.error('There was an error fetching the data!', error); 
    //         });

        
    // }, [fetchedMovies.length]);

    const highlightedElement: Movie = movies[index];
    const restElements: Movie[] = movies.filter((movie:Movie) => movie.movie_id !== highlightedElement.movie_id);
    // console.log(highlightedElement);

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return(
        <>
        <div style={{display:"flex", margin:"20px 20px", height:"500px", border:"1px solid black", justifyContent:"center"}}>
        <h2 >Promoted</h2>
        
        {highlightedElement && <ImageCard key={ highlightedElement.movie_id} id={highlightedElement.movie_id} title={highlightedElement.title} imageKey={highlightedElement.imageKey} width={250} height={400}/>}
        {/* {data.map((movie:Movie) => {
            return (
                <ImageCard key={movie.movie_id} title={movie.title}  width={150}/>
            )
        })} */}
       
         <SideList sidemovies={restElements} />
        {/* <SideList sidemovies={movies} /> */}
        </div>
        </>
    )
}
