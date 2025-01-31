
// import { ExpandMore } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { lime } from "@mui/material/colors";


export default function ActorPage (){
    const actor_id = useParams<{actorId:string | undefined}>();
    const actorId = actor_id.actorId !== undefined ? parseInt(actor_id.actorId, 10) : 1;
     

    const {data, isLoading, isError} = useQuery({
        queryKey: ['actorId', actorId],
        queryFn: () => axios.get(`http://localhost:8080/api/person/${actorId}`).then(res => res.data), 
        staleTime: 60000, // 1 minute
        cacheTime: 300000, // 5 minutes
        refetchOnWindowFocus: false,
    }); 


    if (isLoading) {    
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error fetching data</div>;
    }
       
    //  console.log(data);
    const imageBase:string = "https://awkward-turquoise-hawk.myfilebase.com/ipfs/";

    const artistImage:string = imageBase + data.image;
   
   const placeholderImage:string = "/kevin.jpg"; 

    // console.log(data);
    
    return(<>
        {/* <h1>Actor Page {data.person_name} singular</h1> */}
        <Card sx={{ marginLeft: 20, marginTop: 3, marginBottom: 10, 
                    width: '200px',
                    
                    objectFit: 'contain', }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: lime[500] }}>
            <Link to={`/`}>
           <ArrowBackIcon />
           </Link>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Link to={`/`}>
              <MoreVertIcon />
            </Link>
            
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
        image={data.image ? artistImage : placeholderImage}
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
        
      </CardActions>
      
    </Card>
        </>
    )
}   