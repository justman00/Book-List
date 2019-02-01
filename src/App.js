import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { Route } from "react-router-dom";
import BookList from "./components/BookList";

import { getAll, update, search } from "./BooksAPI";
import SearchForm from "./components/SearchForm";

class BooksApp extends React.Component {
  state = {
    data: [],
    currentlyReading: [],
    read: [],
    wantToRead: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  };

  distributeState = data => {
    // function takes the entire data from the api and puts it into the state
    // console.log(data);
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
    // the api call
    getAll().then(data =>
      this.setState({ data: data }, () => this.distributeState(this.state.data))
    );
  };

  render() {
    return (
      <div className="app">
        {/* route to the initial home page */}
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              read={this.state.read}
              currentlyReading={this.state.currentlyReading}
              wantToRead={this.state.wantToRead}
            />
          )}
        />
        {/* route to the input page */}
        <Route path="/search" render={() => <SearchForm />} />
      </div>
    );
  }
}

export default BooksApp;

{
  /*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */
}
