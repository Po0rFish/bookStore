import { useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const initialState = {
  bookname: '',
  author: '',
  description: '',
  image: '',
  price: '',
}
const AddBooks = () => {
  const [data, setData] = useState(initialState)
  const navigate = useNavigate()
  const onChange = (event) => {
    const { name, value } = event.target
    setData({ ...data, [name]: value })
  }
  const submit = async (event) => {
    event.preventDefault()
    await axios.post("http://localhost:1000/api/v1/add", data).then(() => navigate('/books'))
  }
  return (
    <div className='bg-dark d-flex justify-content-center align-items-center'
      style={{ minHeight: '91.5vh' }} >
      <div className='container p-3'>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The Title Of The Book"
            name='bookname'
            onChange={onChange}
            value={data.bookname}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The Name Of Author"
            name='author'
            onChange={onChange}
            value={data.author}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter A Description Of The Book"
            name='description'
            onChange={onChange}
            value={data.description}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white">
            Image
          </label>
          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter A URL Of The Image"
            name='image'
            onChange={onChange}
            value={data.image}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter A Price"
            name='price'
            onChange={onChange}
            value={data.price}
          />
        </div>
        <button className='btn btn-success' onClick={submit}> Submit</button>

      </div>
    </ div>
  )
}

export default AddBooks