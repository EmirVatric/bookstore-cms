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
  handleChange({ title, categorie }) {
    if (title) {
      this.setState({ title: title.value })
    }
    if (categorie) {
      this.setState({ categorie: categorie.value })
    }
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
      <div>
        <input
          type="text"
          onChange={(e) => this.handleChange({ title: e.target })}
          value={this.state.title}
        />
        <select
          onChange={(e) => this.handleChange({ categorie: e.target })}
          value={this.state.categorie}
        >
          {categories.map((categorie) => <option key={categorie}>{categorie}</option>)}
        </select>
        <input type="submit" value='Add book' onClick={() => this.handleSubmit()} />
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