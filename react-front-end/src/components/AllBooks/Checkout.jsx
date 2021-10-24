import { Fragment } from "react";


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Checkout(props) {

  const { title, bookId, reserveTrack, setReserveTrack, handleClose } = props;

  const available = reserveTrack[bookId].quantity > 0 ? true : false;

  const reserveBook = function() {

    const afterCheckout = {quantity:(reserveTrack[bookId].quantity - 1), reserved:(reserveTrack[bookId].reserved + 1)}

    const newReserve = {...reserveTrack}

    newReserve[bookId] = afterCheckout;

    setReserveTrack(prev => newReserve)
    handleClose();
  }

  return (
    <Fragment>
      <Stack justifyContent="center" alignItems="center">
        <h4>You are about to reserve:</h4>
        <Typography variant="h6" sx={{ textAlign:"center" }}>{title}</Typography>
        {available ?
          <Stack justifyContent="center" alignItems="center">
            <h5>{reserveTrack[bookId].quantity} Copies Remaining:</h5>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="success" onClick={reserveBook}>Reserve</Button>
              <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
            </Stack>
          </Stack>
          : 
            <Stack direction="row" spacing={2}>
              <Button variant="contained" disabled>Out of stock</Button> 
              <Button variant="contained" color="error" onClick={handleClose}>Close</Button>
            </Stack>
          }
      </Stack>
    </Fragment>
  );

}