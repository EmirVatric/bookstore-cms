import React from 'react';

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