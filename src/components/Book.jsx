import React from 'react';// eslint-disable-line no-unused-vars

const Book = ({ book }) => {
  return (
    <div>
      <ul>
        <li>{book.title}</li>
        <li>{book.categorie}</li>
      </ul>
    </div>
  );
}

export default Book;