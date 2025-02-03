// import axios from "axios";
// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
import { CastMember } from "../Models/CastMember";
import Artist from "../Generics/Artist";

export default function MovieCastItem ({actor}:{actor: CastMember}){
    // const params = useParams<{movieId:string}>();
    // const {data, isLoading, isError} = useQuery({
    //         queryKey: ['moviecast_item', params.movieId],
    //         queryFn: () => axios.get(`http://localhost:8080/api/moviecast/${params.movieId}`).then(res => res.data),
    //     });

    //      if (isLoading) {    
    //     return <div>Loading...</div>;
    //     }
    //     if (isError) {
    //         return <div>Error fetching data</div>;
    //     }
       
    return (
        <>
{/*        
        // <p> this is the movie id: {params.movieId}</p>
        <p> This is the number of actors: {data.length}</p> */}

        {/* <p>test</p> */}
            <Artist key={actor.person_id} role={actor}/>
       
        </>
        
    )
}