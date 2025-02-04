
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, IconButtonProps, Rating, styled, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Movie } from "../../../Models/Movie";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { useState } from "react";
import { CastMember } from "../../../Models/CastMember";
import MovieCastItem from "../../../pages/MovieCastItem";
// import MovieReviewOptions from "./MovieReviewOptions";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const {  ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(270deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(90deg)',
        },
      },
    ],
  }));
  

export default function MoviePresentation ({movie, movieImage, placeholderImage, cast}: {movie:Movie, movieImage:string, placeholderImage:string, cast:CastMember[]}) {

    const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
    <Card sx={{ display: 'flex', marginLeft: 10, marginTop: 2, marginBottom: 1, width: 'auto', height: '600px'  }}>
        <div style={{display: 'flex'}}>
        <div>

            <div style={{display: 'flex'}}>
                <CardMedia sx={{
                            width: '300px',
                            height: '500px',
                            objectFit: 'contain',
                            marginLeft: '3%',
                            marginTop: '3%',
                            }}
                        component="img"
                        height="350"
                        image={movie.imageKey ? movieImage : placeholderImage}
                        alt={movie.title}/>
                    <div>
                        <CardHeader 
                        // action={ }
                            // <MovieReviewOptions /> 
                        
                                    title={<Typography sx={{ alignItems: 'center', fontSize: '1.5rem' }}>{movie.title}</Typography>}
                                    subheader={ "Released on " + movie.release_date } />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{movie.tagline}</Typography>
                        </CardContent>

                        <CardContent>          
                            <Typography sx={{ marginBottom: 2 }}>{movie.overview}</Typography>
                            <Typography sx={{ marginBottom: 2 }}>{movie.homepage}</Typography>
                            <Typography sx={{ marginBottom: 2 }}>Rating of {movie.vote_average} from {movie.vote_count} votes.</Typography>                       
                            <Box sx={{ '& > legend': { mt: 2 } }}>
                                <Typography component="legend">Rating</Typography>
                                <Rating precision={0.5} name="read-only" value={4.5} readOnly />
                            </Box>
                        </CardContent>
                    </div>                 
            </div>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
            
            
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show cast"
            sx={{ marginRight: 2 }}
            >
            <ExpandMoreIcon />
            </ExpandMore> 
            {expanded ? "Hide cast" : " Show cast"}
            
        </CardActions>
      </div>
      </div>
      <div>
      <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ width: '300px', marginRigt: '10px' }}>
        <CardContent sx={{ width: '400px', maxHeight: '300px', overflowY: 'scroll', marginRight: '20px', marginTop: '40px' }}>
        {cast.map((castMember) => (
                <div key={castMember.person_id}>
                    <MovieCastItem actor={castMember}/>
                </div>
            ))}
         
        </CardContent>
      </Collapse>
      </div>
    </Card>
    )
}