import React from 'react'; // eslint-disable-line no-unused-vars
import { CREATE_BOOK } from '../actions'
import { connect } from 'react-redux'
import { categories } from '../constants'


class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      categorie: categories[0]
    }
  }
  handleChange(event) {
      this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit() {
    let { title, categorie } = this.state

    if (!(/([^\s])/.test(title))) {
      alert('The title should not be empty!');
      return;
    }

    let id = Math.floor(Math.random() * 100)
    this.props.addBook({
      id,
      title,
      categorie
    })
    this.setState({
      title: '',
      categorie: categories[0]
    })

  }
  render() {
    return (
      <div className='form'>
        <input
          className='input'
          placeholder='Book title'
          type="text"
          name="title"
          onChange={(e) => this.handleChange(e)}
          value={this.state.title}
        />
        <select
          className='formSelect'
          name="categorie"
          onChange={(e) => this.handleChange(e)}
          value={this.state.categorie}
        >
          {categories.map((categorie) => <option key={categorie}>{categorie}</option>)}
        </select>
        <input className='button2' type="submit" value='Add book' onClick={() => this.handleSubmit()} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => dispatch(CREATE_BOOK(book)),
  }
}

export default connect(null, mapDispatchToProps)(BooksForm)