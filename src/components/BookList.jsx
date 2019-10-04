import React from 'react'; // eslint-disable-line no-unused-vars
import Book from './Book'; // eslint-disable-line no-unused-vars
import {connect} from 'react-redux'
const BookList = (props) => {
  const { books } = props

  return (
    <div>
      <ul>
        {books.map((book) => <li key={book.id}><Book book={book} /></li>)}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}


export default connect(mapStateToProps, null)(BookList)


