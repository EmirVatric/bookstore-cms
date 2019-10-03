import React from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import BookList from './BookList'// eslint-disable-line no-unused-vars
import BooksForm from './BooksForm'// eslint-disable-line no-unused-vars
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
        <div className='wrapper'>
          <BooksForm />
        </div>
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

