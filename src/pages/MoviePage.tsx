import {Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useQuery } from 'react-query';
import axios from 'axios';
// import { useState } from 'react';
import { Movie } from '../Models/Movie';
// import { ExpandMore } from '@mui/icons-material';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const { expand, ...other } = props; 
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: 'rotate(0deg)',
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: 'rotate(180deg)',
//       },
//     },
//   ],
// }));

export default function MoviePage ({movie}:{movie:Movie}){

    // const [expanded, setExpanded] = useState(false);
    // const movieId= useParams<{movieId:string}>();

    const {data, isLoading} = useQuery({
        queryKey: ['movie'],
        queryFn: () => axios.get(`http://localhost:8080/api/movie/${movie.movie_id}`).then(res => res.data),
    });
    
   if (!data) {
        return <h1>No Data Available</h1>;
      }
   const movieImage = `https://awkward-turquoise-hawk.myfilebase.com/ipfs/${data.imageKey}`
   const placeholderImage:string = "/poster.jpg";
  //  const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<>
      <Card sx={{ marginLeft: 10, marginTop: 2, marginBottom: 1, 
                    width: '700px',
                    
                    objectFit: 'contain', }} >
          <div style={{display: 'flex'}}>
              <CardMedia sx={{
                    width: '30%',
                    height: 'auto',
                    objectFit: 'contain',
                    marginLeft: '3%',
                    marginTop: '3%',
                  }}
                    component="img"
                    height="350"
                    image={data.imageKey ? movieImage : placeholderImage}
                    alt={data.title}
                  />
                  <div>
                  <CardHeader
               action={
          <IconButton aria-label="settings">
            <Link to={`/`}>
              <MoreVertIcon />
            </Link>
            
          </IconButton>
        }
        title={<Typography sx={{ alignItems: 'center', fontSize: '1.5rem' }}>
        {data.title} - 
        {data.movie_id}
      </Typography>}
        subheader={ "Released on " + data.release_date }
       
      />
                      <CardContent>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {data.tagline}
                      </Typography>
                      </CardContent>
                      <CardContent>          
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
                  </div>
                  
                  
          </div>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"         
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        
      {/* </Collapse> */}
    </Card>
      </>
    )
}