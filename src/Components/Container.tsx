// import Favorites from "./Container/Favorites";
import Featured from "./Container/Featured";
// import Genres from "./Container/Genres";

import Promoted from "./Container/Promoted";
import Popularartists from "./Container/PopularRoles";
import Suggestions from "./Container/Suggestions";
// import Topten from "./Container/Topten";
import GenresHome from "./Container/GenresHome";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function Container(){

    return(
        <>   

        <Promoted />
        
        <Featured />
        <Popularartists />
        <Suggestions />
        {/* <Topten />
        <Favorites /> */}
        <GenresHome />
        </>
       

    )
}