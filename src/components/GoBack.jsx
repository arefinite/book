import { Link } from 'react-router-dom'

const GoBack = () => {
  return (
    <Link to='/'>
      <button className='bg-yellow-400 px-4 py-1 rounded-full mb-6 hover:bg-yellow-600 hover:text-white cursor-pointer transition-all delay-50 outline-none border-none ease-in-out'>
        Go Back
      </button>
    </Link>
  )
}
export default GoBack
