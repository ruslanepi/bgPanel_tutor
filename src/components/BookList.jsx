import Book from './Book'
import { data } from '../books'

const BookList = () => {
  return (
    <section className='booklist'>
      {data.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  )
}

export default BookList
