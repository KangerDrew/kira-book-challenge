import { Fragment, useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



export default function Book(props) {

  const { title, bookId, author, reserveTrack, setReserveTrack } = props;

  const modalDisplay = function(event) {
    event.preventDefault()
    console.log(`You clicked on bookId #${bookId}`)
  };

  console.log("Got TO HERE", reserveTrack);

  return (
    <Fragment>
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
            {reserveTrack ? <div>{reserveTrack[bookId].quantity}</div> : <div/>}
          </CardContent>
        </ CardActionArea>
      </Card>
    </Fragment>
  );
}