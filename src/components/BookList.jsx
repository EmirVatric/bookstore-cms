import React from 'react'; // eslint-disable-line no-unused-vars
import Book from './Book'; // eslint-disable-line no-unused-vars
import { REMOVE_BOOK } from '../actions'
import { connect } from 'react-redux'

const BookList = (props) => {
  const { books } = props
  const handleRemoveBook = props.removeBook
  return (
    <div>
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
          {books.map((book, index) =>
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
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (book) => dispatch(REMOVE_BOOK(book))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList)