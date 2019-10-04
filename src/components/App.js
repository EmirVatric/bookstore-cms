import React from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import BookList from './BookList'// eslint-disable-line no-unused-vars
import BooksForm from './BooksForm'// eslint-disable-line no-unused-vars

export default class App extends React.Component {
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

