import { Link } from "react-router-dom";
import { Movie } from "../Models/Movie";
import SideMovie from "./SideMovie";
import { Divider, List, Typography } from "@mui/material";
function SideList({sidemovies}:{sidemovies:Movie[]}){
    return(
        <div>
        { sidemovies.map((movie) => (
            <List sx={{ width: '100%', maxWidth: 360 }}>
                <SideMovie key={movie.movie_id} movie={movie}/>
                <Divider variant="inset" component="li" />
                </List>))
        }
            <div style={{margin:"0 0 0 10%"}} >
                <Link to="/movies">
                    <Typography variant="h6" width={"120px"}>See all...
                    </Typography>
                </Link>
            </div>
        </div>         
    )
}

export default SideList;