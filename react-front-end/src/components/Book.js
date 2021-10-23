import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



export default function Book(props) {

  const { title, bookId, author, quantity } = props;

  const modalDisplay = function(event) {
    event.preventDefault()
    console.log(`You clicked on bookId #${bookId}`)
  };

  return (
    <Card className="single-user-result" sx={{ minHeight: 120, width: 300}}>
       <CardActionArea onClick={modalDisplay} >
        <CardContent>
          <Typography gutterBottom variant="string" component="div">
            {title}
          </Typography>
          <div>{author}</div>
          <Typography gutterBottom variant="h6" component="div">
            {bookId}
          </Typography>
          <div>{quantity}</div>
        </CardContent>
      </ CardActionArea>
    </Card>
  );
}