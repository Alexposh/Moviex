import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { Genre } from "../Models/Genre";


export default function GenreElement ({ genre}:{ genre: Genre}) {
    const imageBase:string = "https://awkward-turquoise-hawk.myfilebase.com/ipfs/";
    const movieImage:string = imageBase + genre.genre_imageKey;

    const placeholderImage:string = "/poster.jpg";

    return(
        <>
        <div style={{margin:"40px"}}>
        <Link to={`/genres/${genre.genre_id}`}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={genre.genre_imageKey ? movieImage : placeholderImage}
          alt={genre.genre_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {genre.genre_name}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    </div>
       
        </>
        
    )
}