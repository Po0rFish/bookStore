import React from 'react'
const BooksSection = ({ books }) => {
  console.log(books);
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap'>
      {books ? books.map((book, idx, arr) => {
        return (
          <div key={book._id} className="card mb-3" style={{ width: "18rem" }}>
            <div className="dropdown position-absolute top-0 end-0">
              <button
                className="btn btn-info dropdown-toggle"
                type="button" data-bs-toggle="dropdown"
                aria-expanded="false"
              >

              </button>
              <ul className="dropdown-menu ">

                <li><a type='button' className="dropdown-item bg-success  m-1 " href="#">Update</a></li>
                <li><a type='button' className="dropdown-item bg-danger  m-1 " href="#">Delete</a></li>

              </ul>
            </div>
            <img src={book.image} className="card-img-top"
              style={{ height: window.innerHeight - 500 }} alt="..." />

            <div className="card-body" >
              <h5 className="card-title">{`Title: ${book.bookname}`}</h5>
              <p className="card card-text description-section"
                style={{ overflow: 'auto' }}
              >
                {`${book.description}`}
              </p>
              <button type="button" className={`btn ${book.price < 1 ? "btn-danger" : "btn-success"}`}>
                {`Price: ${book.price}$`}
              </button>
              {/* <link href="#" className="btn btn-primary">Go somewhere</link> */}
            </div>

          </div>
        )
      }) :
        (<div key='load' className='text-white'>Data fetching...</div>)}
    </div>
  )
}

export default BooksSection