import spinner from '/spinner.gif'
const Spinner = () => {
  return (
    <div className='absolute left-1/2 top-1/2 w-16 h-16  transform -translate-x-1/2 -translate-y-1/2'>
      <img src={spinner} alt='Loading...' />
    </div>
  )
}
export default Spinner
