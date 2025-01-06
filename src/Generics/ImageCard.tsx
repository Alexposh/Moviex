import Card from 'react-bootstrap/Card';

function ImageCard({title, width}: {title: string, width:number}) {
    
  
  return (
    <>
      <Card style={{ width: '300px' }}>
        <Card.Img variant="top" src="./wide.jpg" width={width} />
        <Card.Body>
          <Card.Text>
            {title}
          </Card.Text>
          {/* <p>{tagline}</p> */}
          {/* <p>Average rating: {vote_average}</p><p>From {vote_count} votes</p> */}
        </Card.Body>
      </Card>
      
    </>
  );
}

export default ImageCard;