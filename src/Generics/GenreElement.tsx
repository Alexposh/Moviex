import { Genre } from "../Models/Genre";
import ImageCard from "./ImageCard";

export default function GenreElement ({genre}:{genre: Genre}) {

    return(
        <>
        {/* <p>{genre.genre_id} - { genre.genre_name}</p> */}
        <ImageCard key={genre.genre_id} title={genre.genre_name} imageKey={genre.genre_imageKey} width={170} height={300}/>
        </>
        
    )
}