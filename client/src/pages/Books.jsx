import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BooksSection from '../components/BooksSection'
const Books = () => {
  const [books, setBooks] = useState()
  useEffect(() => {
    const fetchBooks = async () => await axios.get("http://localhost:1000/api/v1/getBooks")
      .then((res) => setBooks(res.data.books))
    fetchBooks()
  }, [])
  return (
    <div className='bg-dark' style={{ minHeight: '91.5vh' }}>
      <div className='d-flex justify-content-center align-items-center py-3'>
        <h4 className='text-white'>Books Section</h4>
      </div>
      <BooksSection books={books} />
    </div>
  )
}

export default Books