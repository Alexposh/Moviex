import axios from 'axios';
import { Movie } from '../Models/Movie';

export const getFilteredMovies = () => {
    let filteredMovies: Movie[] = [];
    axios.get(`http://localhost:8080/api/movie/promoted`)
                .then(response => { 
                    // console.log(response.data);
                    filteredMovies= response.data;
                }) 
                .catch(error => { 
                    console.error('There was an error fetching the data!', error); 
                });
    return filteredMovies;
}

export const returnMovies  = () => {axios.get('http://localhost:8080/api/movie/promoted').then(res => res.data)}