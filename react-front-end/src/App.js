import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AllBooks from './components/AllBooks';

function App() {
  const [bookList, setBookList] = useState([1]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  // As per requirement, only 3 books per page will be shown
  const booksPerPage = 3;

  // We also need to figure out which books to show based on 
  // the page number.

  const sliceFirst = page - 1;

  // Event handler for changing to different page
  const pageChange = (event, value) => {
    console.log(value);
    setPage(value);
  };


  // Get books from backend
  useEffect(() => {
    axios.get("/api/books")
    .then(results => {
      const returnArr = results.data;
      // Set the max pagination value
      setPageCount(Math.ceil(returnArr.length / booksPerPage))

      console.log(returnArr);
      // Set the bookList state with returned array
      setBookList([...returnArr]);      
    })
  },[])

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <AllBooks currentBooks={bookList.slice((page - 1)*booksPerPage, booksPerPage*page)} />
      <Pagination count={pageCount} color="primary" page={page} onChange={pageChange} />
    </Stack>
  );
}

export default App;
