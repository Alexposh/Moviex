import { Movie } from "../Models/Movie";
import SideMovie from "./SideMovie";
function SideList({sidemovies}:{sidemovies:Movie[]}){
    return(
        <div>
        { sidemovies.map((movie) => (<SideMovie key={movie.movie_id} movie={movie}/>))
        }
        </div>
            
               
            
           
        
    )
}

export default SideList;