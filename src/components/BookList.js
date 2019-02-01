import React from "react";
import BookShelf from "./BookShelf";

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
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => this.setState({ showSearchPage: true })}>
          Add a book
        </button>
      </div>
    </div>
  );
};

export default BookList;
