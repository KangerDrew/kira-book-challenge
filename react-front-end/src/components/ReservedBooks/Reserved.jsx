
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";


export default function Reserved(props) {

  const { title, bookId, reserveTrack, image } = props;

  return (
    <Card className="single-user-result" sx={{ height: 450, width: 300}}>
      <CardMedia 
        component="img"
        height="350"
        width="100"
        image={image}
      />
      <CardContent>
        <div className="book-main-title">{title}</div>
        <div className="reserved-books-count"> # of copes reserved: {reserveTrack[bookId].reserved}</div>
      </CardContent>
    </Card>
  );

}