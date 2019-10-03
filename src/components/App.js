import React from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import BookList from './BookList'
import BooksForm from './BooksForm'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let { books } = this.props
    return (
      <div>
        <BookList books={books} />
        <BooksForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}


export default connect(mapStateToProps, null)(App)

