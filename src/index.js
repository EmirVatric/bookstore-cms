import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'; // eslint-disable-line no-unused-vars
import { createStore } from 'redux'
import { reducer } from './reducers'
import { CREATE_BOOK } from './actions'
import { Provider } from 'react-redux'// eslint-disable-line no-unused-vars

const books = [
  {
    id: Math.floor(Math.random() * 100),
    title: 'book1',
    categorie: "Action"
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'book2',
    categorie: "Biography"
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'book3',
    categorie: "History"
  }
]


const store = createStore(reducer)
books.forEach((book) => store.dispatch(CREATE_BOOK(book)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

