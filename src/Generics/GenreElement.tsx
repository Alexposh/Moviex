import { Genre } from "../Models/Genre";

export default function GenreElement ({genre}:{genre: Genre}) {
    return(
        <p>{genre.genre_id} - { genre.genre_name}</p>
    )
}