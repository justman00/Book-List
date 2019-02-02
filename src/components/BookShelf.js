import React from "react";

import Book from "./Book";

const BookShelf = props => {
  let detail;
  if (props.category === "Read") {
    detail = props.read;
  } else if (props.category === "Want to Read") {
    detail = props.wantToRead;
  } else {
    detail = props.currentlyReading;
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.category}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {detail.map(val => (
            <Book moveBook={props.moveBook} key={val.id} detail={val} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
