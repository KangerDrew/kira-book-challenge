import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllBooks from './components/AllBooks';

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

  // As per requirement, only 3 books per page will be shown
  const booksPerPage = 3;

  // Event handler for changing to different page
  const pageChange = (event, value) => {
    console.log(value);
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
    })
  },[])

  // Function for filtering search:

  const filterSearch = function(event){
    event.preventDefault()
    console.log("Your search went through");
    console.log(searchTerm);

    if(!searchTerm) {
      console.log("string is empty, reset the filtered result");
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
    setPageCount((prev) => Math.ceil(filteredBooks.length / booksPerPage))

    return;
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
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
      <AllBooks currentBooks={displayBookList.slice((page - 1)*booksPerPage, booksPerPage*page)} />
      <Pagination count={pageCount} color="primary" page={page} onChange={pageChange} />
    </Stack>
  );
}

export default App;
