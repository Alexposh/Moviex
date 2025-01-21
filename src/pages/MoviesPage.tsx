// import { Movie } from "../Models/Movie";

import { NavLink, Outlet } from "react-router-dom";

export default function MoviesPage (){

    const movies:number[] = [1,2,3,4,5];
    // const fetchedMovies: Movie[] =[]

    return(
        <>
        <div>
        {movies.map((movie) => (
            <p><NavLink to={`/movies/${movie}`}
                    key={movie}     
                    className={({isActive}) => {return isActive ? "active" : ""}} 
                    style={({isActive})=>{return isActive ? {color:"red"} : {color:"green"}}}>
                        Movie number - {movie}
                </NavLink>
            </p>))}
        <Outlet/>
        </div>
            
        </>
    )
}