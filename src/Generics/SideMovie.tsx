import { Movie } from "../Models/Movie";

export default function SideMovie({movie}:{movie:Movie}) {
    return (
        <h4>{movie.title}</h4>
    )
}