import './App.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllBooks from './components/AllBooks';
import ReservedBooks from './components/ReservedBooks';
import './components/MinorAdjustments.scss'

// Material UI Content
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';


function App() {
  const [bookList, setBookList] = useState([]);
  const [displayBookList, setDisplayBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [reserveTrack, setReserveTrack] = useState(undefined);

  // As per requirement, only 3 books per page will be shown
  const booksPerPage = 3;

  // Event handler for changing to different page
  const pageChange = (event, value) => {
    setPage((prev) => value);
  };

  // Get books from backend
  useEffect(() => {
    axios.get("/api/books")
    .then(results => {
      const returnArr = results.data;
      // Set the max pagination value
      setPageCount((prev) => Math.ceil(returnArr.length / booksPerPage))

      // Set the base bookList state with returned array
      setBookList((prev) => [...returnArr]);

      // Set the displaying bookList
      setDisplayBookList((prev) => [...returnArr]);


      // reserveTrack is an object to keep track of 
      // which books are reserved or not, as well as
      // how many remain in stock. We must first iterate
      // through returnArr.

      const newObj = {};

      for (const aBook of returnArr) {
        // No book would have been reserved on first render.
        // Set reserved to 0.
        newObj[aBook.id] = {quantity: aBook.quantity, reserved: 0 };
      }

      setReserveTrack((prev) => newObj);

    })
  },[])

  // Function for filtering search:

  const filterSearch = function(event){
    event.preventDefault()

    if(!searchTerm) {
      setDisplayBookList((prev) => [...bookList]);
      setPageCount((prev) => Math.ceil(bookList.length / booksPerPage))
      return;
    }

    // If a search term isn't empty, then use for loop to filter by title

    const filteredBooks = [];

    for (const aBook of bookList){
      const lowercase = aBook.title.toLowerCase(); 

      if (lowercase.includes(searchTerm.toLowerCase())){
        filteredBooks.push(aBook);
      }
    }
    
    // Change the displayed books to the filtered result
    setDisplayBookList((prev) => [...filteredBooks]);
    setPageCount((prev) => Math.ceil(filteredBooks.length / booksPerPage));
    setPage(1);

    return;
  };


  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <h1>Books To Checkout</h1>
      <form onSubmit={filterSearch} className="search-button-form">
        <FormControl sx={{ width: '40ch', display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Your Search"
          id="filled-size-normal"
          onChange={({ target }) => setSearchTerm(target.value)}
          variant="filled"
          InputProps={{endAdornment:(
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>)}}
          />
        </FormControl>
      </form>
      <AllBooks 
        currentBooks={displayBookList.slice((page - 1)*booksPerPage, booksPerPage*page)}
        reserveTrack={reserveTrack}
        setReserveTrack={setReserveTrack}
      />
      <Pagination count={pageCount} color="primary" page={page} onChange={pageChange} />
      <ReservedBooks bookList={bookList} reserveTrack={reserveTrack} />
      <div className="app-bottom-spacer"></div>
    </Stack>
  );
}

export default App;
