import React from 'react';// eslint-disable-line no-unused-vars

const Book = ({ book, handleRemoveBook }) => {
  return (
    <tr className='Lesson-Panel'>
      <td>{book.title}</td>
      <td>{book.categorie}</td>
      <td><button className='button' onClick={() => handleRemoveBook(book)}>Delete</button></td>
    </tr>
  );
}

export default Book;