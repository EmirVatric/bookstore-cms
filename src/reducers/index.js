import { combineReducers } from 'redux'
import { books } from './books'
import { filter } from './filter'
export const reducer = combineReducers({
  books, filter
})

