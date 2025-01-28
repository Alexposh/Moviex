import { Card, CardHeader, CardMedia,  Typography } from "@mui/material";
import { Link } from "react-router-dom";



function ImageCard({id, title, width, imageKey, height}: {id: number, title: string, width:number, imageKey: string, height: number}) {
    const imageBase:string = "https://awkward-turquoise-hawk.myfilebase.com/ipfs/";
    const movieImage:string = imageBase + imageKey;

    const placeholderImage:string = "/poster.jpg";
  
  return (
    <>
    {/* <Link to={`/`}> */}
    <Link to={`/movies/${id}`}>
    <Card sx={{ marginLeft: 1, marginTop: 2, marginBottom: 10, 
                    width: '500px',   
                    height: '80%',                 
                    objectFit: 'contain', }} >
             
      <CardMedia sx={{
                    width: width,
                    height: height,
                    objectFit: 'contain',
                    marginLeft: 18,
                    marginTop: 3
                }}
        component="img"
        height="350"
        image={imageKey ? movieImage : placeholderImage}
        alt={title}
      />  
       <CardHeader     sx={{ marginLeft: 2, marginTop: 2, marginBottom: 5,}}          
          title={<Typography sx={{ fontSize: '1.2rem' }}>
                  {title}
                </Typography>}
        /> 
     </Card>
     </Link>
      
    </>
  );
}

export default ImageCard;