import React from 'react'; // eslint-disable-line no-unused-vars
import { CREATE_BOOK, REMOVE_BOOK } from '../actions'
import { connect } from 'react-redux'

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <input type="text" name='bookTitle' />
        <select name="" id="">{categories.map((categorie) => <option key={categorie}>{categorie}</option>)}</select>
        <input type="submit" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => dispatch(CREATE_BOOK(book)),
    removeBook: (book) => dispatch(REMOVE_BOOK(book))
  }
}

export default connect(null, mapDispatchToProps)(BooksForm)