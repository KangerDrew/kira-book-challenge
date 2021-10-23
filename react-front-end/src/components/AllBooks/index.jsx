import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Book from './Book';

export default function AllBooks(props) {
  const { currentBooks, reserveTrack, setReserveTrack } = props;

  // To evenly space out the books on display

  let boxSize = (currentBooks.length === 1) ? 12 : 4;
  boxSize = (currentBooks.length === 2) ? 6 : boxSize;

  const showBooks = currentBooks.map((book,index) => {
    return (<Grid key={index} align="center" item xs={boxSize}>
      <Book
        title={book.title}
        bookId={book.id}
        author={book.author}
        reserveTrack={reserveTrack}
        setReserveTrack={setReserveTrack}
        image={book.image}
      />
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