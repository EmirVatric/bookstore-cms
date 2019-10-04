import React from 'react'; // eslint-disable-line no-unused-vars
import Book from './Book'; // eslint-disable-line no-unused-vars
import CategoryFilter from './CategoryFilter' // eslint-disable-line no-unused-vars
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions'
import { connect } from 'react-redux'

const BookList = (props) => {
  const { books } = props
  const filteredBooks = books.filter((book) => {
    if (props.filter === '') {
      return true
    } else {
      return props.filter === book.categorie
    }
  })
  const handleRemoveBook = props.removeBook
  const handleFilterChange = props.changeFilter
  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>
              title
          </th>
            <th>
              categorie
          </th>
            <th>
              action
          </th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) =>
            <Book
              key={index}
              book={book}
              handleRemoveBook={handleRemoveBook}
            />

          )}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (book) => dispatch(REMOVE_BOOK(book)),
    changeFilter: (filter) => dispatch(CHANGE_FILTER(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)