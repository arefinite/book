import { FaEye } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from '../../../services/Axios'

const TableView = ({ books }) => {

    const handleDelete = async(id) => {
        try {
            await axios.delete(`/${id}`)
            toast.success('Book Deleted')
        } catch (err) {
            console.log(err.message)
        }
    }

  return (
    <>
      <table className='w-full border-collapse border text-center '>
        <thead className='bg-slate-800 text-white'>
          <tr>
            <th className='py-2 w-2/5'>Title</th>
            <th className='w-1/5'>Author</th>
            <th className='w-1/5'>Published Year</th>
            <th className='w-1/5'>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ _id, author, title, publishYear }) => (
            <tr key={_id} className='even:bg-slate-200'>
              <td className='py-2'>{title}</td>
              <td>{author}</td>
              <td>{publishYear}</td>
              <td>
                <div className='inline-flex gap-6 text-xl'>
                  <span className='text-blue-700'>
                    <Link to={`book-detail/${_id}`}><FaEye/></Link>
                  </span>
                  <span className='text-green-700 cursor-pointer'>
                    <Link to={`update-book/${_id}`}>
                      <FaEdit />
                    </Link>
                  </span>
                  <span className='text-red-700'>
                    <MdDelete onClick={()=>handleDelete(_id)} />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
          </table>
        
    </>
  )
}
export default TableView
