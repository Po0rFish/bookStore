import React from 'react'
import './Home.css'
// import bookShelf from '../images/book_shelf.svg'
import bookShelf from '../images/book_shelf.jpg'
import { Link } from 'react-router-dom'
const Home = () => {

  return (
    <div className='Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center'>
      <div className='row container'>
        <div
          className='col-lg-6 d-flex justify-content-center align-items-start flex-column'
          style={{ height: '91.5vh' }}
        >
          <h2 style={{ fontSize: '90px' }}>BOOK STORE</h2>
          <h3 style={{ fontSize: '50px' }}>FOR YOU</h3>
          <p className='mb-0' style={{ color: 'silver' }}>Checkout The Books From Here.</p>
          <Link to={'/books'} className='view_books my-3 button card btn btn-primary'>View Books</Link>
        </div>
        <div
          className='col-lg-6 d-flex justify-content-center align-items-center flex-column'
          style={{ height: '91.5vh' }}
        >
          <img src={bookShelf} className="img-fluid  home_img p-3" alt="book shell" />

        </div>
      </div>
    </div>
  )
}

export default Home