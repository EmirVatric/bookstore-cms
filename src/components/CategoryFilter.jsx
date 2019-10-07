import React from 'react'; // eslint-disable-line no-unused-vars
import { categories } from '../constants'

const CategoryFilter = (props) => {
  return (
    <select className='categories1' onChange={(e) => props.handleFilterChange(e.target.value)}>
      <option value=''>All</option>
      {categories.map((categorie, index) => <option key={index}>{categorie}</option>)}
    </select>
  );
}

export default CategoryFilter;