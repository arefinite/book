import { FaEye } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
const CardView = ({ books }) => {
  return (
    <section className='grid  md:grid-cols-4 gap-4'>
        {books.map(({ _id, author, title, publishYear }) => (
          <div key={_id} className='shadow leading-7 p-4 text-center md:text-left'>
            <p>
              <strong>Title: </strong>
              {title}
            </p>
            <p>
              <strong>Author: </strong>
              {author}
            </p>
            <p>
              <strong>Publish Year: </strong>
              {publishYear}
            </p>

            <div className='inline-flex gap-5 text-xl mt-2'>
              <span className='text-blue-700'>
                <FaEye />
              </span>
              <span className='text-green-700'>
                <FaEdit />
              </span>
              <span className='text-red-700'>
                <MdDelete />
              </span>
            </div>
          </div>
        ))}
      </section>
  )
}
export default CardView