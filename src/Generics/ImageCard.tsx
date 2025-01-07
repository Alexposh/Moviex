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
        </Card.Body>
      </Card>
      
    </>
  );
}

export default ImageCard;