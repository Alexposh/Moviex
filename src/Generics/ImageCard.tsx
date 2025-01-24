import Card from 'react-bootstrap/Card';

function ImageCard({title, width, imageKey, height}: {title: string, width:number, imageKey: string, height: number}) {
    const imageBase:string = "https://awkward-turquoise-hawk.myfilebase.com/ipfs/";
    const movieImage:string = imageBase + imageKey;

    const placeholderImage:string = "/wide.jpg";
  
  return (
    <>
      <Card style={{ width: '300px', height: '600px' }}>
        <Card.Img variant="top" src={imageKey ? movieImage : placeholderImage} width={width}  height={height}/>
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