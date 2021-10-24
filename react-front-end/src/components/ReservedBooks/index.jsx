import React, { useState } from 'react';

import Reserved from "./Reserved";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

export default function ReservedBooks(props) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { bookList, reserveTrack } = props;


  const filterReserved = function(bookList, reserveTrack){
    
    if (!reserveTrack){
      return [];
    }

    const retArr = [];

    for(const book of bookList) {
      if (reserveTrack[book.id].reserved > 0) {
        retArr.push(book);
      }
    }

    return retArr;

  };

  const displayBooks = filterReserved(bookList, reserveTrack).map((book, index) => {
    return (<Grid key={index} align="center" item xs={6}>
      <Reserved
        title={book.title}
        bookId={book.id}
        reserveTrack={reserveTrack}
        image={book.image}
      />
    </Grid>)
  })

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: (displayBooks.length > 0 ? "60%" : 300),
    maxHeight: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll'
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" >Show Reserved Books</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            {displayBooks.length > 0 ?
            <Grid container justify="center" alignItems="center" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {displayBooks}
            </Grid>
            : <div>You don't have any books reserved</div>}
            <Button variant="contained" color="warning" onClick={handleClose}>Close</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );

}