import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';

export default function ReservedBooks(props) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { bookList, reserveTrack } = props;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll'
  };

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
      <div>{book.title}</div>
    </Grid>)
  })


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
          
          {/* Books reserved below */}
          <Grid container justify="center" alignItems="center" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {displayBooks}
          </Grid>
        </Box>
      </Modal>
    </div>
  );

}