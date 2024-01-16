import GoBack from '../components/GoBack'
import axios from '../services/Axios'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'

const UpdateBook = () => {
  const [state, setState] = useState({
    loading: false,
    book: {},
    error: null,
  })
  const navigate = useNavigate()
  const { id } = useParams()
  const handleSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const formData = Object.fromEntries(data)
    try {
      axios.put(`/${id}`, formData)
      toast.success('Book Updated')
      navigate('/')
    } catch (err) {
      console.log(err.message)
    }
  }

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
      <h1>Update Book</h1>
      <form className='flex flex-col gap-4 mt-8' onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          defaultValue={book.title}
          placeholder='Book Title'
          className='border p-2 w-full md:max-w-96 focus:outline-none focus:border-slate-800'
        />
        <input
          type='text'
          name='author'
          defaultValue={book.author}
          placeholder='Author Name'
          className='border p-2 w-full md:max-w-96 focus:outline-none focus:border-slate-800'
        />
        <input
          type='number'
          name='publishYear'
          defaultValue={book.publishYear}
          placeholder='Publish Year'
          className='border p-2 w-full md:max-w-96 focus:outline-none focus:border-slate-800'
        />
        <textarea
          name='description'
          defaultValue={book.description}
          rows={5}
          cols={30}
          placeholder='Description'
          className='border p-2 w-full md:max-w-96 focus:outline-none focus:border-slate-800'
        ></textarea>
        <div className='flex gap-3'>
          <input
            type='submit'
            value='Update Book'
            className='bg-green-600 w-fit px-3 py-1 text-white rounded hover:bg-green-800 cursor-pointer transition-all delay-50 ease-in-out'
          />
         
        </div>
      </form>
    </section>
  )
}
export default UpdateBook
