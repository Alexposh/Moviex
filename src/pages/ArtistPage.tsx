import { useParams } from "react-router-dom";

export default function ArtistPage (){
    const params = useParams<{artistId:string}>();
    return(
        <h1>Artist Page {params.artistId} singular</h1>
    )
}   