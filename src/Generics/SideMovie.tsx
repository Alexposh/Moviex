import { CardMedia, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Movie } from "../Models/Movie";
import React from "react";

export default function SideMovie({movie}:{movie:Movie}) {
    const imageBase:string = "https://awkward-turquoise-hawk.myfilebase.com/ipfs/";
    const movieImage:string = imageBase + movie.imageKey;
    const placeholderImage:string = "/poster.jpg";
    return (
<>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <CardMedia sx={{
                    width: 120,
                    height: 80,
                    objectFit: 'contain',
                    marginLeft: '15%',
                }}
        component="img"
        height="250"
        image={movie.imageKey ? movieImage : placeholderImage}
        alt={movie.title}
      />  
        </ListItemAvatar>
        <ListItemText
          primary={movie.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                {movie.tagline}
              </Typography>              
            </React.Fragment>
          }
        />
      </ListItem>  
    </>
    )
}