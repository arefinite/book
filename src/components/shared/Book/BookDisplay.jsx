import { useEffect, useState } from 'react'
import axios from '../../../services/Axios'

import Spinner from '../../Spinner'

import TableView from './TableView'
import CardView from './CardView'

const BookDisplay = ({ viewIn }) => {
  const [state, setState] = useState({
    loading: false,
    books: [],
    error: null,
  })
  const getBooks = async () => {
    setState(prevState => ({
      ...prevState,
      loading: true,
    }))
    try {
      const res = await axios.get('/')
      setState(prevState => ({
        ...prevState,
        loading: false,
        books: res.data.books,
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
    getBooks()
  }, [])

  const { loading, books, error } = state

  if (loading) {
    return <Spinner />
  }
  if (error) {
    return (
      <p className='container mx-auto px-4 md:px-0 mt-8'>
        Something went wrong! {error.message}
      </p>
    )
  }

  return (
    <main className='container mx-auto px-4 md:px-0 mt-8'>
      {viewIn === 'table' && <TableView books={books} />}
      {viewIn === 'card' && <CardView books={books} />}
    </main>
  )
}
export default BookDisplay
