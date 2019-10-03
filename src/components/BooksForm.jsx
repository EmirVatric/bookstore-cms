import React from 'react';

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

const BooksForm = (props) => {
  return (
    <div>
      <input type="text" name='bookTitle' />
      <select name="" id="">{categories.map((categorie) => <option key={categorie}>{categorie}</option>)}</select>
      <input type="submit" />
    </div>
  );
}

export default BooksForm;