import { Movie } from "../Models/Movie";

export default function SideMovie({movie}:{movie:Movie}) {
    return (
        <h4 style={{margin:"40px"}}>{movie.title}</h4>
    )
}