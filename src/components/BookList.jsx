import React from 'react'; // eslint-disable-line no-unused-vars
import Book from './Book'; // eslint-disable-line no-unused-vars
import CategoryFilter from './CategoryFilter' // eslint-disable-line no-unused-vars
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions'
import { connect } from 'react-redux'

const BookList = (props) => {
  const { books } = props
  const handleRemoveBook = props.removeBook
  const handleFilterChange = props.changeFilter
  return (
    <div>
      <div className='header'>
        <div className='container'>
          <span className='logo'>Bookstore CMS</span>
          <span className='categories'>Books</span>
          <span className='cat'><CategoryFilter handleFilterChange={handleFilterChange} /></span>
        </div>
        <div className='oval'>
          <div className='mask'><i className="fa fa-user"></i></div>
        </div>
      </div>
      <div className='wrapper'>
        <table className='table'>
            <tbody>
              {books.map((book, index) =>
                <Book
                  key={index}
                  book={book}
                  handleRemoveBook={handleRemoveBook}
                />)
              }
            </tbody>
        </table>
      </div>
      </div>
      );
    }
    
const mapStateToProps = (state) => {
        let {books,filter}=state;
  if(filter!==''){
        books = books.filter((book) => filter === book.categorie)
      }
      return {
        books
      }
      }
      
const mapDispatchToProps = (dispatch) => {
  return {
        removeBook: (book) => dispatch(REMOVE_BOOK(book)),
      changeFilter: (filter) => dispatch(CHANGE_FILTER(filter))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(BookList)