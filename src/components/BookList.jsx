import React from 'react';
import Book from './Book'

const BookList = (props) => {
  const { books } = props

  return (
    <div>
      <ul>
        {books.map((book) => <li key={book}><Book book={book} /></li>)}
      </ul>
    </div>
  );
}

export default BookList;