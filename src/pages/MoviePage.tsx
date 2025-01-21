import {useParams} from 'react-router-dom';
export default function MoviePage (){
    const params = useParams<{movieId:string}>();
    return(
        <h1>Movie Page  {params.movieId} singular</h1>
    )
}