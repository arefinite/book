import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <nav className='container mx-auto px-4 md:px-0 mt-8'>
      <Link to='add-book'>
        <button className=' bg-green-600 px-3 py-1 text-white rounded hover:bg-green-800 cursor-pointer'>
          {' '}
          + Add Book
        </button>
      </Link>
    </nav>
  )
}
export default AddButton
