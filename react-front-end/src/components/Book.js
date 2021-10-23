import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



export default function Book(props) {

  const { title, bookId } = props;

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
          <Typography gutterBottom variant="h6" component="div">
            {bookId}
          </Typography>
        </CardContent>
      </ CardActionArea>
    </Card>
  );
}