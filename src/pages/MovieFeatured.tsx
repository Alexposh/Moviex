import axios from "axios";
import { useParams } from "react-router-dom"
import MoviePresentation from "../Components/Container/elements/MoviePresentation";
import { useEffect, useState } from "react";
import { Movie } from "../Models/Movie";
import { CastMember } from "../Models/CastMember";


export default function MovieFeatured (){

    // const params = useParams()
    const params = useParams<{movieId:string | undefined}>();
    const [movie, setMovie] = useState<Movie>({} as Movie);
    const [cast, setCast] = useState<CastMember[]>([]);
    

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const response1 = await axios.get(`http://localhost:8080/api/movie/${params.movieId}`);
                const response2 = await axios.get(`http://localhost:8080/api/moviecast/${params.movieId}`);
                
                setMovie(response1.data);
                setCast(response2.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            
        }
        
        fetchPageData();
    }, []);
   
   const movieImage = `https://awkward-turquoise-hawk.myfilebase.com/ipfs/${movie.imageKey}`
   const placeholderImage:string = "/poster.jpg";
  

//     if (isLoading) {
//         return <h1>Loading...</h1>;
//     }
    
    return(
        <>      
            <MoviePresentation movie={movie} movieImage={movieImage} placeholderImage={placeholderImage} cast={cast} />
            {/* {cast.map((castMember) => (
                <div key={castMember.person_id}>
                    <p>{castMember.person_name}</p>
                </div>
            ))} */}
        </>
    )
}