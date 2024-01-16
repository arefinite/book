import GoBack from '../components/GoBack'
import axios from '../services/Axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const AddBook = () => {
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const formData = Object.fromEntries(data)
      try {
          axios.post('/', formData)
          toast.success('Book Added')
          navigate('/')
      } catch (err) {
          console.log(err.message)
      }
  }

  return (
    <section className='container mx-auto px-4 md:px-0 mt-8'>
      <GoBack />
      <h1>Add Book</h1>
      <form className='flex flex-col gap-4 mt-8' onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Book Title'
          className='border p-2 w-full md:max-w-96 focus:outline-none focus:border-slate-800'
        />
        <input
          type='text'
          name='author'
          placeholder='Author Name'
          className='border p-2 w-full md:max-w-96 focus:outline-none focus:border-slate-800'
        />
        <input
          type='number'
          name='publishYear'
          placeholder='Publish Year'
          className='border p-2 w-full md:max-w-96 focus:outline-none focus:border-slate-800'
        />
        <textarea
          name='description'
          rows={5}
          cols={30}
          placeholder='Description'
          className='border p-2 w-full md:max-w-96 focus:outline-none focus:border-slate-800'
        ></textarea>
        <div className='flex gap-3'>
          <input
            type='submit'
            value='Add Book'
            className='bg-green-600 w-fit px-3 py-1 text-white rounded hover:bg-green-800 cursor-pointer transition-all delay-50 ease-in-out'
          />
          <input
            type='reset'
            value='Reset'
            className='bg-red-600 w-fit px-3 py-1 text-white rounded hover:bg-red-800 cursor-pointer transition-all delay-50 ease-in-out'
          />
        </div>
      </form>
    </section>
  )
}
export default AddBook
