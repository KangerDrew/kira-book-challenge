import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function App() {
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);


  // Event handler for changing to different page

  const pageChange = (event, value) => {
    console.log(value);
    setPage(value);
  };


  // Get books from backend
  useEffect(() => {
    axios.get("/api/books")
    .then(results => {
      console.log(results.data);
      setBookList([...results.data]);      
    })
  },[])


  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Pagination count={10} color="primary" page={page} onChange={pageChange} />
    </Stack>
  );
}

export default App;
