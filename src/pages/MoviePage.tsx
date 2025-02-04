
import { useQuery } from 'react-query';
import axios from 'axios';
import { Movie } from '../Models/Movie';
import MoviePresentation from '../Components/Container/elements/MoviePresentation';

export default function MoviePage ({movie}:{movie:Movie}){

  const {data, isLoading} = useQuery({
        queryKey: ['movie'],
        queryFn: () => axios.get(`http://localhost:8080/api/movie/${movie.movie_id}`).then(res => res.data),
    });
    
   if (!data) {
        return <h1>No Data Available</h1>;
      }
   const movieImage = `https://awkward-turquoise-hawk.myfilebase.com/ipfs/${data.imageKey}`
   const placeholderImage:string = "/poster.jpg";
 
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(
    <>    
      <MoviePresentation movie={data} movieImage={movieImage} placeholderImage={placeholderImage} />
    </>
    )
}