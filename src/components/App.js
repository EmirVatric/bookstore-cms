import React from 'react';// eslint-disable-line no-unused-vars
import './App.css';
import BookList from './BookList'// eslint-disable-line no-unused-vars
import BooksForm from './BooksForm'// eslint-disable-line no-unused-vars

const App = ()=>
      <div>
        <BookList />
        <div className='wrapper'>
          <BooksForm />
        </div>
      </div>

export default App;