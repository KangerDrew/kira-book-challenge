import { Fragment } from "react";


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Checkout(props) {

  const { title, bookId, reserveTrack, setReserveTrack, handleClose } = props;

  const available = reserveTrack[bookId].quantity > 0 ? true : false;

  const reserveBook = function() {

    const afterCheckout = {quantity:(reserveTrack[bookId].quantity - 1), reserved:(reserveTrack[bookId].reserved + 1)}
    console.log("afterCheckout;", afterCheckout);

    const newReserve = {...reserveTrack}

    newReserve[bookId] = afterCheckout;

    setReserveTrack(prev => newReserve)
    handleClose();
  }

  console.log("Were in Checkout Component", reserveTrack);
  console.log(`Reserve status for bookId ${bookId}`, reserveTrack[bookId]);

  return (
    <Fragment>
      <Stack justifyContent="center" alignItems="center">
        <h4>You are about to reserve:</h4>
        <h3>{title}</h3>
        {available ? 
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={reserveBook}>Reserve</Button>
            <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
          </Stack>
          : 
          <Button variant="contained" disabled>Out of stock</Button> }
      </Stack>
    </Fragment>
  );

}