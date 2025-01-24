// import Favorites from "./Container/Favorites";
import Featured from "./Container/Featured";
import Genres from "./Container/Genres";
import Promoted from "./Container/Promoted";
import Popularartists from "./Container/PopularRoles";
import Suggestions from "./Container/Suggestions";
import Topten from "./Container/Topten";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function Container(){

    // type Movie = {
    //     movie_id: number, 
    //     title: string,
    //     budget: number,
    //     homepage: string,
    //     overview:string,
    //     popularity: number,
    //     release_date: string, 
    //     revenue: number, 
    //     runtime: number, 
    //     movie_status: string, 
    //     tagline: string, 
    //     vote_average: number, 
    //     vote_count: number
    // };
    // const [fetchedData, setFetchedData] = useState([] as Movie[]);
   
    // useEffect(() => { 
    // axios.get('http://localhost/MoviexPhp/api.php')
    //         .then(response => { setFetchedData(response.data); }) 
    //         .catch(error => { 
    //             console.error('There was an error fetching the data!', error); 
    //         }); 
     
    //     });
    

    return(
        <>   

        <Promoted />
        <Featured />
        <Popularartists />
        <Suggestions />
        <Topten />
        {/* <Favorites /> */}
        <Genres />
        </>
       

    )
}