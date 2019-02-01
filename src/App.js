import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

import BookList from "./components/BookList";

import { getAll, update, search } from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    data: [],
    currentlyReading: [],
    read: [],
    wantToRead: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  distributeState = data => {
    console.log(data);
    const read = data.filter(book => book.shelf === "read");
    const wantToRead = data.filter(book => book.shelf === "wantToRead");
    const currentlyReading = data.filter(
      book => book.shelf === "currentlyReading"
    );
    this.setState({
      read,
      currentlyReading,
      wantToRead
    });
  };

  componentDidMount = () => {
    getAll().then(data =>
      this.setState({ data: data }, () => this.distributeState(this.state.data))
    );
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
          <BookList
            read={this.state.read}
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
