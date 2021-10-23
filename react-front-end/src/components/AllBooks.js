import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

export default function UserResultList(props) {
  const { currentBooks } = props;

  // To evenly space out the books on display
  
  let boxSize = (currentBooks.length === 1) ? 12 : 4;
  boxSize = (currentBooks.length === 2) ? 6 : boxSize;

  const showBooks = currentBooks.map((book,index) => {
    return (<Grid align="center" item xs={boxSize}>
    <div>{book.id}</div>
    </Grid>)
  });

  return (
    <Box m={2} pt={3}>
      <Grid container justify="center" alignItems="center" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {showBooks}
      </Grid>
    </Box>
  );

}