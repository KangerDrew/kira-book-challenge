import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

export default function UserResultList(props) {
  const { currentBooks } = props;

  const showBooks = currentBooks.map((book,index) => {
    return <div>{book.id}</div>
  });

  return (
    <Box m={2} pt={3}>
      <Grid container justify="center" alignItems="center" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {showBooks}
      </Grid>
    </Box>
  );

}