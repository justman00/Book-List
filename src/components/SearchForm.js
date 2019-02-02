import React from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      displayBooks: [],
      inputValue: ""
    };
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  onDisplayBooksOnSubmit = (query, e) => {
    e.preventDefault();
    search(query).then(books =>
      this.setState({ displayBooks: books, inputValue: "" })
    );
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div>
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
          </div>

          <div className="search-books-input-wrapper">
            <form
              onSubmit={e =>
                this.onDisplayBooksOnSubmit(this.state.inputValue, e)
              }
            >
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
              />
            </form>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.displayBooks.length > 1 ? (
              this.state.displayBooks.map(book => (
                <Book moveBook={this.props.moveBook} detail={book} />
              ))
            ) : (
              <div>Nothing Found</div>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchForm;
