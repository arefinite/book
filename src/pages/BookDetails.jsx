import GoBack from '../components/GoBack'
import axios from '../services/Axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'

const BookDetails = () => {
  const [state, setState] = useState({
    loading: false,
    book: {},
    error: null,
  })

  const { id } = useParams()

  const getBook = async () => {
    try {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }))
      const res = await axios.get(`/${id}`)
      setState(prevState => ({
        ...prevState,
        loading: false,
        book: res.data.book,
      }))
    } catch (err) {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: err.message,
      }))
    } finally {
      setState(prevState => ({
        ...prevState,
        loading: false,
      }))
    }
  }

  useEffect(() => {
    getBook()
    //eslint-disable-next-line
  }, [])

  const { loading, error, book } = state

  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <p> Something went wrong! {error.message}</p>
  }

  return (
    <section className='container mx-auto px-4 md:px-0 mt-8'>
      <GoBack />
      <h1>Book Details</h1>
      <div className='flex flex-col leading-8 mt-4'>
        <p>
          <strong>Book Title: </strong>
          {book.title}
        </p>
        <p>
          <strong>Author Name: </strong>
          {book.author}
        </p>
        <p>
          <strong>Publish Year: </strong>
          {book.publishYear}
        </p>
        <p>
          <strong>Description: </strong>
          {book.description}
        </p>
      </div>
    </section>
  )
}
export default BookDetails
