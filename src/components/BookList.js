import React from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

const arr = ["Want to Read", "Currently Reading", "Read"];

const BookList = props => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {arr.map((val, i) => (
            <BookShelf
              read={props.read}
              currentlyReading={props.currentlyReading}
              wantToRead={props.wantToRead}
              category={val}
              key={i}
              moveBook={props.moveBook}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button
          // onClick={() => this.setState({ showSearchPage: true })}
          >
            Add a book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookList;
