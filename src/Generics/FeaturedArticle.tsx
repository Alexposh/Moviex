import { Movie } from "../Models/Movie";
import ImageCard from "./ImageCard";

export default function FeaturedArticle ({movie}:{movie:Movie}){ 
    return (
        <>
            <ImageCard key={movie.movie_id} title={movie.title}  width={270}/>
        </>
       
     
    )
}