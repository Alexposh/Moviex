import {Link, useParams} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { lime } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props; //expand, was also in the destructuring, but it was not used and just gave the red error
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
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function MoviePage (){

    const [expanded, setExpanded] = useState(false);
    const movieId= useParams<{movieId:string}>();

    const {data, isLoading} = useQuery({
        queryKey: ['movie'],
        queryFn: () => axios.get(`http://localhost:8080/api/movie/${movieId.movieId}`).then(res => res.data),
    });
    
   if (!data) {
        return <h1>No Data Available</h1>;
      }
   const movieImage = `https://awkward-turquoise-hawk.myfilebase.com/ipfs/${data.imageKey}`
   const placeholderImage:string = "/wide.jpg";
   const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<>
    
        {/* <h1>{data.title}</h1> */}
   
       
        <Card sx={{ marginLeft: 60, marginTop: 10, marginBottom: 10, 
                    width: '500px',
                    
                    objectFit: 'contain', }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: lime[500] }}>
            <Link to={`/movies`}>
           <ArrowBackIcon />
           </Link>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography sx={{ fontSize: '1.5rem' }}>
        {data.title}
      </Typography>}
        subheader={data.release_date}
       
      />
      
      <CardMedia sx={{
                    width: '80%',
                    height: 'auto',
                    objectFit: 'contain',
                    marginLeft: '10%',
                }}
        component="img"
        height="350"
        image={data.imageKey ? movieImage : placeholderImage}
        alt={data.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {data.tagline}
        </Typography>
      </CardContent>
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
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Overview:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
          {data.overview}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
          {data.homepage}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
          Rating of {data.vote_average} from {data.vote_count} votes
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
      </>
    )
}