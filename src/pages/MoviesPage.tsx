// import { Movie } from "../Models/Movie";

export default function MoviesPage (){

    const movies:number[] = [1,2,3,4,5];
    // const fetchedMovies: Movie[] =[]

    return(
        <>
            {movies.map((movie) => (<div key={movie}>{movie}</div>))}
            
        </>
    )
}