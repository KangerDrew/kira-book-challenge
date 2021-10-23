import { Fragment, useState } from "react";

import Checkout from './Checkout';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// for modal
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export default function Book(props) {

  const { title, bookId, author, reserveTrack, setReserveTrack } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (
    <Fragment>
      <Card className="single-user-result" sx={{ minHeight: 120, width: 300}}>
        {/* <CardActionArea onClick={modalDisplay} > */}
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
          <Button onClick={handleOpen} color="secondary" >Reserve This Book</Button>
        {/* </ CardActionArea> */}
      </Card>

      {/* Modal to rent the book */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Checkout
            title={title}
            bookId={bookId}
            reserveTrack={reserveTrack}
            setReserveTrack={setReserveTrack}
            handleClose={handleClose}
          />
        </Box>
      </Modal>


    </Fragment>
  );
}