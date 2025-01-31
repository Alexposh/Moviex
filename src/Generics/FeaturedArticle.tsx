import { Movie } from "../Models/Movie";
import ImageCard from "./ImageCard";

export default function FeaturedArticle ({movie}:{movie:Movie}){ 
    return (
        <>
            <ImageCard key={movie.movie_id} id={movie.movie_id} title={movie.title} imageKey={movie.imageKey} width={250} height={350}/>
        </>
       
     
    )
}