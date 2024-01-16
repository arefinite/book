import { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import Filter from '../components/Filter'
import BookDisplay from '../components/shared/Book/BookDisplay'

const Home = () => {
  const [viewIn, setViewIn] = useState('table')
  const handleViewInChange = value => {
    setViewIn(value)
  }
  useEffect(() => {
    if (window.screen.width < 768) {
      setViewIn('card')
    }
  }, [])

  return (
    <main>
      <Filter viewIn={viewIn} handleViewInChange={handleViewInChange} />
      <AddButton />
      <BookDisplay viewIn={viewIn} />
    </main>
  )
}
export default Home
